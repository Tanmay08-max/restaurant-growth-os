import { Head } from '@/components/ui';
export default async function Soon({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <><Head title={slug} sub="This screen is built in the next batch." /><div className="card"><div className="empty"><strong>Coming next</strong>Not built yet.</div></div></>;
}
