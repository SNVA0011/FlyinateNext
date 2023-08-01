import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"

// import ScrollAnimation from 'react-animate-on-scroll';
import BreadHero from '../../component/BreadHero'
import Header from '../../component/es/Navbar'
import Footer from '../../component/es/Footer'
// import loading from "../Atoms/Image/load.gif"
import Head from 'next/head'
import Moment from 'react-moment';
import { useRouter } from 'next/router'


export default function articulos(props) {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <Head>

        <title>Articulos - Flyinate</title>
        <meta name="description" content="" />
        <link rel="canonical" href={`https://www.flyinate.com${router.asPath}`} />
        <link rel="alternate" href={`https://www.flyinate.com${router.asPath}`} />
      </Head>
      <Header />
      {/* {load? */}
      <div>
        <div className='blogadda'>

          {/* <Helmet>
        <title>	Blog - Flyinate</title>
        <meta name="description" content="text" />
        <meta name="keywords" content="text" />
        <link rel="canonical" href={window.location.href}/> 
      </Helmet>

      <BreadHero title="Blog" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Linkhref="/es/" >Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Blog</li> </ul></>} /> */}

          <BreadHero title="articulos" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link href="/es/">Casa</Link> </li> <li className='breadcrumb-item active' aria-current="page">articulos</li> </ul></>} />

          <div className='popular-destination blogaddalist full-w'>
            <Container>
              <div className="top-title text-center">

                <h2>
                  Articulos
                </h2>
              </div>



              {
                props.allblog?.length > 0 ?
                  <Row>
                    {props.allblog.filter((items) => items.status === "Active").map((items, i) => (
                      <Col xs={12} md={6} key={i}>
                        <div className='blogaddalist-round'>
                          <div className='image_area_partition'>
                            <div className='wrapper'>
                              <span>{items.posttime}</span>
                            </div>
                          </div>
                          <div className='blogaddalist-inner'>
                            <div className='text-sm text-secondary mb-2 fw-medium'>
                              <i className="bi bi-calendar4 mr-1"></i> <Moment date={items.posttime} format="MMM DD, YYYY" />
                            </div>
                            <div className='h4 title'>
                              {items.title}
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: items.description }} />
                            <hr className="mx-row-hr" />
                            <Link href={`/es/articulos/${items.titleUrl}`}>
                              <a className='btn btn-site ripple-effbtn btn-40'>
                                <span>Lee mas</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    ))}

                  </Row>
                  : <p className='text-center'>No items found !</p>
              }

            </Container>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}


export async function getStaticProps(context) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
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
    "siteId": "139",
    "pageType": "Articulo",
    "extraTag": "",
    "tfnHeader": "",
    "tfnFooter1": "",
    "tfnFooter2": "",
    "tfnFooter3": "",
    "tfnPopup": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allblog: json.response },
    revalidate: 60,
  }
}