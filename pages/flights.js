import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
// import Enginebox from '../Molecules/Home/Enginebox';
// import BreadHero from '../Atoms/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import Link from "next/link"
// import loading from "../Atoms/Image/load.gif"
// import ScrollAnimation from 'react-animate-on-scroll';
import Image from "next/image"


export default function Flights(pageValue, pageType) {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)

  console.log("Prop Received " + pageType)
  console.log("Prop Received " + pageValue)


  function Getdata() {
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

    fetch("https://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.response)
        setLoad(true)

      })
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    Getdata()
  }, [])

  const SendingPageType = (data) => {
    dispatch({
      type: SENDVALUES,
      payload: data
    })
  }


  return (
    <div>

      {load ? <div>
        <div className='blogadda'>



          {/* <BreadHero title="Flights" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link to="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Flights</li> </ul></>} /> */}

          <div className='popular-destination blogaddalist full-w'>
            <Container>
              <div className="top-title text-center">
                <p>Flights</p>
                <h2>
                  <span>Flighs</span>
                </h2>
              </div>

              <Row>

                {data.map((items, i) => (


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
                    {/* </ScrollAnimation> */}
                  </Col>

                ))}
                {/* Col xs={12} md={6} */}

                {/* end Col xs={12} md={6} */}




              </Row>
            </Container>
          </div>
        </div>
      </div> : <div className='loading'>

        loading...
      </div>}
    </div>
  )
}