import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Link from "next/link"
import { useRouter } from 'next/router';
import BreadHero from '../../../component/BreadHero';
import Header from '../../../component/es/Navbar';
import Footer from '../../../component/es/Footer';
import Head from 'next/head'

export default function Airline(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <>
      <Head>
        <html lang="es" />
        <title>{props.flight[0].metaTitle}</title>
        <meta name="description" content={props.flight[0].metaDesc} />
        <meta name="keywords" content={props.flight[0].metaKeyword} />
        <link rel="canonical" href={`https://www.flyinate.com/es/vuelos/${props.flight[0].url}-${props.flight[0].pageValue}`} />
        <link rel="alternate" href={`https://www.flyinate.com/es/vuelos/${props.flight[0].url}-${props.flight[0].pageValue}`} />
      </Head>

      <Header />
      {console.log("hjhj", props.flight)}

      <div className='blogadda'>

        <BreadHero title={props.flight[0].metaTitle} linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link href="/">Casa</Link> </li> <li className='breadcrumb-item active' aria-current="page"> <Link href="/vuelos"> vuelos </Link></li> <li className='breadcrumb-item active' aria-current="page">{props.flight[0].metaTitle}</li> </ul></>} />

        <div className='popular-destination blogaddalist details full-w'>
          <Container>
            {props.flight.map((items, i) => (
              <div className='blogaddalist-round'>
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


      <Footer />
    </>
  )
}




export async function getServerSideProps(context) {

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
    "siteId": "139",
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
    props: { flight: json.response }
  }
}
