import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link"
import Footer from '../../../../component/it/Footer';
import Header from "../../../../component/it/Navbar";
import Navbar from "../../../../component/it/Navbar"
import PaginateBlog from "../../../../component/PaginateBlog";
import PageHead from "../../../../component/PageHead";
import BreadHero from '../../../../component/BreadHero'
import Moment from 'react-moment';
import { cms_trav_api, cms_trav_authcode, paginateSize, siteid } from '../../../../utils/static'
import { useRouter } from "next/router";


export default function Slug({ blogdata, pagenumber }) {
    const location = useRouter();

    const blogitems = blogdata?.data;
    const totalpage = blogdata?.totalPages;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // isFallback
    if (location.isFallback) {
        return (
            <>
                <PageHead
                    title={`Articolo - Flyinate`}
                    description=""
                    keywords=""
                />

                <Navbar />

                <div className='text-center about-uspage full-w pyblock-200'>
                    <div className="spinner-border text-secondary" role="status">
                    </div>
                </div>

                <Footer />
            </>
        );
    }

    return (
        <>
            <PageHead
                title={`Articolo - Pagina ${pagenumber}`}
                description=""
                keywords=""
            />

            <Header />

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

            <Footer />
        </>
    );
}

export const getStaticProps = async ({ params }) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const res = await fetch(
            `${cms_trav_api}/news-article/pagination?authcode=${cms_trav_authcode}&page=${params.slug}&pageSize=${paginateSize}`,
            {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({
                    siteId: siteid,
                    "pageType": "ArticleIT"
                }),
                redirect: "follow",
            }
        );
        const json = await res.json();

        return {
            props: {
                blogdata: json,
                pagenumber: params.slug,
            },
            revalidate: 60, // In seconds
        };
    } catch (error) {
        return { notFound: true };
    }
};


// paths -> slugs which are allowed
export const getStaticPaths = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const res = await fetch(
        `${cms_trav_api}/news-article/pagination?authcode=${cms_trav_authcode}&page=1&pageSize=${paginateSize}`,
        {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                siteId: siteid,
                "pageType": "ArticleIT"
            }),
            redirect: "follow",
        }
    );
    const posts = await res.json();
    const getpagenum = posts.totalPages;

    // fallback ->
    const paths = Array(getpagenum).fill(0).map((item, index) => ({
        params: { slug: index.toString() + 1 },
    }));

    return {
        paths,
        fallback: true,
    };
};

