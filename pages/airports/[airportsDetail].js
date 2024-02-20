import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Link from "next/link"
import Footer from '../../component/Footer';
import Navbar from "../../component/Navbar"
import RecentAirports from "../../component/RecentAirports"
import BreadHero from '../../component/BreadHero';
import Head from 'next/head'
import NotFound from '../NotFound';
import { useRouter } from 'next/router'
import Moment from 'react-moment';
import { siteid } from '../../utils/static';

export default function airportsDetail(props) {
  const router = useRouter()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 

  if (router.isFallback) {
    return <>
      <Navbar />

      <div className='text-center about-uspage full-w pyblock-200'>
        <div className="spinner-border text-secondary" role="status">
        </div>
      </div>

      <Footer />
    </>
  }


  return (
    <>
      <Navbar />

 
      {props.singleblog.length > 0 ?
        <>
          <Head>
            <title>{props.singleblog[0].title}</title>
            <meta name="description" content={props.singleblog[0].description} />
            <meta name="keywords" content={props.singleblog[0].keywords} />
            <link rel="canonical" href={`https://www.flyinate.com${router.asPath}`} />
            <link rel="alternate" href={`https://www.flyinate.com${router.asPath}`} />
          </Head>

          <div className='blogadda'>
            <BreadHero title="Airports Details"
             linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link href="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page"> <Link href="/airports"> Airports </Link></li> <li className='breadcrumb-item active' aria-current="page">{props.singleblog[0].title}</li> </ul></>} />

            <div className='popular-destination blogaddalist details full-w'>
              <Container>
                <div className='row'>
                  <div className="col-xl-8">
                    {
                      props.singleblog?.length > 0 ?
                        <>
                          {props.singleblog.map((items, i) => (
                            <div className='blogaddalist-round' key={i}>
                              <div className='blogaddalist-inner'>
                                <div className="mb-2 text-secondary">
                                  - <Moment date={props.singleblog[0].posttime} format="MMM DD, YYYY" />
                                </div>

                                <div className="blog-inner-box2" dangerouslySetInnerHTML={{ __html: items.content }} />
                              </div>
                            </div>
                          ))}
                        </>
                        : 'No items found !'
                    }
                  </div>
                  <div className="mt-5 mt-xl-0 col-xl-4">
                    <RecentAirports title="Recent Airports" data={props.recentposts.slice(0, 5)} />
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </>
        :
        <NotFound />
      } 


      <Footer />
    </>
  )
}



// const param = useRouter();
// const url = param.query.blogDetail;

export async function getStaticProps(context) {
  const { params } = context
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // recent blog
  var recentraw = JSON.stringify({
    "siteId":siteid,
    "pageType":"airport"
  });

  var requestForRecent = {
    method: 'POST',
    headers: myHeaders,
    body: recentraw,
    redirect: 'follow'
  };
  const recentfetch = await fetch("https://cms.travomint.com/news-article/showNAdata?authcode=Trav3103s987876", requestForRecent)
  const rcpjson = await recentfetch.json()

  // single blog
  var raw = JSON.stringify({
    "siteId": siteid,
    "pageType":"airport",
    "titleUrl": params.airportsDetail
});
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const res = await fetch("http://cms.travomint.com/news-article/naDataById?authcode=Trav3103s987876", requestOptions)
  const json = await res.json()

  return {
    props: {
      singleblog: json.response,
      recentposts: rcpjson.response
    },
    revalidate: 60,
  }
}


// This function gets called at build time
export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
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
  const jsondata = await res.json()
  const data = jsondata.response

  // dynemic paths 
  let paths = [];
  data.forEach((post) => {
    paths.push({
      params: { airportsDetail: post.titleUrl }
    })
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: true
  }

}
