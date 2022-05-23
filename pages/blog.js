import { useEffect, useState } from 'react'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/Link"
import Footer from '../component/Footer';
import Navbar from "../component/Navbar"
// import ScrollAnimation from 'react-animate-on-scroll';

// import loading from "../Atoms/Image/load.gif"


export async function getServerSideProps() { 
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
    "img_url": "",
    "siteId": "139",
    "categoryName": "",
    "blogdes2": "",
    "blogTagsName2": "",
    "extarTag": "",
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
  const res = await fetch("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { allblog: json.response }
  }
}




export default function Blog(props) { 

  useEffect(() => {
    window.scrollTo(0, 0) 
  }, [])

  
  return (
    <>
      <Navbar />
      {/* {load? */}
      <div>
        <div className='blogadda'>

          {/* <Helmet>
        <title>	Blog - Flyinate</title>
        <meta name="description" content="text" />
        <meta name="keywords" content="text" />
        <link rel="canonical" href={window.location.href}/> 
      </Helmet>

      <BreadHero title="Blog" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Linkhref="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Blog</li> </ul></>} /> */}

          <div className='popular-destination blogaddalist full-w'>
            <Container>
              <div className="top-title text-center">
                <p>Blog lists</p>
                <h2>
                  Latest <span>Blog</span>
                </h2>
              </div>
              {console.log('props-',props)}

              { props.allblog.length > 0 ?
                  <Row>
                    {props.allblog.map((items, i) => (
                       <Col xs={12} md={6}>
                       <div className='blogaddalist-round'>
                         <div className='image_area_partition'> 
                           <div className='wrapper'>
                             <span>{items.posttime}</span>
                           </div>
                         </div>
                         <div className='blogaddalist-inner'>
                         <div className='h4 title'>
                           {items.title}
                             </div>
                           <p>{items.description}</p> 
                           <hr className="mx-row-hr" />
                           <Link href={`/blog/${items.titleUrl}`}>
                             <a className='btn btn-site ripple-effbtn btn-40'>
                             <span>Read More</span>
                             </a>
                           </Link>
                         </div>
                       </div>
                     </Col>
                    ))}

                  </Row>
                  : 'no data'}




            </Container>
          </div>
        </div>
      </div>
      {/* //  :<div className='loading'>
    //       Blog loading...
    //    </div>} */}

      <Footer />
    </>
  )
}
