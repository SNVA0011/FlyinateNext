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

export const getServerSideProps = async (ctx) => {

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
    "siteId": siteid,
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
 


  //===== Eng mapping =====// 
  // blog
  const blogSitemaps = posts && posts?.filter((item) => item.status === "Active").map((item) => ({
    loc: `${baseUrl}/blog/${item.titleUrl.replace('&', '&amp;')}`,
    lastmod: new Date(item.posttime).toISOString().split('T')[0] + 'T06:47:34+00:00',
    changefreq: 'daily'
  }));

 
  //========== Mix (en + es) ==========//
  const fields = [
    ...blogSitemaps
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {
  //console
}