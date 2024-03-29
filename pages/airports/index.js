import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"
import Footer from '../../component/Footer';
import Header from "../../component/Navbar";
import Head from 'next/head' 
// import ScrollAnimation from 'react-animate-on-scroll';
import BreadHero from '../../component/BreadHero'
// import loading from "../Atoms/Image/load.gif" 
import Moment from 'react-moment';
import { useRouter } from 'next/router'
import { siteid } from '../../utils/static'
 
export default function airports(props) {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
 
   
  return (
    <>
      <Head>
        <title>	Airports - Flyinate</title> 
        <meta name="description" content="" />
        <meta name="keywords" content="" /> 
        <link rel="canonical" href={`https://www.flyinate.com${router.asPath}`} />
        
      </Head>
      <Header />

      <div className='blogadda'>
        <BreadHero title="Airports" linkhtml={<><ul className='breadcrumb text-white'>
          <li className="breadcrumb-item" > <Link href="/">Home</Link> </li>
          <li className='breadcrumb-item active' aria-current="page">Airports</li> </ul></>} />

        <div className='popular-destination blogaddalist full-w'>
          <Container>
            <div className="top-title text-center">
              {/* <p>Article lists</p> */}
              <h2>
                List Of <span>Airports</span>
              </h2>
            </div>



            {
              props.allblog?.length > 0 ?
                <Row>
                  {props.allblog.filter((items) => items.status === "Active").map((items, i) => (
                    <Col xs={12} md={6} key={i} className='cardRead-more'>
                      <div className='blogaddalist-round'>
                       
                        <div className='blogaddalist-inner'>
                        <div className='text-sm text-secondary mb-2 fw-medium'>
                          <i className="bi bi-calendar4 mr-1"></i> <Moment date={items.posttime} format="MMM DD, YYYY" />   
                          </div>
                          <div className='h4 title'>
                            {items.title}
                          </div> 
                          
                          <div dangerouslySetInnerHTML={{ __html: items.description }}></div>
                          
                          <hr className="mx-row-hr" />
                          <Link href={`/airports/${items.titleUrl}`}>
                            <a className='btn btn-site ripple-effbtn btn-40'>
                              <span>Read More</span>
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

      <Footer />
    </>
  )
}


export async function getStaticProps(context) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "siteId":siteid,
    "pageType":"airport"
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