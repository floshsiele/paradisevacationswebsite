import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [loading, setLoading] = useState(false);
  useEffect(() => { supabase.auth.getSession().then(({ data }) => { if (data.session) navigate('/admin/content'); }); }, [navigate]);
  const submit = async (e: FormEvent) => { e.preventDefault(); setLoading(true); const { error } = await supabase.auth.signInWithPassword({ email, password }); setLoading(false); if (error) toast.error(error.message); else navigate('/admin/content'); };
  return <div className="min-h-screen grid place-items-center bg-muted/30 px-6"><form onSubmit={submit} className="w-full max-w-md rounded-2xl border bg-background p-8 shadow-lg space-y-5"><div><p className="text-xs uppercase tracking-widest text-primary">Paradise Vacations</p><h1 className="font-display text-3xl mt-2">Content Manager</h1><p className="text-sm text-muted-foreground mt-2">Sign in to manage AI-generated SEO content.</p></div><div><Label>Email</Label><Input type="email" required value={email} onChange={e => setEmail(e.target.value)} /></div><div><Label>Password</Label><Input type="password" required value={password} onChange={e => setPassword(e.target.value)} /></div><Button className="w-full" disabled={loading}>{loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Sign in</Button></form></div>;
};
export default AdminLogin;
