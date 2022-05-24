import React, { useContext, useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Image from "next/image"
import { useRouter } from 'next/router';
import Footer from '../../component/Footer';
import Navbar from "../../component/Navbar" 

export default function BlogDetails(props) {
   
  useEffect(() => {
    window.scrollTo(0, 0) 
  }, [])

  return (
    <>
      <Navbar />
      {console.log("checking-", props.singleblog)}
      <div className='blogadda'>


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
    "titleUrl": params.blogDetail,
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
  const res = await fetch("https://cms.travomint.com/travoles-content/blogdatabyid?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()
  return {
    props: { singleblog: json.response }
  }


}