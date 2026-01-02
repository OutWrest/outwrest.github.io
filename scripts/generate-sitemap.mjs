
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import slugify from '@sindresorhus/slugify';

const SITE_CONFIG_PATH = path.join(process.cwd(), 'data/siteConfig.ts');
const POSTS_DIR = path.join(process.cwd(), 'posts');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

function getSiteUrl() {
  const content = fs.readFileSync(SITE_CONFIG_PATH, 'utf8');
  const match = content.match(/siteUrl:\s*["']([^"']+)["']/);
  if (!match) {
    throw new Error('Could not find siteUrl in siteConfig.ts');
  }
  return match[1];
}

function getPosts() {
  const files = fs.readdirSync(POSTS_DIR);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
      const { data } = matter(content);
      return {
        slug: file.replace('.mdx', ''),
        date: data.date,
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function generateSitemap() {
  const siteUrl = getSiteUrl();
  const posts = getPosts();
  
  const tags = new Set();
  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tags.add(slugify(tag)));
    }
  });

  const pages = [
    { url: siteUrl, changefreq: 'daily', priority: '1.0' },
    { url: `${siteUrl}/about`, changefreq: 'monthly', priority: '0.8' },
    { url: `${siteUrl}/posts`, changefreq: 'daily', priority: '0.9' },
    ...posts.map((post) => ({
      url: `${siteUrl}/posts/${post.slug}`,
      lastmod: new Date(post.date).toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.7',
    })),
    ...Array.from(tags).map((tag) => ({
      url: `${siteUrl}/posts/tagged/${tag}`,
      changefreq: 'weekly',
      priority: '0.6',
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
  <url>
    <loc>${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  console.log(`Generated sitemap.xml with ${pages.length} URLs`);
}

generateSitemap();
