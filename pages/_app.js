import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/globals.css' 
import Head from 'next/head';

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
