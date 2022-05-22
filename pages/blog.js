import { useEffect, useState } from 'react'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/Link"
import Footer from '../component/Footer';
import Navbar from "../component/Navbar"
// import ScrollAnimation from 'react-animate-on-scroll';

// import loading from "../Atoms/Image/load.gif"

export default function Blog() {
  const [data,setData]=useState([])
  const [load,setLoad]=useState(false)


  
function Getdata(){
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

fetch("https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
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
  
  console.log(data)
  return (
   <>
  <Navbar/>
     {load?<div>
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

          <Row>

{data.map((items,i)=>(

 
<Col xs={12} md={6}>
              {/* <ScrollAnimation duration={1.2} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'> */}
                <Link href="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  
                  <div className='wrapper'>
                    <span>{(new Date(items.posttime)).getDate()+"/"+((new Date(items.posttime)).getMonth()+1)+"/"+(new Date(items.posttime)).getFullYear()}</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link href={`/blog/${items.titleUrl}`} className='h4 title'>{items.title}</Link>
                  <p>{items.description}</p>

                  <hr className="mx-row-hr" />
                  <Link href={`/blog/${items.titleUrl}`} className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
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
     </div>:<div className='loading'>
          Blog loading...
       </div>}

       <Footer/>
   </>
  )
}
