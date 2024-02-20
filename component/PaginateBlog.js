import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import Pagination from 'react-bootstrap/Pagination';


const PaginateBlog = ({ type, page, total, current }) => {
    const location = useRouter();
    const lastpage = `${type}/${total}`;
    const currentpage = location.query.slug ? location.query.slug : 1;
    const prev = currentpage == 2 ? page : `${type}/${Number(currentpage) - 1}`;
    const next = `${type}/${Number(currentpage) + 1}`;

    const allPaginate = [];
    const getllPagi = Array(total).fill(0).map((item, index) => { return (allPaginate.push(index)) });

    const numleft = currentpage < 6 ? 0 : Number(currentpage) - 4;
    const numright = currentpage < 6 ? 5 : Number(currentpage) + 3;



    return (
        <section className='text-center'>
            <div className='site-paginate-theme spcmt-60 d-inline-block'>
                <ul className="pagination">

                    {current || currentpage == 1 ? null : <>
                        <li className="page-item">
                            <Link href={page}>
                                <a className="page-link" role="button" tabIndex={0}>
                                    <span aria-hidden="true">
                                       <i class="bi bi-chevron-left"></i>
                                    </span>
                                    <span className="visually-hidden">First</span>
                                </a>
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link href={prev}>
                                <a className="page-link" role="button" tabIndex={0}>
                                    <span aria-hidden="true">
                                             <i class="bi bi-chevron-double-left"></i>
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </>}


                    {getllPagi.slice(numleft, numright).map((item, index) => {
                        const name = item
                        const url = name == 1 ? page : `${type}/${name}`
                        return (
                            <li className={`nv page-item${location.asPath === url ? ' active' : ''}`} key={index}>
                                <Link href={url}>
                                    <a className="page-link">
                                        {name}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}

                    {location.asPath == lastpage ? null : <>
                        <li className="page-item">
                            <Link href={next}>
                                <a className="page-link " role="button" tabIndex={0}>
                                    <span aria-hidden="true">
                                    <i class="bi bi-chevron-right"></i>
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link href={lastpage}>
                                <a className="page-link" role="button" tabIndex={0}>
                                    <span aria-hidden="true">
                                    <i class="bi bi-chevron-double-right"></i>
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </>}


                </ul>

            </div>
        </section>
    )
}

export default PaginateBlog