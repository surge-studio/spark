import { redirect } from 'next/navigation';

interface LegacyComponentPageProps {
  readonly params: Promise<{
    slug: string;
  }>;
}

export default async function LegacyComponentPage({
  params,
}: LegacyComponentPageProps) {
  const { slug } = await params;

  redirect(`/components/${slug}`);
}
