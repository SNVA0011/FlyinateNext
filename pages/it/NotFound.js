import React from 'react'
import Head from 'next/head'
import Link from "next/link"

const NotFound = () => {
    return (
        <>
            <Head>
                <title>404 pagina non trovata</title>
            </Head>

            <div className="about-uspage full-w pyblock-80">
                <div className="container text-center py-3">
                    <div className="four_zero_four_bg">
                        <h1 className="display-3 text-gray-800 font-bold mb-3">404</h1>
                    </div>
                    <div className="contant_box_404">
                        <h3 className="h4 font-semibold text-blue-500">
                              La pagina richiesta non è stata trovata.
                        </h3>

                        <p className='text-base mb-4  font-semibold'>Fare clic sul pulsante in basso per tornare alla home page.</p>

                        <div className='d-inline-block'>
                            <Link href="/it">
                                <a className="btn btn-site btn-block ripple-effbtn py-3 px-4">
                                    <span>Ritorno a casa</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound