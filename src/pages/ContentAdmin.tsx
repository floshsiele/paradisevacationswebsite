import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Loader2, LogOut, Sparkles, RefreshCw, Settings2, Trash2, CheckCircle2, FileText, Globe2, Clock3, Search, Upload } from 'lucide-react';

const ContentAdmin = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const [settings, setSettings] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [runs, setRuns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [filter, setFilter] = useState('all');
  const [articlePage, setArticlePage] = useState(1);
  const [runPage, setRunPage] = useState(1);
  const ARTICLES_PER_PAGE = 10;
  const RUNS_PER_PAGE = 5;
  const [keywordStats, setKeywordStats] = useState({ total: 0, used: 0, remaining: 0, currentCycle: 1 });
  const [keywordSiteUrl, setKeywordSiteUrl] = useState('https://paradisevacationswebsite.lovable.app');
  const [keywordCount, setKeywordCount] = useState(100);
  const [analyzingKeywords, setAnalyzingKeywords] = useState(false);
  const [selectedPostIds, setSelectedPostIds] = useState<string[]>([]);

  const load = async () => {
    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { navigate('/admin/login'); return; }
    const { data: adminRow } = await supabase.from('content_admins').select('user_id').eq('user_id', session.user.id).maybeSingle();
    if (!adminRow) { toast.error('Your account is not a content admin.'); await supabase.auth.signOut(); navigate('/admin/login'); return; }
    setAdmin(true);
    const [{ data: s }, { data: p }, { data: r }, { data: keywordStatsRow, error: keywordStatsError }] = await Promise.all([
      supabase.from('content_automation_settings').select('*').single(),
      supabase.from('blog_posts').select('*').order('created_at', { ascending: false }).limit(100),
      supabase.from('content_generation_runs').select('*').order('started_at', { ascending: false }).limit(100),
      supabase.rpc('get_content_keyword_stats'),
    ]);
    if (keywordStatsError) console.error('Keyword stats error:', keywordStatsError);
    const ks = Array.isArray(keywordStatsRow) ? keywordStatsRow[0] : keywordStatsRow;
    setKeywordStats({
      total: Number(ks?.total_keywords || 0),
      used: Number(ks?.used_keywords || 0),
      remaining: Number(ks?.remaining_this_cycle || 0),
      currentCycle: Number(ks?.current_cycle || 1),
    });
    setSettings(s); setPosts(p || []); setRuns(r || []); setSelectedPostIds([]); setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const getRunStatus = (run: any) => run.status || 'running';

  // Lightweight AJAX-style progress refresh. This intentionally does not call
  // `load()` because `load()` toggles the page-level loading state and causes
  // the dashboard to visibly reload while background jobs are running.
  const refreshRunProgress = async () => {
    const [{ data: latestRuns }, { data: jobs }] = await Promise.all([
      supabase.from('content_generation_runs').select('*').order('started_at', { ascending: false }).limit(100),
      supabase.from('content_generation_jobs').select('run_id,status').order('created_at', { ascending: false }).limit(1000),
    ]);

    const jobCounts = new Map<string, { completed: number; failed: number; processing: number; pending: number }>();
    (jobs || []).forEach((job: any) => {
      const current = jobCounts.get(job.run_id) || { completed: 0, failed: 0, processing: 0, pending: 0 };
      if (job.status === 'completed') current.completed += 1;
      else if (job.status === 'failed') current.failed += 1;
      else if (job.status === 'processing') current.processing += 1;
      else current.pending += 1;
      jobCounts.set(job.run_id, current);
    });

    setRuns((latestRuns || []).map((run: any) => {
      const counts = jobCounts.get(run.id);
      if (!counts) return run;
      return {
        ...run,
        generated_count: Math.max(Number(run.generated_count || 0), counts.completed),
        failed_count: Math.max(Number(run.failed_count || 0), counts.failed),
        processing_count: counts.processing,
        pending_count: counts.pending,
      };
    }));
  };

  const hasActiveRun = runs.some((run) => getRunStatus(run) === 'running');

  useEffect(() => {
    if (!hasActiveRun) return;
    refreshRunProgress();
    const timer = window.setInterval(refreshRunProgress, 2500);
    return () => window.clearInterval(timer);
  }, [hasActiveRun]);

  const save = async () => {
    if (!settings) return;
    const { error } = await supabase.from('content_automation_settings').update({
      enabled: settings.enabled, posts_per_day: Number(settings.posts_per_day), words_per_post: Number(settings.words_per_post),
      auto_publish: settings.auto_publish, default_category: settings.default_category, brand_instructions: settings.brand_instructions,
      target_keywords: settings.target_keywords,
    }).eq('id', settings.id);
    if (error) toast.error(error.message); else toast.success('Automation settings saved.');
  };

  const analyzeWebsiteKeywords = async () => {
    setAnalyzingKeywords(true);
    try {
      const { data, error } = await supabase.functions.invoke('analyze-website-keywords', { body: { url: keywordSiteUrl, count: Number(keywordCount) } });
      if (error) throw error;
      toast.success(`${data?.keywords_added || 0} new keywords added from ${data?.pages_analyzed || 0} analyzed website pages.`);
      await load();
    } catch (e: any) { toast.error(e.message || 'Website keyword analysis failed.'); }
    finally { setAnalyzingKeywords(false); }
  };

  const generate = async () => {
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-content', { body: { count: Number(settings?.posts_per_day || 10) } });
      if (error) throw error;
      toast.success(`${data?.queued || 0} article generation job(s) queued. The dashboard will update as each article finishes.`);
      await refreshRunProgress();
    } catch (e: any) { toast.error(e.message || 'Generation failed.'); }
    finally { setGenerating(false); }
  };

  const updateStatus = async (post: any, status: 'draft' | 'published') => {
    const patch = status === 'published' ? { status, published_at: post.published_at || new Date().toISOString() } : { status, published_at: null };
    const { error } = await supabase.from('blog_posts').update(patch).eq('id', post.id);
    if (error) toast.error(error.message); else { toast.success(status === 'published' ? 'Article published.' : 'Article moved to draft.'); load(); }
  };

  const removePost = async (post: any) => {
    if (!window.confirm(`Delete “${post.title}”? This cannot be undone.`)) return;
    const { error } = await supabase.from('blog_posts').delete().eq('id', post.id);
    if (error) toast.error(error.message); else { toast.success('Article deleted.'); load(); }
  };

  const togglePostSelection = (id: string, checked: boolean) => {
    setSelectedPostIds(current => checked
      ? (current.includes(id) ? current : [...current, id])
      : current.filter(postId => postId !== id));
  };

  const toggleSelectAllPosts = (checked: boolean) => {
    const visibleIds = paginatedPosts.map(post => post.id);
    setSelectedPostIds(prev => {
      if (checked) {
        return Array.from(new Set([...prev, ...visibleIds]));
      }
      return prev.filter(id => !visibleIds.includes(id));
    });
  };

  const publishSelectedPosts = async () => {
    if (!selectedPostIds.length) return;
    if (!window.confirm(`Publish ${selectedPostIds.length} selected article${selectedPostIds.length === 1 ? '' : 's'}?`)) return;
    const { error } = await supabase
      .from('blog_posts')
      .update({ status: 'published', published_at: new Date().toISOString() })
      .in('id', selectedPostIds);
    if (error) toast.error(error.message);
    else {
      toast.success(`${selectedPostIds.length} article${selectedPostIds.length === 1 ? '' : 's'} published.`);
      setSelectedPostIds([]);
      await load();
    }
  };

  const deleteSelectedPosts = async () => {
    if (!selectedPostIds.length) return;
    if (!window.confirm(`Delete ${selectedPostIds.length} selected article${selectedPostIds.length === 1 ? '' : 's'} permanently? This cannot be undone.`)) return;
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .in('id', selectedPostIds);
    if (error) toast.error(error.message);
    else {
      toast.success(`${selectedPostIds.length} article${selectedPostIds.length === 1 ? '' : 's'} deleted.`);
      setSelectedPostIds([]);
      setArticlePage(1);
      await load();
    }
  };

  const filteredPosts = useMemo(() => filter === 'all' ? posts : posts.filter(p => p.status === filter), [posts, filter]);
  const articlePageCount = Math.max(1, Math.ceil(filteredPosts.length / ARTICLES_PER_PAGE));
  const paginatedPosts = useMemo(() => {
    const start = (articlePage - 1) * ARTICLES_PER_PAGE;
    return filteredPosts.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredPosts, articlePage]);
  const runPageCount = Math.max(1, Math.ceil(runs.length / RUNS_PER_PAGE));
  const paginatedRuns = useMemo(() => {
    const start = (runPage - 1) * RUNS_PER_PAGE;
    return runs.slice(start, start + RUNS_PER_PAGE);
  }, [runs, runPage]);

  useEffect(() => {
    setArticlePage(1);
  }, [filter]);

  useEffect(() => {
    if (articlePage > articlePageCount) setArticlePage(articlePageCount);
  }, [articlePage, articlePageCount]);

  useEffect(() => {
    if (runPage > runPageCount) setRunPage(runPageCount);
  }, [runPage, runPageCount]);
  const stats = useMemo(() => ({
    total: posts.length,
    published: posts.filter(p => p.status === 'published').length,
    drafts: posts.filter(p => p.status === 'draft').length,
    scheduled: posts.filter(p => p.status === 'scheduled').length,
  }), [posts]);

  const signOut = async () => { await supabase.auth.signOut(); navigate('/admin/login'); };
  if (loading || !admin) return <div className="min-h-screen grid place-items-center"><Loader2 className="animate-spin" /></div>;

  return <div className="min-h-screen bg-muted/30">
    <header className="border-b bg-background sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div><p className="text-xs uppercase tracking-widest text-primary">Paradise Vacations</p><h1 className="font-display text-2xl">AI Content Manager</h1></div>
        <Button variant="outline" onClick={signOut}><LogOut className="mr-2 h-4 w-4" /> Sign out</Button>
      </div>
    </header>
    <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[['Total articles', stats.total, FileText], ['Published', stats.published, Globe2], ['Drafts', stats.drafts, Clock3], ['Scheduled', stats.scheduled, CheckCircle2]].map(([label, value, Icon]: any) => <div key={label} className="rounded-2xl border bg-background p-5 shadow-sm"><div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">{label}</span><Icon className="h-4 w-4 text-primary" /></div><p className="font-display text-3xl mt-2">{value}</p></div>)}
      </section>
      <section className="grid lg:grid-cols-[1.4fr_.6fr] gap-6">
        <div className="rounded-2xl border bg-background p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between"><div><h2 className="font-display text-2xl">Automation</h2><p className="text-sm text-muted-foreground">Generate and publish SEO content automatically.</p></div><div className="flex items-center gap-3"><span className="text-sm">Enabled</span><Switch checked={!!settings.enabled} onCheckedChange={(v) => setSettings({ ...settings, enabled: v })} /></div></div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div><Label>Posts per day</Label><Input type="number" min="1" max="50" value={settings.posts_per_day} onChange={e => setSettings({ ...settings, posts_per_day: e.target.value })} /></div>
            <div><Label>Words per post</Label><Input type="number" min="500" max="3000" value={settings.words_per_post} onChange={e => setSettings({ ...settings, words_per_post: e.target.value })} /></div>
            <div><Label>Fallback category</Label><Input value={settings.default_category} onChange={e => setSettings({ ...settings, default_category: e.target.value })} /></div>
            <div className="flex items-center gap-3 pt-6"><Switch checked={!!settings.auto_publish} onCheckedChange={(v) => setSettings({ ...settings, auto_publish: v })} /><span className="text-sm">Auto-publish generated posts</span></div>
          </div>
          <div className="rounded-xl border bg-background p-4 space-y-4"><div className="flex items-start gap-3"><div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10"><Search className="h-4 w-4 text-primary" /></div><div><Label>Generate SEO keywords from your website</Label><p className="mt-1 text-xs leading-5 text-muted-foreground">Scan your website content and build keyword ideas from the services, destinations, tours, packages, travel topics and other content areas actually covered on the site.</p></div></div><div className="grid md:grid-cols-[1fr_140px_auto] gap-3 items-end"><div><Label>Website URL</Label><Input value={keywordSiteUrl} onChange={e => setKeywordSiteUrl(e.target.value)} placeholder="https://yourwebsite.com" /></div><div><Label>Keywords</Label><Input type="number" min="10" max="250" value={keywordCount} onChange={e => setKeywordCount(Number(e.target.value))} /></div><Button onClick={analyzeWebsiteKeywords} disabled={analyzingKeywords}>{analyzingKeywords ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}Analyze & Generate</Button></div><div className="rounded-lg bg-muted/50 px-3 py-2"><p className="text-xs leading-5 text-muted-foreground">The analyzer discovers pages from your sitemap and internal links, analyzes page titles, headings, descriptions and visible content across the site, generates keywords from different content areas, and skips keywords already in your library.</p></div></div><div className="rounded-xl border bg-muted/40 p-4 space-y-2"><div className="flex items-center justify-between gap-3"><div><Label>SEO keyword library</Label><p className="text-xs text-muted-foreground">The master Kenya keyword library is selected automatically. Keywords are used once per cycle, then reused in the next cycle with a new article angle.</p></div><span className="text-xs font-medium whitespace-nowrap shrink-0 rounded-full bg-background px-3 py-1">Cycle {keywordStats.currentCycle}</span></div><div className="grid grid-cols-3 gap-3 text-sm"><div><span className="text-muted-foreground">Total</span><div className="font-semibold">{keywordStats.total}</div></div><div><span className="text-muted-foreground">Used</span><div className="font-semibold">{keywordStats.used}</div></div><div><span className="text-muted-foreground">Remaining this cycle</span><div className="font-semibold">{keywordStats.remaining}</div></div></div></div>
          <div><Label>Brand instructions</Label><Textarea rows={5} value={settings.brand_instructions} onChange={e => setSettings({ ...settings, brand_instructions: e.target.value })} /></div>
          <div className="flex flex-wrap gap-3"><Button onClick={save}><Settings2 className="mr-2 h-4 w-4" /> Save settings</Button><Button variant="outline" onClick={generate} disabled={generating}>{generating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />} Generate {settings.posts_per_day} posts now</Button><Button variant="ghost" onClick={load}><RefreshCw className="mr-2 h-4 w-4" /> Refresh</Button></div>
        </div>
        <div className="self-start rounded-2xl border bg-background p-6 shadow-sm"><h2 className="font-display text-2xl mb-4">Pipeline</h2><div className="space-y-4 text-sm"><div className="p-4 rounded-xl bg-muted"><b>1. Topics</b><p className="text-muted-foreground">Randomly selects a keyword from the least-used group; every keyword is covered once before the cycle repeats.</p></div><div className="p-4 rounded-xl bg-muted"><b>2. AI article</b><p className="text-muted-foreground">~{settings.words_per_post} words with SEO metadata and structured HTML.</p></div><div className="p-4 rounded-xl bg-muted"><b>3. Pexels image</b><p className="text-muted-foreground">Finds a relevant featured image and records attribution data.</p></div><div className="p-4 rounded-xl bg-muted"><b>4. Publish</b><p className="text-muted-foreground">Draft by default, or automatically publish when enabled.</p></div></div></div>
      </section>
      <section className="rounded-2xl border bg-background overflow-hidden"><div className="p-6 border-b flex flex-wrap items-center justify-between gap-4"><div><h2 className="font-display text-2xl">Recent articles</h2><p className="text-sm text-muted-foreground">AI assigns each article a category from its content. The fallback category is used only if the AI returns an invalid category.</p></div><div className="flex flex-wrap items-center gap-2"><div className="flex gap-2">{['all','published','draft','scheduled'].map(f => <Button key={f} size="sm" variant={filter === f ? 'default' : 'outline'} onClick={() => setFilter(f)} className="capitalize">{f}</Button>)}</div>{selectedPostIds.length > 0 && <><Button size="sm" onClick={publishSelectedPosts}><Upload className="mr-2 h-4 w-4" />Publish selected ({selectedPostIds.length})</Button><Button size="sm" variant="destructive" onClick={deleteSelectedPosts}><Trash2 className="mr-2 h-4 w-4" />Delete selected ({selectedPostIds.length})</Button></>}</div></div><div className="overflow-x-auto"><table className="w-full text-sm"><thead className="bg-muted/50"><tr><th className="p-4 w-12"><Checkbox aria-label="Select all articles" checked={paginatedPosts.length > 0 && paginatedPosts.every(post => selectedPostIds.includes(post.id))} onCheckedChange={(checked) => toggleSelectAllPosts(checked === true)} /></th><th className="text-left p-4">Title</th><th className="text-left p-4">Category</th><th className="text-left p-4">Status</th><th className="text-left p-4">Created</th><th className="text-right p-4">Actions</th></tr></thead><tbody>{paginatedPosts.map(p => <tr key={p.id} className="border-t"><td className="p-4"><Checkbox aria-label={`Select ${p.title}`} checked={selectedPostIds.includes(p.id)} onCheckedChange={(checked) => togglePostSelection(p.id, checked === true)} /></td><td className="p-4 font-medium max-w-xl"><div>{p.title}</div>{p.focus_keyword && <div className="text-xs text-muted-foreground mt-1">Keyword: {p.focus_keyword}{p.keyword_cycle ? ` · Cycle ${p.keyword_cycle}` : ''}</div>}</td><td className="p-4">{p.category}</td><td className="p-4"><span className="capitalize">{p.status}</span></td><td className="p-4 text-muted-foreground">{new Date(p.created_at).toLocaleString()}</td><td className="p-4"><div className="flex justify-end gap-2">{p.status !== 'published' ? <Button size="sm" onClick={() => updateStatus(p, 'published')}>Publish</Button> : <Button size="sm" variant="outline" onClick={() => updateStatus(p, 'draft')}>Draft</Button>}<Button size="icon" variant="ghost" onClick={() => removePost(p)} aria-label="Delete"><Trash2 className="h-4 w-4" /></Button></div></td></tr>)}{filteredPosts.length === 0 && <tr><td colSpan={6} className="p-8 text-center text-muted-foreground">No articles in this filter.</td></tr>}</tbody></table></div><div className="flex items-center justify-between border-t px-6 py-4"><p className="text-sm text-muted-foreground">{filteredPosts.length === 0 ? '0 articles' : `Showing ${(articlePage - 1) * ARTICLES_PER_PAGE + 1}-${Math.min(articlePage * ARTICLES_PER_PAGE, filteredPosts.length)} of ${filteredPosts.length} articles`}</p><div className="flex items-center gap-2"><Button size="sm" variant="outline" onClick={() => setArticlePage(p => Math.max(1, p - 1))} disabled={articlePage === 1}>Previous</Button><span className="text-sm text-muted-foreground whitespace-nowrap">Page {articlePage} of {articlePageCount}</span><Button size="sm" variant="outline" onClick={() => setArticlePage(p => Math.min(articlePageCount, p + 1))} disabled={articlePage === articlePageCount}>Next</Button></div></div></section>
      <section className="rounded-2xl border bg-background p-6"><div className="flex items-center justify-between gap-4 mb-4"><div><h2 className="font-display text-2xl">Automation runs</h2><p className="text-sm text-muted-foreground">Each article is now processed as an independent background job.</p></div><RefreshCw className="h-4 w-4 text-muted-foreground" /></div><div className="space-y-3">{paginatedRuns.map(r => { const status = getRunStatus(r); const finished = Number(r.generated_count || 0) + Number(r.failed_count || 0); const progress = r.requested_count ? Math.min(100, Math.round((finished / r.requested_count) * 100)) : 0; return <div key={r.id} className="rounded-xl bg-muted/50 p-4 text-sm"><div className="flex flex-wrap items-center justify-between gap-3"><div><b>{r.generated_count}/{r.requested_count} generated</b><span className="text-muted-foreground"> · {r.published_count} published · {r.failed_count} failed</span></div><span className={`capitalize ${status === 'interrupted' ? 'text-destructive' : status === 'completed' ? 'text-emerald-600' : status === 'failed' ? 'text-destructive' : 'text-primary'}`}>{status} · {new Date(r.started_at).toLocaleString()}</span></div>{status === 'running' && <div className="mt-3"><div className="h-2 overflow-hidden rounded-full bg-background"><div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} /></div><p className="mt-1 text-xs text-muted-foreground">{finished} of {r.requested_count} jobs finished{Number(r.processing_count || 0) > 0 ? ` · ${r.processing_count} generating` : ''}{Number(r.pending_count || 0) > 0 ? ` · ${r.pending_count} queued` : ''}. Updates automatically every 2.5 seconds.</p></div>}</div>})}{runs.length === 0 && <p className="text-sm text-muted-foreground">No automation runs yet.</p>}</div>{runs.length > 0 && <div className="flex items-center justify-between border-t mt-4 pt-4"><p className="text-sm text-muted-foreground">Showing {(runPage - 1) * RUNS_PER_PAGE + 1}-{Math.min(runPage * RUNS_PER_PAGE, runs.length)} of {runs.length} runs</p><div className="flex items-center gap-2"><Button size="sm" variant="outline" onClick={() => setRunPage(p => Math.max(1, p - 1))} disabled={runPage === 1}>Previous</Button><span className="text-sm text-muted-foreground whitespace-nowrap">Page {runPage} of {runPageCount}</span><Button size="sm" variant="outline" onClick={() => setRunPage(p => Math.min(runPageCount, p + 1))} disabled={runPage === runPageCount}>Next</Button></div></div>}</section>
    </main>
  </div>;
};
export default ContentAdmin;
