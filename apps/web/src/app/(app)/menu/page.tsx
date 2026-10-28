'use client';
import { useState } from 'react';
import { Head, Pill, Table } from '@/components/ui';
import { inr, menu } from '@/lib/data';
export default function Menu() {
  const [items, setItems] = useState(menu);
  const toggle = (id: string) => setItems(items.map((m) => (m.id === id ? { ...m, available: !m.available } : m)));
  return (<>
    <Head title="Menu & Pricing" sub="Manage menu items, prices and availability." />
    <div className="card"><Table heads={['Item', 'Category', 'Price', 'Availability', 'Actions']}>{items.map((m) => <tr key={m.id}><td><strong>{m.emoji} {m.name}</strong><div className="item-sub">{m.id}</div></td><td>{m.category}</td><td><strong>{inr(m.price)}</strong></td><td><Pill s={m.available ? 'Active' : 'Unavailable'} /></td><td><button className="btn sm" onClick={() => toggle(m.id)}>{m.available ? 'Disable' : 'Enable'}</button></td></tr>)}</Table></div>
  </>);
}
