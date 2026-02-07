import { MetadataRoute } from 'next';
import queriesData from '@/lib/data/all-200-seo-queries.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://103med.taxi';
  const now = new Date();
  
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/calculator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
  
  // Генеруємо URLs для всіх 200 запитів
  const queryPages: MetadataRoute.Sitemap = [];
  
  queriesData.queries.forEach((query) => {
    // Українська версія
    queryPages.push({
      url: `${baseUrl}/queries/${query.slugUk}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
    
    // Російська версія
    queryPages.push({
      url: `${baseUrl}/ru/queries/${query.slugRu}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });
  
  return [...staticPages, ...queryPages];
}
