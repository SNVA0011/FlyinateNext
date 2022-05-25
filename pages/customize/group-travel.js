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
        <html lang="en" />
        <title>Flyinate : Group Travel</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={"https://www.flyinate.com/customize/group-travel"} />
      </Head>


      <Header />


      <BreadHero title="Group Travel" bigbanner='large-pgbn d-flex' linkhtml={<>
        <ul className='breadcrumb text-white'>
          <li className="breadcrumb-item" > <Link href="/">Home</Link> </li>
          <li className='breadcrumb-item active' aria-current="page">Group Travel</li> </ul></>} />

      <div className='about-uspage full-w pyblock-80 gray-bg-least'>
        <Container>
          <Row>
            <Col xs={12} xl={8} className='about-font-18'>
              <div className="cheapflight-lar">
                <div className="popular-destination blogaddalist details full-w allwerly">
                  <div className="blogaddalist-round overflow-visible">
                    <div className="blogaddalist-inner">
                      <div className="blog-inner-box2 about-font-18">

                      <h3 className='sub-title text-uppercase m-0'>Group Travel</h3>
                            <p className="mb-1"><strong className="mb-0"></strong></p>
                            <p>Most of the time, the passengers choose group travel because it is done in an organized way, and you can select more than 10 passengers seats at a time, and next to it, you have the option to choose multiple seats as well on your chosen airlines flight. As you go for group travel, you will avail Group Travel offers, through which you will get heavy discounts for the fare you choose. Therefore, if you want to choose group travel, you will first have to gather information on the benefits of group travel.</p>
                            <p className="mb-1 mt-5"><strong className="mb-0">Passengers who opting group travel will get heavy discounts on the chosen fare type </strong></p>
                            <ul>
                              <li>You will get a lower fare price while booking group travel tickets. </li>
                              <li>On the other hand, the prices of every seat would be the same for group travel tickets.</li>
                              <li>You can get group travel packages from the airlines, which will be valid for 1-2 days, and under this time frame, you can quickly go through the offers and deals and then book a flight ticket.</li>
                              <li>Lastly, with group booking, passengers have seats reserved at one place on board, and you can quickly get it done by choosing the best package and through the seat mapping tool.</li>
                            </ul>
                            <p>Therefore, if you want to book a flight ticket with Group Travel packages, you can book a flight with quite an ease. For this, you will have to contact a customer service representative, and after that, you will provide them with the details in regards to group booking, and then they will send you with a group booking quotation with prices and these prices are valid till 48 hours.</p>
                            <p>If you are not getting any idea which destination is suitable or you need Group Travel advise, you can call the group reservation number and get some advice from the expert. </p>
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
