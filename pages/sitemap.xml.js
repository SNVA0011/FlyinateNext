import { getServerSideSitemap } from "next-sitemap";


const getJsonbyPost = async (url, options) => {
  let dynrequest = await fetch(url,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: options,
    redirect: 'follow'
  });

dynrequest = await dynrequest.json();
let data = dynrequest.response
return data
}
 

export const getServerSideProps = async (ctx) => {

  let baseUrl = 'https://www.flyinate.com'
  
  //========== Data Fetching - English (en) ========== 
  let posts = await getJsonbyPost("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876",JSON.stringify({
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

  // flightsposts
  let flightsposts = await getJsonbyPost("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876",JSON.stringify({
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

  //========== English (en) ==========
  const staticUrl = [
    {'url':'','time':'2022-08-30T04:40:48','priority':'1.00'},
    {'url':"about-us",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"flights",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"contact",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"privacy",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"terms",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"cheap-flights/machu-picchu-flyinate",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"cheap-flights/galapagos-islands-flyinate",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"cheap-flights/cusco-flyinate",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"cheap-flights/easter-island-flyinate",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"cheap-flights/buenos-aires-flyinat",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"cheap-flights/lima-flyinate",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"customize/business-travel",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"customize/group-travel",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':'blog','time': new Date().toISOString().slice(0, -5),'priority':'0.85'}
  ]
  // staticUrl
  const staticSitemaps = staticUrl.map((item) => ({
    loc: `${baseUrl}/${item.url.replace('&', '&amp;')}`,
    lastmod: new Date(item.time).toISOString().slice(0, -5),
    changefreq: 'daily',
    priority : item.priority
  }));
  // blog
  const blogSitemaps = posts && posts.map((item) => ({
    loc: `${baseUrl}/blog/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().slice(0, -5),
    changefreq: 'daily',
    priority : '0.85'
  }));

  // flights
  const flightsSitemaps = flightsposts && flightsposts.filter((items) => items.pageType === "Airline").map((items) => ({
    loc: `${baseUrl}/flights/${items.url.replace('&', '&amp;')}-${items.pageValue.replace('&', '&amp;')}`,
    lastmod: '2022-08-30T04:40:48',
    changefreq: 'daily',
    priority : '0.69'
  }));


  //========== Data Fetching - Spanish (es) ========== 
  let esposts = await getJsonbyPost("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876",JSON.stringify({
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
 let esFlightsposts = await getJsonbyPost("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876",JSON.stringify({
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

  //========== Spanish (es) ==========
  const esStaticUrl = [
    {'url':'','time':'2022-08-30T04:40:48','priority':'0.85'},
    {'url':"sobre-nosotras",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"vuelos",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"articulos",'time':new Date().toISOString().slice(0, -5),'priority':'0.69'},
    {'url':"contacto",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"politica",'time':'2022-08-30T04:40:48','priority':'0.69'},
    {'url':"terminos",'time':'2022-08-30T04:40:48','priority':'0.69'}
  ]
  // esStaticUrl
  const esStaticSitemaps = esStaticUrl.map((item) => ({
    loc: `${baseUrl}/es/${item.url.replace('&', '&amp;')}`,
    lastmod: new Date(item.time).toISOString().slice(0, -5),
    changefreq: 'daily',
    priority : item.priority
  }));
  // blog
  const esBlogSitemaps = esposts && esposts.map((item) => ({
    loc: `${baseUrl}/es/articulos/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().slice(0, -5),
    changefreq: 'daily',
    priority : '0.56'
  }));
  // flights
  const esFlightsSitemaps = esFlightsposts && esFlightsposts.filter((item) => item.pageType === "AirlineE").map((item) => ({
    loc: `${baseUrl}/es/vuelos/${item.url.replace('&', '&amp;')}-${item.pageValue.replace('&', '&amp;')}`,
    lastmod: '2022-08-30T04:40:48',
    changefreq: 'daily',
    priority : '0.69'
  }));


  //========== Mix (en + es) ==========
  const fields = [
    ...staticSitemaps, ...blogSitemaps, ...flightsSitemaps,
    ...esStaticSitemaps, ...esBlogSitemaps, ...esFlightsSitemaps
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() { }