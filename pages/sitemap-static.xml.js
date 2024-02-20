import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { baseUrl, siteid } from "../utils/static";

export const getServerSideProps = async (ctx) => {

  //============== Static ==============//
  const staticUrl = [
    { 'url': '', 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': 'it', 'time': '2023-04-24T06:47:34+00:00' },
    { 'url': 'it/articolo', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': "about-us", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "flights", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "contact", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "privacy", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "terms", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "cheap-flights/machu-picchu-flyinate", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "cheap-flights/galapagos-islands-flyinate", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "cheap-flights/cusco-flyinate", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "cheap-flights/easter-island-flyinate", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "cheap-flights/buenos-aires-flyinat", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "cheap-flights/lima-flyinate", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "customize/business-travel", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "customize/group-travel", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': 'blog', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': 'airports', 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
  ]
  const esStaticUrl = [
    { 'url': '', 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "sobre-nosotras", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "vuelos", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "articulos", 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' },
    { 'url': "contacto", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "politica", 'time': '2022-11-30T06:47:34+00:00' },
    { 'url': "terminos", 'time': '2022-11-30T06:47:34+00:00' }
  ]

  const itStaticUrl = [
    { 'url': '', 'time': '2022-11-30T06:47:34+00:00' }, 
    { 'url': "articolo", 'time': new Date().toISOString().split('T')[0] + 'T06:47:34+00:00' }, 
  ]
  //============== End Static ==============//

  //===== Eng mapping =====//
  // staticUrl
  const staticSitemaps = staticUrl?.map((item) => ({
    loc: `${baseUrl}/${item.url.replace('&', '&amp;')}`,
    lastmod: item.time,
    changefreq: 'daily'
  }));

  //===== Es mapping =====// 
  const esStaticSitemaps = esStaticUrl?.map((item) => ({
    loc: `${baseUrl}/es/${item.url.replace('&', '&amp;')}`,
    lastmod: item.time,
    changefreq: 'daily'
  })); 
  //========== Mix (en + es) ==========//
  const fields = [
   ...staticSitemaps, ...esStaticSitemaps 
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {
  //console
}