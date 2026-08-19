import { componentCatalog } from '@spark/content/components';
import type { MetadataRoute } from 'next';

const siteUrl = 'https://spark.surge.studio';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/docs', '/components'];
  const componentRoutes = componentCatalog.map(
    (component) => `/components/${component.slug}`
  );

  return [...staticRoutes, ...componentRoutes].map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
