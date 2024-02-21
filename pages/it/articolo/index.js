import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"

// import ScrollAnimation from 'react-animate-on-scroll';
import BreadHero from '../../../component/BreadHero'
import Header from '../../../component/it/Navbar'
import Footer from '../../../component/it/Footer'
// import loading from "../Atoms/Image/load.gif"
import Head from 'next/head'
import Moment from 'react-moment';
import { useRouter } from 'next/router'
import { cms_trav_api, cms_trav_authcode, paginateSize, siteid } from '../../../utils/static'
import PaginateBlog from '../../../component/PaginateBlog'


export default function articulos({ blogdata }) {
  
  const router = useRouter();

  const blogitems = blogdata.data;
  const totalpage = blogdata.totalPages;

 
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

 
  return (
    <>
      <Head>
        
        <title>Articolo - Flyinate</title>
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

      <BreadHero title="Blog" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Linkhref="/it/"  >Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Blog</li> </ul></>} /> */}

          <BreadHero title="articolo" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link href="/it/" >Casa</Link> </li> <li className='breadcrumb-item active' aria-current="page">articolo</li> </ul></>} />

          <div className='popular-destination blogaddalist full-w'>
            <Container>
              <div className="top-title text-center"> 
                <h2>
                  Articolo
                </h2>
              </div>


       
              {
                blogitems?.length > 0 ?
                  <Row>
                    {blogitems.filter((items) => items.status === "Active").map((items, i) => (
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
                            <Link href={`/it/articolo/${items.titleUrl}`}>
                              <a className='btn btn-site ripple-effbtn btn-40'>
                                <span>Lee Mas</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    ))}

                  </Row>
                  : <p className='text-center'>Nessun articolo trovato !</p>
              }


              {totalpage > 1 && blogitems?.length > 0 && (
                  <PaginateBlog
                    current={true}
                    page={`/it/articolo`}
                    type={`/it/articolo/page`}
                    total={totalpage}
                  />
                )}

            </Container>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}


 

export const getStaticProps = async ({ params }) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // All blogs (1st Page)
    const res = await fetch(
      `${cms_trav_api}/news-article/pagination?authcode=${cms_trav_authcode}&page=1&pageSize=${paginateSize}`,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          siteId: siteid,
          "pageType":"ArticleIT"
        }),
        redirect: "follow",
      }
    );
    const json = await res.json(); 
    return {
      props: {
        blogdata: json
      },
      revalidate: 60, // In seconds
    };
  } catch (error) {
    return { notFound: true };
  }
};
