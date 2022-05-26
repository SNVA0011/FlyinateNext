import React, { useEffect } from 'react'
import Head from 'next/head'
import BreadHero from '../../component/BreadHero';
import Footer from '../../component/Footer';
import Header from "../../component/Navbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"
import { useRouter } from 'next/router';

export default function CustomizeTravelPage() {
  const location = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Head>
        
        <title>Flyinate : Business Travel</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={"https://www.flyinate.com/customize/Zbusiness-travel"} />
      </Head>


      <Header />


      <BreadHero title="Business Travel" bigbanner='large-pgbn d-flex' linkhtml={<>
        <ul className='breadcrumb text-white'>
          <li className="breadcrumb-item" > <Link href="/">Home</Link> </li>
          <li className='breadcrumb-item active' aria-current="page">Business Travel</li> </ul></>} />

      <div className='about-uspage full-w pyblock-80 gray-bg-least'>
        <Container>
          <Row>
            <Col xs={12} xl={8} className='about-font-18'>
              <div className="cheapflight-lar">
                <div className="popular-destination blogaddalist details full-w allwerly">
                  <div className="blogaddalist-round overflow-visible">
                    <div className="blogaddalist-inner">
                      <div className="blog-inner-box2 about-font-18">
                      <h3 className='sub-title text-uppercase m-0'>Business Travel</h3>
                            <p className="mb-1"><strong className="mb-0">Features of business class travel </strong></p>
                            <p>There is no doubt that a business class seat will always provide you with much better comfort than an economy or premium economy. However, before you make the booking, it is essential to be aware of the features and facilities of business class on a flight. </p>

                            <p className="mb-1 mt-5"><strong className="mb-0">Benefits of traveling in the business: </strong></p>
                            <p>You can opt for the Business Travel Deals on the airlines' website once you have got the right deal or package. Then you can proceed further with booking a business class without any issue. </p>

                            <p className="mb-1 mt-5"><strong className="mb-0">Priority check-in</strong></p>
                            <p>In case you have made the booking of the business class. Then you will be getting priority boarding. That means you don't need to stand in a queue for check-in. You're certainly going to receive much better treatment by the airlines. </p>

                            <p className="mb-1 mt-5"><strong className="mb-0">Additional baggage allowance </strong></p>
                            <p>The exact baggage allowance will be different from one airline to the other. You only need to ensure that you have chosen the business class. Because the business class has much more additional baggage allowance than the economy, you don't need to care much about the luggage. </p>

                            <p className="mb-1 mt-5"><strong className="mb-0">Business-class lounge </strong></p>
                            <p>In case you arrived early at the airport or your flight is delayed. Then you can sit in the business class lounge. You can enjoy different kinds of food and recharge yourself with all the comfort. Some of the business class lounges also have the facility of a shower. </p>

                            <p className="mb-1 mt-5"><strong className="mb-0">Priority boarding </strong></p>
                            <p>There is not going to be any kind of queue for you. Your name will be announced from the priority list. </p>

                            <p className="mb-1 mt-5"><strong className="mb-0">Better seat</strong></p>
                            <p>This is undoubtedly one of the essential feature. In case you're on a long journey. Then you must have all the comfort. That is why, in the business class cabin, your seat will have a much bigger area. That is going to endure that you'll have a comfortable journey. And at the end of the trip, you're not going to go through any jet lag. </p>
                            <p>To make the booking of the business class tickets. It would help if you connected with your airline's customer support, or you can even make the booking through the official website. </p>


                      </div>
                    </div>
                  </div>
                  {/*============ end blogaddalist-round ============*/}

                </div>
              </div>

            </Col>



            <Col xs={12} xl={4}>
              <div className="about-mailtoleft-box">
                <h6>
                  <strong>Mail to Support</strong>
                </h6>
                <div className="talk">
                  <ul className="list-unstyled">
                    <li className='d-flex'>
                      <i className="bi bi-envelope-open-fill"></i>
                      <div className="left">
                        <h4>EMAIL</h4>
                        <p className='mb-0'>
                          <a href="mailto:support@flyinate.com" target="_blank" rel="noreferrer">
                            support@flyinate.com
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </Col>
          </Row>

        </Container>
      </div>

      <Footer />
    </div>
  )
}
