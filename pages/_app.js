import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
    <title>Flyinate | Book Low Fares Flights Tickets & Rental Cars</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" /> 
        
    </Head>
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
