import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.ozon-gradus.ru/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.ozon-gradus.ru/sections',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.ozon-gradus.ru/payment',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.ozon-gradus.ru/routes-car',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.ozon-gradus.ru/sections/page-1',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
{
      url: 'https://www.ozon-gradus.ru/sections/page-2',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
{
      url: 'https://www.ozon-gradus.ru/sections/page-3',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
{
      url: 'https://www.ozon-gradus.ru/sections/page-4',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
{
      url: 'https://www.ozon-gradus.ru/sections/page-5',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.ozon-gradus.ru/agreements',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.ozon-gradus.ru/agreements/privacy',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}