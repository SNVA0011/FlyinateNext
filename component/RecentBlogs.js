import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import Moment from 'react-moment';


function RecentBlogs({ language, data, title }) {
    const location = useRouter();
    const parenturl = language ? location.asPath.split('/')[2] : location.asPath.split('/')[1]
    const lang = language ? ('/' + language) : ''
 

    return (
        <>
            {data?.length > 0 ?
                <div className="recent-destinations">
                    <div className="title-dlist">
                        <h3>{title}</h3>
                    </div>
                    <div className="row blogscroll-y">
                        {data.map((items, i) => (
                            <div className='item col-sm-6 col-lg-4 col-xl-12' key={i}>
                                <Link href={items.titleUrl}>
                                    <a className={"card h-100" +
                                        (location.asPath === lang + ('/' + parenturl + '/') + items.titleUrl ? ' active' : '')}>
                                        <div className="card-body">
                                            <span className='badge badge-secondary'><i className="bi bi-calendar2-week mr-2"></i>
                                                <Moment date={items.posttime} format="MMM DD, YYYY" /></span>
                                            <h5 className="card-title mb-0">{items.title}</h5>
                                            <p className='mb-0 text-truncate'>{items.description}</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ))
                        }
                    </div>
                </div>
                : ''}
        </>
    )
}

export default RecentBlogs