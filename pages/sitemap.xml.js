import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getJsonbyPost = async (url, options) => {
  const dynrequest = await fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: options,
      redirect: 'follow'
    });

  const getreqjson = await dynrequest.json();
  const data = getreqjson.response
  return data
};

export const getServerSideProps = async (ctx) => {
  const baseUrl = 'https://www.flyinate.com'

  //========== Data Fetching - English (en) ========== 
  const posts = await getJsonbyPost("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": "",
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "",
    "heading": "",
    "img_url": "",
    "siteId": "139",
    "categoryName": "",
    "blogdes2": "",
    "blogTagsName2": "",
    "extarTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  }))

  const airports = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", JSON.stringify({
    "siteId":"139",
    "pageType":"airport"
}))

  // flightsposts
  const flightsposts = await getJsonbyPost("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", JSON.stringify({
    "contentId": "",
    "pageType": "",
    "pageValue": "",
    "pageName": "",
    "metaTitle": "",
    "metaKeyword": "",
    "metaDesc": "",
    "otherMeta": "",
    "dealCode": "",
    "dealTitle": "",
    "contentTitle": "",
    "contentData": "",
    "contentImage": "",
    "siteId": "139",
    "status": "",
    "count": "",
    "url": "",
    "modifyBy": "",
    "modifyDate": ""
  })) 


  //============ Dynamic - Spanish (es) ============// 
  const esposts = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": "",
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "",
    "heading": "",
    "categoryName": "",
    "siteId": "139",
    "pageType": "Articulo",
    "extraTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  }))


  // esFlightsposts 
  const esFlightsposts = await getJsonbyPost("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", JSON.stringify({
    "contentId": "",
    "pageType": "",
    "pageValue": "",
    "pageName": "",
    "metaTitle": "",
    "metaKeyword": "",
    "metaDesc": "",
    "otherMeta": "",
    "dealCode": "",
    "dealTitle": "",
    "contentTitle": "",
    "contentData": "",
    "contentImage": "",
    "siteId": "139",
    "status": "",
    "count": "",
    "url": "",
    "modifyBy": "",
    "modifyDate": ""
  }))

  //========== Italian ========== 
  const itposts = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": "",
    "content": "",
    "description": "",
    "keywords": "",
    "posttime": "",
    "status": "",
    "heading": "",
    "categoryName": "",
    "siteId": "139",
    "pageType": "ArticleIT",
    "extraTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  }))


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
  //============== End Static ==============//

  //===== Eng mapping =====//
  // staticUrl
  const staticSitemaps = staticUrl?.map((item) => ({
    loc: `${baseUrl}/${item.url.replace('&', '&amp;')}`,
    lastmod: item.time,
    changefreq: 'daily'
  }));
  // blog
  const blogSitemaps = posts && posts?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/blog/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));

  const airportsSitemaps = airports && airports?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/airports/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));

  

  // flights
  const flightsSitemaps = flightsposts && flightsposts?.filter((items) => items.status === "Active").filter((items) => items.pageType === "Airline").map((items) => ({
    loc: `${baseUrl}/flights/${items.url.replace('&', '&amp;')}-${items.pageValue.replace('&', '&amp;')}`,
    lastmod: '2022-11-30T06:47:34+00:00',
    changefreq: 'daily'
  }));

  //===== Es mapping =====// 
  const esStaticSitemaps = esStaticUrl?.map((item) => ({
    loc: `${baseUrl}/es/${item.url.replace('&', '&amp;')}`,
    lastmod: item.time,
    changefreq: 'daily'
  }));
  // blog
  const esBlogSitemaps = esposts && esposts?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/es/articulos/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));
  // flights
  const esFlightsSitemaps = esFlightsposts && esFlightsposts?.filter((item) => item.status === "Active").filter((item) => item.pageType === "AirlineE").map((item) => ({
    loc: `${baseUrl}/es/vuelos/${item.url.replace('&', '&amp;')}-${item.pageValue.replace('&', '&amp;')}`,
    lastmod: '2022-11-30T06:47:34+00:00',
    changefreq: 'daily'
  }));

  //===== It mapping =====// 
  const itBlogSitemaps = itposts && itposts?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/it/articolo/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));


  //========== Mix (en + es) ==========//
  const fields = [
   ...staticSitemaps, ...blogSitemaps, ...flightsSitemaps, ...airportsSitemaps, 
    ...esStaticSitemaps, ...esBlogSitemaps, ...esFlightsSitemaps,
    ...itBlogSitemaps
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {
  //console
}