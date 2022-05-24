import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Link from "next/link"
import { useRouter } from 'next/router';
import Footer from '../../component/Footer';
import Navbar from "../../component/Navbar"


export default function Airline(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  // const [data, setData] = useState([])
  // const [load, setLoad] = useState(false)



  // function Getdata() {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     "contentId": "",
  //     "pageType": "Airline",
  //     "pageValue": pageTypeAndValue.PageTyeAndValue[0].pageValue,
  //     "pageName": "",
  //     "metaTitle": "",
  //     "metaKeyword": "",
  //     "metaDesc": "",
  //     "otherMeta": "",
  //     "dealCode": "",
  //     "dealTitle": "",
  //     "contentTitle": "",
  //     "contentData": "",
  //     "contentImage": "",
  //     "siteId": "139",
  //     "status": "",
  //     "count": "",
  //     "url": pageTypeAndValue.PageTyeAndValue[0].url,
  //     "modifyBy": "",
  //     "modifyDate": ""
  //   });

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("https://cms.travomint.com/travoles-content/showcontent?authcode=Trav3103s987876", requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       setData(result.response)
  //       setLoad(true)
  //     })
  //     .catch(error => console.log('error', error));
  // }

  // console.log("finl", data)
  // useEffect(() => {
  //   Getdata()
  // }, [])

  return (
    <>

      <Navbar />
{console.log("hjhj",props.flight)}

<div className='blogadda'>
       

        <div className='popular-destination blogaddalist details full-w'>
      <Container>
{props.flight.map((items,i)=>(
<div className='blogaddalist-round'>
<div className='blogaddalist-inner'>

  <div className="blog-inner-box2">
    <p dangerouslySetInnerHTML={{ __html: items.contentData}}/>
  </div>

</div>
</div>
))} 

        

        </Container>
      </div>
      </div>


      <Footer />
    </>
  )
}




export async function getServerSideProps(context) {
  
  const { params } = context;
  var cityname = params.Airline.split("-")[2]
  let actualURLParts = params.Airline.split("-")
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
      "contentId": "",
      "pageType": "Airline",
      "pageValue": cityname,
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
      "url": actualURLParts[0] + '-' + actualURLParts[1],
      "modifyBy": "",
      "modifyDate": ""
    });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("https://cms.travomint.com/travoles-content/showcontent?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()  
  return {
    props: {flight: json.response}
  }
}
