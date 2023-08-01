import Head from 'next/head'
import Image from 'next/image'
import CustomizeTravel from '../component/CustomizeTravel'
import Enginebox from '../component/Enginebox'
import Footer from '../component/Footer'
import Header from '../component/Navbar'
import PopularDestinations from '../component/PopularDestination'
import { useRouter } from 'next/router';

export default function Home() { 
  const router = useRouter()
  return (
  <>
      <Head>
      
        <title>Flyinate | Book Low Fares Flights Tickets & Rental Cars</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />   
        <link rel="canonical" href={`https://www.flyinate.com${router.asPath}`} />
				<link rel="alternate" href={`https://www.flyinate.com${router.asPath}`} />
      </Head>
      <Header />
      <Enginebox />
      <PopularDestinations />
      <CustomizeTravel />
      <Footer />
      </>
    
  )
}
