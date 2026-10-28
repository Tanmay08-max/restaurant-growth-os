'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useState, type ReactNode } from 'react';
import { outlets } from '@/lib/data';
const Ctx = createContext('all');
export const useOutlet = () => useContext(Ctx);
const NAV: string[][] = [['overview', '▦', 'Overview', 'OVERVIEW'], ['pos', '＋', 'POS & Checkout', 'OPERATIONS'], ['orders', '☷', 'Orders'], ['menu', '▤', 'Menu & Pricing'], ['inventory', '▥', 'Inventory'], ['expenses', '₹', 'Expenses'], ['reports', '▥', 'Sales Reports'], ['growth', '✦', 'Growth insights'], ['outlets', '▦', 'Outlets', 'MANAGEMENT'], ['team', '☺', 'Team & roles'], ['subscription', '₹', 'Subscription'], ['settings', '⚙', 'Settings']];
export function Shell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [outlet, setOutlet] = useState('all');
  const cur = NAV.find((n) => path === '/' + n[0]);
  return (
    <Ctx.Provider value={outlet}>
      <div className="app">
        <aside className="sidebar">
          <div className="brand"><div className="brand-mark">R</div><div><div className="brand-name">Restaurant Growth OS</div><div className="brand-sub">Owner workspace</div></div></div>
          <nav className="nav">
            {NAV.map(([id, ico, label, group]) => (
              <div key={id}>
                {group && <div className="nav-label">{group}</div>}
                <Link href={'/' + id}><button className={path === '/' + id ? 'active' : ''} style={{ width: '100%' }}><span className="ico">{ico}</span>{label}</button></Link>
              </div>
            ))}
          </nav>
          <div className="sidebar-bottom"><div className="workspace-card"><strong>The Urban Fork (demo)</strong><span>Growth plan · 3 outlets</span></div></div>
        </aside>
        <main className="main">
          <header className="topbar">
            <div style={{ fontWeight: 800 }}>{cur?.[2] ?? 'Restaurant Growth OS'}</div>
            <div className="top-actions">
              <select className="select outlet-select" value={outlet} onChange={(e) => setOutlet(e.target.value)}>
                <option value="all">All outlets</option>{outlets.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
              </select>
              <div className="avatar">D</div>
            </div>
          </header>
          <div className="content">{children}</div>
        </main>
      </div>
    </Ctx.Provider>
  );
}
