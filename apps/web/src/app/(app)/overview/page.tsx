'use client';
import Link from 'next/link';
import { useOutlet } from '@/components/Shell';
import { Head, Kpi, Pill, Table } from '@/components/ui';
import { inr, menu, orders, outlets, stock, when } from '@/lib/data';
export default function Overview() {
  const o = useOutlet();
  const os = orders.filter((x) => o === 'all' || x.outletId === o);
  const sales = os.filter((x) => x.status === 'Completed').reduce((a, x) => a + x.total, 0);
  const low = stock.filter((s) => (o === 'all' || s.outletId === o) && s.onHand <= s.reorder);
  const qty = (id: string) => os.reduce((s, x) => s + x.items.filter((i) => i.id === id).reduce((a, i) => a + i.qty, 0), 0);
  const max = Math.max(1, ...menu.map((m) => qty(m.id)));
  return (<>
    <Head title="Good afternoon 👋" sub="Here is what is happening across your restaurant business." actions={<Link href="/pos"><button className="btn primary">＋ New order</button></Link>} />
    <div className="grid kpis">
      <Kpi label="Recorded sales" value={inr(sales)} note="Completed demo orders" icon="₹" />
      <Kpi label="Orders" value={os.length} note={`${os.filter((x) => x.status === 'New').length} new`} icon="☷" />
      <Kpi label="Average order value" value={os.length ? inr(Math.round(sales / os.length)) : 'No data'} note="Calculated from visible orders" icon="↗" />
      <Kpi label="Stock alerts" value={low.length} note={low.length ? 'Review reorder levels' : 'No low-stock alerts'} icon="▥" />
    </div>
    <div className="grid two">
      <div className="card"><div className="card-head"><h2>Top items</h2><span className="pill blue">Demo data</span></div>
        <div className="bar-list">{menu.map((m) => <div className="bar-row" key={m.id}><span>{m.name}</span><div className="bar-track"><div className="bar-fill" style={{ width: `${(qty(m.id) / max) * 100}%` }} /></div><strong className="right">{qty(m.id)}</strong></div>)}</div></div>
      <div className="card"><div className="card-head"><h2>Needs attention</h2></div>
        {low.length ? low.map((s) => <div className="insight" key={s.id}><div className="insight-icon">⚠</div><div><strong>{s.name} is low</strong><p>{s.onHand} {s.unit} left; reorder level {s.reorder} {s.unit}.</p></div></div>) : <div className="empty"><strong>Nothing urgent</strong></div>}</div>
    </div>
    <div className="card" style={{ marginTop: 16 }}><div className="card-head"><h2>Recent orders</h2><Link href="/orders"><button className="btn sm">View all →</button></Link></div>
      <Table heads={['Order', 'Outlet', 'Items', 'Total', 'Status', 'Payment']}>{os.map((x) => <tr key={x.id}><td><strong>{x.id}</strong><div className="item-sub">{when(x.createdAt)}</div></td><td>{outlets.find((p) => p.id === x.outletId)?.name}</td><td>{x.items.length} items</td><td>{inr(x.total)}</td><td><Pill s={x.status} /></td><td><Pill s={x.payment} /></td></tr>)}</Table></div>
  </>);
}
