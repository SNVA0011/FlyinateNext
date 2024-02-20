import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { cms_trav_api, cms_trav_authcode, paginateSize, siteid ,baseUrl} from "../utils/static";

export const getJsonbyPaginate = async (url, options) => {
  const dynrequest = await fetch(url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: options,
      redirect: 'follow'
    });

  const getreqjson = await dynrequest.json();
  const data = getreqjson.totalPages
  return data
};

export const getServerSideProps = async (ctx) => {
  
  //========== Paginate Number ========== 
  const PagenateEn = await getJsonbyPaginate(`${cms_trav_api}/travoles-content/pagination?authcode=${cms_trav_authcode}&page=0&pageSize=${paginateSize}`, JSON.stringify({
    siteId: siteid,
  }))
  const PagenateEs = await getJsonbyPaginate(`${cms_trav_api}/news-article/pagination?authcode=${cms_trav_authcode}&page=1&pageSize=${paginateSize}`, JSON.stringify({
    siteId: siteid,
    "pageType": "Articulo"
  }))
  const PagenateIt = await getJsonbyPaginate(`${cms_trav_api}/news-article/pagination?authcode=${cms_trav_authcode}&page=1&pageSize=${paginateSize}`, JSON.stringify({
    siteId: siteid,
    "pageType": "ArticleIT"
  }))

  // Pagination
  const PagiMapEn = Array(PagenateEn).fill(0).map((item, index) => ({
    loc: `${baseUrl}/blog/page/${index + 1}`,
    lastmod: new Date().toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));
  const PagiMapEs = Array(PagenateEs).fill(0).map((item, index) => ({
    loc: `${baseUrl}/es/articulos/page/${index + 1}`,
    lastmod: new Date().toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));
  const PagiMapIt = Array(PagenateIt).fill(0).map((item, index) => ({
    loc: `${baseUrl}/it/articolo/page/${index + 1}`,
    lastmod: new Date().toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));


  //========== Mix (en + es) ==========//
  const fields = [
    ...PagiMapEn, ...PagiMapEs, ...PagiMapIt
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {
  //console
}