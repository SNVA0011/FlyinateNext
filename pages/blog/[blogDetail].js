import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Image from "next/image"
import { useRouter } from 'next/router';
import Footer from '../../component/Footer';
import Navbar from "../../component/Navbar"




export default function BlogDetails() {
const [data,setData]=useState([])
const [load,setLoad]=useState(false)

const param=useRouter();
const url= param.query.blogDetail;

function Getdata(){
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": "",
  "title": "",
  "titleUrl":url,
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
fetch("https://cms.travomint.com/travoles-content/blogdatabyid?authcode=Trav3103s987876", requestOptions)
  .then(response => response.json())
  .then(result => {
    setData(result.response)
    setLoad(true)
    console.log(result)
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
            {load?<div className='blogadda'>
 
 {/* <BreadHero title="Blog Details" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link to="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Blog Details</li> </ul></>} /> */}

 <div className='popular-destination blogaddalist details full-w'>
   <Container>
{data.filter((items)=>items.titleUrl==url).map((items,i)=>(
<div className='blogaddalist-round'>
<div className='blogaddalist-inner'>

<div className="blog-inner-box2">
 <p dangerouslySetInnerHTML={{ __html: items.content }}/>
</div>

</div>
</div>
))}

     {/*============ blogaddalist-round ============*/}
    
     {/*============ end blogaddalist-round ============*/}

   </Container>
 </div>
</div>:"Loading..."}
<Footer/>
    </>
  )
}

