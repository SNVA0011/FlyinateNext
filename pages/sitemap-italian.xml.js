import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { baseUrl, siteid } from "../utils/static";

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
    "siteId": siteid,
    "pageType": "ArticleIT",
    "extraTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  }))

 
  //===== It mapping =====// 
  const itBlogSitemaps = itposts && itposts?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/it/articolo/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));
 
  //========== Mix (en + es) ==========//
  const fields = [
     ...itBlogSitemaps
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {
  //console
}