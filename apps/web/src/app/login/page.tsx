'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function Login() {
  const r = useRouter();
  const [err, setErr] = useState('');
  return (
    <div className="auth-screen">
      <div className="auth-art"><div className="brand"><div className="brand-mark">R</div><div><div className="brand-name">Restaurant Growth OS</div><div className="brand-sub">Business clarity. Better decisions.</div></div></div>
        <div><span className="pill blue">OWNER-FIRST RESTAURANT PLATFORM</span><h1>Run your restaurant.<br /><span style={{ color: 'var(--primary)' }}>Grow with clarity.</span></h1><p>Bring orders, outlets, inventory and business performance into one calm workspace.</p></div>
        <div className="small muted">Restaurant Growth OS · Interactive product demo</div></div>
      <div className="auth-main"><div className="auth-box">
        <h2>Welcome back</h2><p>Sign in to continue to your restaurant workspace.</p>
        <form onSubmit={(e) => { e.preventDefault(); const f = new FormData(e.currentTarget); /* DEMO ONLY: replace with real auth */ if (String(f.get('password')).length >= 8) r.push('/overview'); else setErr('Invalid email or password.'); }}>
          <div className="field"><label>Email address</label><input name="email" type="email" required defaultValue="owner@demo.com" /></div>
          <div className="field"><label>Password</label><input name="password" type="password" required defaultValue="Demo123!" /></div>
          {err && <div className="notice warn">{err}</div>}
          <button className="btn primary block">Sign in</button>
        </form>
        <div className="notice" style={{ marginTop: 16 }}>Demo login only: any email and 8+ character password.</div>
      </div></div>
    </div>
  );
}
