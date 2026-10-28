import type { ReactNode } from 'react';
const TONE: Record<string, string> = { Active: 'green', Paid: 'green', Completed: 'green', Ready: 'green', Preparing: 'blue', New: 'amber', Pending: 'amber', Cancelled: 'red', Unavailable: 'red' };
export const Pill = ({ s }: { s: string }) => <span className={`pill ${TONE[s] ?? 'blue'}`}>{s}</span>;
export const Head = ({ title, sub, actions }: { title: string; sub: string; actions?: ReactNode }) => (
  <div className="page-head"><div><h1>{title}</h1><p>{sub}</p></div><div className="actions">{actions}</div></div>
);
export const Kpi = ({ label, value, note, icon }: { label: string; value: ReactNode; note: string; icon: string }) => (
  <div className="card"><div className="kpi-icon">{icon}</div><div className="kpi-label">{label}</div><div className="kpi-value">{value}</div><div className="trend">{note}</div></div>
);
export const Table = ({ heads, children }: { heads: string[]; children: ReactNode }) => (
  <div className="table-wrap"><table><thead><tr>{heads.map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{children}</tbody></table></div>
);
