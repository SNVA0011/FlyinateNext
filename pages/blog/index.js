import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"
import Footer from '../../component/Footer';
import Header from "../../component/Navbar";
import PaginateBlog from "../../component/PaginateBlog";
import Head from 'next/head' 
// import ScrollAnimation from 'react-animate-on-scroll';
import BreadHero from '../../component/BreadHero'
// import loading from "../Atoms/Image/load.gif" 
import Moment from 'react-moment';
import { useRouter } from 'next/router'
import { cms_trav_api, cms_trav_authcode, paginateSize, siteid } from '../../utils/static'
 
export default function Blog({ blogdata }) {
  const router = useRouter()

  const blogitems = blogdata.data;
  const totalpage = blogdata.totalPages;
 

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
 
   
  return (
    <>
      <Head>
        <title>Blog - Flyinate</title> 
        <meta name="description" content="" />
        <meta name="keywords" content="" /> 
        <link rel="canonical" href={`https://www.flyinate.com${router.asPath}`} />
        
      </Head>
      <Header />


  

     <div className='blogadda'>
        <BreadHero title="Blog" linkhtml={<><ul className='breadcrumb text-white'>
          <li className="breadcrumb-item" > <Link href="/">Home</Link> </li>
          <li className='breadcrumb-item active' aria-current="page">Blog</li> </ul></>} />

        <div className='popular-destination blogaddalist full-w'>
          <Container>
            <div className="top-title text-center">
              <p>Blog lists</p>
              <h2>
                Latest <span>Blog</span>
              </h2>
            </div>



            {
              blogitems?.length > 0 ?
                <Row>
                  {blogitems.filter((items) => items.status === "Active").map((items, i) => (
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
                : <p className='text-center'>No items found !</p>
            }


            {totalpage > 1 && blogitems?.length > 0 && (
                  <PaginateBlog
                    current={true}
                    page={`/blog`}
                    type={`/blog/page`}
                    total={totalpage}
                  />
                )}

          </Container>
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
      `${cms_trav_api}/travoles-content/pagination?authcode=${cms_trav_authcode}&page=1&pageSize=${paginateSize}`,
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          siteId: siteid,
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























