import { redirect } from 'next/navigation';

interface ComponentRedirectPageProps {
  readonly params: Promise<{
    slug: string;
  }>;
}

export default async function ComponentRedirectPage({
  params,
}: ComponentRedirectPageProps) {
  const { slug } = await params;

  redirect(`/components/${slug}`);
}
