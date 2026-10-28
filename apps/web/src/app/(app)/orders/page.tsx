'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useOutlet } from '@/components/Shell';
import { Head, Pill, Table } from '@/components/ui';
import { inr, orders, outlets, when } from '@/lib/data';
export default function Orders() {
  const o = useOutlet();
  const [q, setQ] = useState('');
  const [f, setF] = useState('All');
  const rows = orders.filter((x) => (o === 'all' || x.outletId === o) && (f === 'All' || x.status === f) && `${x.id} ${x.channel} ${x.status}`.toLowerCase().includes(q.toLowerCase()));
  return (<>
    <Head title="Orders" sub="Review order lifecycle, payment status and order details." actions={<Link href="/pos"><button className="btn primary">＋ Create order</button></Link>} />
    <div className="card"><div className="filters">
      <input className="search" placeholder="Search order, channel or status..." value={q} onChange={(e) => setQ(e.target.value)} />
      <select className="select" value={f} onChange={(e) => setF(e.target.value)}>{['All', 'New', 'Preparing', 'Ready', 'Completed', 'Cancelled'].map((s) => <option key={s}>{s}</option>)}</select>
      <span className="pill">{rows.length} orders</span></div>
      {rows.length ? <Table heads={['Order', 'Outlet', 'Channel', 'Total', 'Status', 'Payment']}>{rows.map((x) => <tr key={x.id}><td><strong>{x.id}</strong><div className="item-sub">{when(x.createdAt)}</div></td><td>{outlets.find((p) => p.id === x.outletId)?.name}</td><td>{x.channel}</td><td>{inr(x.total)}</td><td><Pill s={x.status} /></td><td><Pill s={x.payment} /></td></tr>)}</Table> : <div className="empty">No matching orders.</div>}
    </div></>);
}
