import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Link from "next/link"
import BreadHero from '../../../component/BreadHero';
import Header from '../../../component/es/Navbar';
import Footer from '../../../component/es/Footer';
import Head from 'next/head'
import NotFound from '../NotFound';
import { useRouter } from 'next/router'
import { siteid } from '../../../utils/static';



export default function Airline(props) {
  const router = useRouter()


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  if (router.isFallback) {
    return <>
      <Header />
      <div className='text-center about-uspage full-w pyblock-200'>
        <div className="spinner-border text-secondary" role="status">
        </div>
      </div>
      <Footer />
    </>
  }


  return (
    <>
      <Header />
      {props.flight.length > 0 ?
        <>
          <Head>
            <title>{props.flight[0].metaTitle}</title>
            <meta name="description" content={props.flight[0].metaDesc} />
            <meta name="keywords" content={props.flight[0].metaKeyword} />
            <link rel="canonical" href={`https://www.flyinate.com${router.asPath}`} />
            <link rel="alternate" href={`https://www.flyinate.com${router.asPath}`} />
          </Head>

          <div className='blogadda'>
            <BreadHero title={props.flight[0].metaTitle} linkhtml={<><ul className='breadcrumb text-white'>
              <li className="breadcrumb-item" > <Link href="/es/">Casa</Link> </li>
              <li className='breadcrumb-item active' aria-current="page"> <Link href="/es/vuelos"> vuelos </Link></li> <li className='breadcrumb-item active' aria-current="page">{props.flight[0].metaTitle}</li> </ul></>} />

            <div className='popular-destination blogaddalist details full-w'>
              <Container>
                {props.flight.map((items, i) => (
                  <div className='blogaddalist-round' key={i}>
                    <div className='blogaddalist-inner'>

                      <div className="blog-inner-box2">
                        <p dangerouslySetInnerHTML={{ __html: items.contentData }} />
                      </div>

                    </div>
                  </div>
                ))}
              </Container>
            </div>
          </div>

        </>
        :
        <NotFound />
      }

      <Footer />
    </>
  )
}


export async function getStaticProps(context) {

  const { params } = context;
  var cityname = params.vuelosDetail.split("-")[2]
  let actualURLParts = params.vuelosDetail.split("-")

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "contentId": "",
    "pageType": "AirlineE",
    "pageValue": cityname,
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
    "siteId": siteid,
    "status": "",
    "count": "",
    "url": actualURLParts[0] + '-' + actualURLParts[1],
    "modifyBy": "",
    "modifyDate": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("http://cms.travomint.com/travoles-content/showcontent?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { flight: json.response },
    revalidate: 60,
  }
}




// This function gets called at build time
export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
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
    "siteId": siteid,
    "status": "",
    "count": "",
    "url": "",
    "modifyBy": "",
    "modifyDate": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", requestOptions)
  const jsondata = await res.json()
  const data = jsondata.response

  // dynemic paths 
  let paths = [];
  data.forEach((post) => {
    paths.push({
      params: { vuelosDetail: post.url + "-" + post.pageValue }
    })
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: true
  }

}