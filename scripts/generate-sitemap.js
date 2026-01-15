import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://lawsofagile.com';
const CONTENT_DIR = path.join(__dirname, '..', 'content', 'laws');
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'sitemap.xml');

function getLawIds() {
  const files = fs.readdirSync(CONTENT_DIR);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

function generateSitemap() {
  const lawIds = getLawIds();
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/info', changefreq: 'monthly', priority: '0.8' },
  ];

  const lawPages = lawIds.map(id => ({
    loc: `/laws/${id}`,
    changefreq: 'monthly',
    priority: '0.9',
  }));

  const allPages = [...staticPages, ...lawPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(OUTPUT_FILE, xml, 'utf-8');
  console.log(`Sitemap generated with ${allPages.length} URLs: ${OUTPUT_FILE}`);
}

generateSitemap();
