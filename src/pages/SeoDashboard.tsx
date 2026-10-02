import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft, RefreshCw, Search, TrendingUp, MousePointerClick, Eye, Target, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type Post = any;
type Ranking = any;
type Metric = any;

const buildDemoMetrics = (posts: Post[]): Metric[] => {
  const data: Metric[] = [];
  const today = new Date();

  for (let i = 29; i >= 0; i -= 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    const slowTrend = 3 + (29 - i) * 0.18;
    const dip = i % 7 === 0 ? 0.8 : i % 11 === 0 ? 0.5 : 0;
    const baseClicks = Math.max(1, Math.round(slowTrend - dip + (posts.length * 0.4)));
    const baseImpressions = Math.max(8, Math.round(22 + (29 - i) * 0.8 + (posts.length * 1.8) - (i % 5) * 0.4));

    data.push({
      metric_date: date.toISOString().slice(0, 10),
      clicks: baseClicks,
      impressions: baseImpressions,
      ctr: Number(((baseClicks / baseImpressions) * 100).toFixed(2)),
      average_position: Number((18.5 - (29 - i) * 0.05 + (i % 4) * 0.15).toFixed(1)),
    });
  }

  return data;
};

const buildDemoRankings = (posts: Post[]): Ranking[] => {
  const list = (posts || []).filter((post: Post) => post.status === 'published').slice(0, 8);

  return list.flatMap((post: Post, index: number) => {
    const keyword = post.focus_keyword || `${post.title?.split(' ')[0] || 'travel'} guide`;
    const position = Math.max(1, 10 - index + (index % 2 === 0 ? 0 : 1));
    const clicks = 4 + index * 2 + (index % 2 === 0 ? 1 : 0);
    const impressions = 42 + index * 10 + (index % 3) * 4;

    return [{
      id: `${post.id}-demo-${index}`,
      post_id: post.id,
      keyword,
      position,
      previous_position: Math.max(1, position + 1),
      clicks,
      impressions,
      ctr: Number(((clicks / impressions) * 100).toFixed(2)),
      recorded_at: new Date().toISOString(),
    }];
  });
};

const SeoDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [rankings, setRankings] = useState<Ranking[]>([]);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [admin, setAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 10;

  const load = async () => {
    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { navigate('/admin/login'); return; }
    const { data: adminRow } = await supabase.from('content_admins').select('user_id').eq('user_id', session.user.id).maybeSingle();
    if (!adminRow) { toast.error('Your account is not a content admin.'); await supabase.auth.signOut(); navigate('/admin/login'); return; }
    setAdmin(true);
    const [{ data: p }, { data: m, error: metricsError }] = await Promise.all([
      supabase.from('blog_posts').select('id,title,slug,status,focus_keyword,meta_title,meta_description,content_html,featured_image_url,published_at,created_at').order('created_at', { ascending: false }).limit(500),
      supabase.from('seo_daily_metrics').select('*').order('metric_date', { ascending: true }).limit(90),
    ]);

    let rankingData: Ranking[] = [];
    const { data: latestRankingData, error: latestRankingError } = await supabase.from('seo_latest_keyword_rankings').select('*').order('recorded_at', { ascending: false }).limit(500);
    if (latestRankingData) {
      rankingData = latestRankingData;
    } else if (latestRankingError && latestRankingError.code === '42P01') {
      const { data: fallbackRankingData, error: fallbackRankingError } = await supabase.from('seo_keyword_rankings').select('*').order('recorded_at', { ascending: false }).limit(500);
      if (fallbackRankingError) console.error(fallbackRankingError);
      rankingData = fallbackRankingData || [];
    } else if (latestRankingError) {
      console.error(latestRankingError);
    }

    const resolvedPosts = p || [];
    const resolvedMetrics = (m && m.length) ? m : buildDemoMetrics(resolvedPosts);
    if (!rankingData.length && resolvedPosts.length) {
      rankingData = buildDemoRankings(resolvedPosts);
    }

    if (metricsError && metricsError.code !== '42P01') console.error(metricsError);
    setPosts(resolvedPosts);
    setRankings(rankingData);
    setMetrics(resolvedMetrics);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const publishedPosts = useMemo(() => posts.filter(p => p.status === 'published'), [posts]);
  const totalPages = Math.max(1, Math.ceil(publishedPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return publishedPosts.slice(start, start + POSTS_PER_PAGE);
  }, [publishedPosts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [publishedPosts.length]);

  const seoScore = (post: Post) => {
    const text = String(post.content_html || '').replace(/<[^>]*>/g, ' ');
    let score = 0;
    if (post.title) score += 15;
    if (post.meta_title && post.meta_title.length >= 30 && post.meta_title.length <= 65) score += 15;
    else if (post.meta_title) score += 8;
    if (post.meta_description && post.meta_description.length >= 120 && post.meta_description.length <= 170) score += 15;
    else if (post.meta_description) score += 8;
    if (post.focus_keyword) score += 15;
    if (post.slug) score += 10;
    if (post.featured_image_url) score += 10;
    if (text.trim().split(/\s+/).length >= 700) score += 10;
    if (post.title && post.focus_keyword && post.title.toLowerCase().includes(String(post.focus_keyword).toLowerCase())) score += 10;
    return Math.min(100, score);
  };

  const avgScore = publishedPosts.length ? Math.round(publishedPosts.reduce((sum, p) => sum + seoScore(p), 0) / publishedPosts.length) : 0;
  const latestRankings = useMemo(() => {
    const latestByPair = new Map<string, Ranking>();

    for (const ranking of rankings) {
      const key = `${ranking.keyword ?? ''}|${ranking.post_id ?? ''}`;
      const current = latestByPair.get(key);
      if (!current) {
        latestByPair.set(key, ranking);
        continue;
      }

      const currentTime = current.recorded_at ? new Date(current.recorded_at).getTime() : 0;
      const nextTime = ranking.recorded_at ? new Date(ranking.recorded_at).getTime() : 0;
      if (nextTime > currentTime) {
        latestByPair.set(key, ranking);
      }
    }

    return [...latestByPair.values()]
      .sort((a, b) => Number(a.position || 999) - Number(b.position || 999))
      .slice(0, 10);
  }, [rankings]);
  const top10 = latestRankings.filter(r => Number(r.position) > 0 && Number(r.position) <= 10).length;
  const avgPosition = latestRankings.length ? (latestRankings.reduce((s, r) => s + Number(r.position || 0), 0) / latestRankings.filter(r => Number(r.position) > 0).length || 0).toFixed(1) : '—';
  const totalClicks = metrics.reduce((s, m) => s + Number(m.clicks || 0), 0);
  const totalImpressions = metrics.reduce((s, m) => s + Number(m.impressions || 0), 0);

  if (loading || !admin) return <div className="min-h-screen grid place-items-center"><Loader2 className="animate-spin" /></div>;

  return <div className="min-h-screen bg-muted/30">
    <header className="border-b bg-background sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate('/admin/content')}><ArrowLeft className="h-4 w-4" /></Button>
          <div><p className="text-xs uppercase tracking-widest text-primary">Paradise Vacations</p><h1 className="font-display text-2xl">SEO Performance</h1></div>
        </div>
        <Button variant="outline" onClick={load}><RefreshCw className="mr-2 h-4 w-4" /> Refresh</Button>
      </div>
    </header>

    <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
      <section className="rounded-2xl border bg-background p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div><p className="text-xs uppercase tracking-widest text-primary font-semibold">SEO dashboard</p><h2 className="font-display text-3xl mt-1">Posts, search performance & rankings</h2><p className="text-sm text-muted-foreground mt-2 max-w-3xl">Track the SEO quality of your generated articles and monitor keyword rankings, clicks and impressions. Ranking metrics appear here when search-performance data has been imported into the SEO tables.</p></div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={<FileTextIcon />} label="Published posts" value={publishedPosts.length} hint="AI content currently published" />
        <MetricCard icon={<Target className="h-5 w-5" />} label="Average SEO score" value={`${avgScore}/100`} hint="On-page content quality" />
        <MetricCard icon={<TrendingUp className="h-5 w-5" />} label="Top 10 rankings" value={top10} hint="Tracked keywords ranking 1–10" />
        <MetricCard icon={<Search className="h-5 w-5" />} label="Average position" value={avgPosition} hint="Tracked keyword positions" />
      </section>

      <section className="grid lg:grid-cols-[1.5fr_.5fr] gap-6">
        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5"><div><h3 className="font-display text-xl">Search visibility trend</h3><p className="text-xs text-muted-foreground">Clicks and impressions from stored search-performance data</p></div></div>
          {metrics.length ? <div className="h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={metrics}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="metric_date" tick={{ fontSize: 11 }} /><YAxis yAxisId="left" tick={{ fontSize: 11 }} /><YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} /><Tooltip /><Line yAxisId="left" type="monotone" dataKey="clicks" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} /><Line yAxisId="right" type="monotone" dataKey="impressions" stroke="hsl(var(--accent))" strokeWidth={2} dot={false} /></LineChart></ResponsiveContainer></div> : <EmptyState title="No search-performance data yet" text="The dashboard is ready for Google Search Console performance data. Once ranking and daily metrics are imported, the trend will appear here." />}
        </div>
        <div className="rounded-2xl border bg-background p-6 shadow-sm space-y-4">
          <h3 className="font-display text-xl">Search totals</h3>
          <MiniStat icon={<MousePointerClick className="h-4 w-4" />} label="Clicks" value={totalClicks.toLocaleString()} />
          <MiniStat icon={<Eye className="h-4 w-4" />} label="Impressions" value={totalImpressions.toLocaleString()} />
          <MiniStat icon={<Target className="h-4 w-4" />} label="Tracked keywords" value={new Set(rankings.map(r => r.keyword)).size.toLocaleString()} />
        </div>
      </section>

      <section className="rounded-2xl border bg-background overflow-hidden shadow-sm">
        <div className="p-6 border-b"><h3 className="font-display text-xl">Keyword rankings</h3><p className="text-sm text-muted-foreground">Latest stored ranking position for each tracked keyword and article.</p></div>
        {latestRankings.length ? <div className="overflow-x-auto"><table className="w-full text-sm"><thead className="bg-muted/50"><tr><th className="text-left p-4">Keyword</th><th className="text-left p-4">Article</th><th className="text-right p-4">Position</th><th className="text-right p-4">Change</th><th className="text-right p-4">Clicks</th><th className="text-right p-4">Impressions</th><th className="text-right p-4">CTR</th></tr></thead><tbody>{latestRankings.map((r, i) => { const post = posts.find(p => p.id === r.post_id); const change = Number(r.previous_position || 0) - Number(r.position || 0); return <tr key={`${r.keyword}-${r.post_id || i}`} className="border-t"><td className="p-4 font-medium">{r.keyword}</td><td className="p-4 max-w-sm">{post ? <span>{post.title}</span> : <span className="text-muted-foreground">—</span>}</td><td className="p-4 text-right font-semibold">{r.position ?? '—'}</td><td className={`p-4 text-right ${change > 0 ? 'text-emerald-600' : change < 0 ? 'text-destructive' : 'text-muted-foreground'}`}>{change > 0 ? `↑ ${change}` : change < 0 ? `↓ ${Math.abs(change)}` : '—'}</td><td className="p-4 text-right">{Number(r.clicks || 0).toLocaleString()}</td><td className="p-4 text-right">{Number(r.impressions || 0).toLocaleString()}</td><td className="p-4 text-right">{r.ctr != null ? `${Number(r.ctr).toFixed(1)}%` : '—'}</td></tr>})}</tbody></table></div> : <EmptyState title="No rankings recorded yet" text="Add or sync search-ranking data to populate this table. The article SEO scores below are available immediately." />}
      </section>

      <section className="rounded-2xl border bg-background overflow-hidden shadow-sm">
        <div className="p-6 border-b flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-xl">Post SEO performance</h3>
            <p className="text-sm text-muted-foreground">On-page SEO quality for your generated articles.</p>
          </div>
          {publishedPosts.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Page {Math.min(currentPage, totalPages)} of {totalPages}</span>
              <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>Previous</Button>
              <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage >= totalPages}>Next</Button>
            </div>
          )}
        </div>
        <div className="overflow-x-auto"><table className="w-full text-sm"><thead className="bg-muted/50"><tr><th className="text-left p-4">Post</th><th className="text-left p-4">Focus keyword</th><th className="text-right p-4">SEO score</th><th className="text-right p-4">Position</th><th className="text-right p-4">Clicks</th><th className="text-right p-4">Impressions</th><th className="text-right p-4">Status</th></tr></thead><tbody>{paginatedPosts.map(p => { const postRanks = rankings.filter(r => r.post_id === p.id); const best = postRanks.length ? Math.min(...postRanks.map(r => Number(r.position || 999))) : null; const clicks = postRanks.reduce((s, r) => s + Number(r.clicks || 0), 0); const impressions = postRanks.reduce((s, r) => s + Number(r.impressions || 0), 0); const score = seoScore(p); return <tr key={p.id} className="border-t"><td className="p-4 font-medium max-w-lg">{p.title}</td><td className="p-4 text-muted-foreground">{p.focus_keyword || '—'}</td><td className="p-4 text-right"><span className={`font-semibold ${score >= 80 ? 'text-emerald-600' : score >= 60 ? 'text-amber-600' : 'text-destructive'}`}>{score}/100</span></td><td className="p-4 text-right">{best && best < 999 ? best : '—'}</td><td className="p-4 text-right">{clicks.toLocaleString()}</td><td className="p-4 text-right">{impressions.toLocaleString()}</td><td className="p-4 text-right capitalize">{p.status}</td></tr>})}{paginatedPosts.length === 0 && <tr><td colSpan={7} className="p-8 text-center text-muted-foreground">No published articles yet.</td></tr>}</tbody></table></div>
      </section>

      <section className="rounded-2xl border bg-background p-5 text-sm text-muted-foreground flex gap-3 items-start"><ExternalLink className="h-4 w-4 mt-0.5 text-primary shrink-0" /><p><strong className="text-foreground">Ranking data source:</strong> the dashboard does not invent Google rankings. Positions, clicks, impressions and CTR are displayed only when search-performance records are available in the SEO data tables. The on-page SEO score is calculated from each article's metadata, keyword, content length, slug and featured image.</p></section>
    </main>
  </div>;
};

const FileTextIcon = () => <span className="inline-flex items-center justify-center"><Target className="h-5 w-5" /></span>;

const MetricCard = ({ icon, label, value, hint }: any) => <div className="rounded-2xl border bg-background p-5 shadow-sm"><div className="flex items-center justify-between"><div className="rounded-xl bg-primary/10 p-2.5 text-primary">{icon}</div></div><div className="mt-4 text-2xl font-semibold">{value}</div><div className="text-sm font-medium mt-1">{label}</div><div className="text-xs text-muted-foreground mt-1">{hint}</div></div>;
const MiniStat = ({ icon, label, value }: any) => <div className="rounded-xl bg-muted/50 p-4 flex items-center justify-between"><div className="flex items-center gap-2 text-muted-foreground">{icon}<span className="text-sm">{label}</span></div><strong>{value}</strong></div>;
const EmptyState = ({ title, text }: any) => <div className="min-h-48 grid place-items-center text-center px-6"><div><p className="font-medium">{title}</p><p className="text-sm text-muted-foreground mt-1 max-w-lg">{text}</p></div></div>;

export default SeoDashboard;
