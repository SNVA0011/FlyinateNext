import React, { useContext, useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Image from "next/image"
import { useRouter } from 'next/router';
import Head from 'next/head'

import Link from "next/link"
import BreadHero from '../../../component/BreadHero';
import Header from '../../../component/es/Navbar';
import Footer from '../../../component/es/Footer';


export default function BlogDetails(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        
        <title>{props.singleblog[0].title}</title>
        <meta name="description" content={props.singleblog[0].description} />
        <meta name="keywords" content={props.singleblog[0].keywords} />
        <link rel="canonical" href={`https://www.flyinate.com/es/articulos/${props.singleblog[0].titleUrl}`} />
        <link rel="alternate" href={`https://www.flyinate.com/es/articulos/${props.singleblog[0].titleUrl}`} />

      </Head>
      <Header />

      <div className='blogadda'>
        <BreadHero title="articulos" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link href="/es" locale="es">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page"> <Link href="/es/articulos" locale="es"> articulos </Link></li> <li className='breadcrumb-item active' aria-current="page">{props.singleblog[0].title}</li> </ul></>} />


        <div className='popular-destination blogaddalist details full-w'>
          <Container>
            {
              props.singleblog?.length > 0 ?
                <>
                  {props.singleblog.map((items, i) => (
                    <div className='blogaddalist-round'>
                      <div className='blogaddalist-inner'>
                        <div className="blog-inner-box2">
                          <p dangerouslySetInnerHTML={{ __html: items.content }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
                : 'No items found !'
            }


          </Container>
        </div>
      </div>
      <Footer />
    </>
  )
}



// const param = useRouter();
// const url = param.query.blogDetail;

export async function getServerSideProps(context) {
  const { params } = context
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": "",
    "title": "",
    "titleUrl": params.articulosDetail,
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
    "tfnPopup": "",
  }
  );

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("https://cms.travomint.com/news-article/naDataById?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { singleblog: json.response }
  }


}