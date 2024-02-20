import { baseUrl } from "../utils/static";

export const staticUrl = [
    { 'url': '/sitemap-static.xml', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': '/sitemap-blog.xml', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': '/sitemap-flight.xml', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': '/sitemap-airport.xml', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': '/sitemap-english.xml', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': '/sitemap-spanish.xml', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': '/sitemap-italian.xml', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
  ]

function generateSiteMap(staticUrl) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrl.map((item) => {
        return `<sitemap>
        <loc>${`${baseUrl}${item.url}`}</loc>
        <lastmod>${item.time}</lastmod>
    </sitemap>`}).join('')}
    </sitemapindex>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(staticUrl);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;







