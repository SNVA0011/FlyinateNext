import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
// import Enginebox from '../Molecules/Home/Enginebox';
// import BreadHero from '../Atoms/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import Link from "next/link"
// import loading from "../Atoms/Image/load.gif"
// import ScrollAnimation from 'react-animate-on-scroll';
import Image from "next/image"


export default function Flights(props, pageValue, pageType) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const SendingPageType = (data) => {
    dispatch({
      type: SENDVALUES,
      payload: data
    })
  }


  return (
    <div>

      <div>
        <div className='blogadda'>



          {/* <BreadHero title="Flights" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link to="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Flights</li> </ul></>} /> */}

          <div className='popular-destination blogaddalist full-w'>
            <Container>
              <div className="top-title text-center">
                <p>Flights</p>
                <h2>
                  <span>Flighs -{props.allflights?.length }</span>
                </h2>
              </div>


              {
                props.allflights?.length > 0 ?
                  <Row>

                    {props.allflights.map((items, i) => (
                      <Col xs={12} md={6}>
                        {/* <ScrollAnimation duration={1.2} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'> */}
                        <Link href={`/flights/${items.url}-${items.pageValue}`}>
                          <a className='image_area_partition'>
                            <Image src='/images/business_travel.jpg' width="500" height="300" alt='business_travel'></Image>
                            <div className='wrapper'>
                              <span></span>
                            </div>
                          </a>
                        </Link>
                        <div className='blogaddalist-inner'>

                          <Link href={`/flights/${items.url}`}>
                            <a className='h4 title'><span>{items.pageName}-{items.pageValue}</span></a>
                          </Link>
                          <hr className="mx-row-hr" />
                          <Link onClick={() => SendingPageType(items)} href={`/flights/${items.url}-${items.pageValue}`}>
                            <a className='btn btn-site ripple-effbtn btn-40'>
                              <span>Read More</span>
                            </a>
                          </Link>
                        </div>
                      </Col>

                    ))}
                  </Row>
                  : 'No items found !'
              }

            </Container>
          </div>
        </div>
      </div>
    </div>
  )
}





export async function getServerSideProps() {
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
    "siteId": "139",
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
  const json = await res.json()
  return {
    props: { allflights: json.response }
  }
}