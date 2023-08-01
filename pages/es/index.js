import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from 'next/router';
import CustomizeTravel from '../../component/es/CustomizeTravel';
import Enginebox from '../../component/es/Enginebox';
import Header from '../../component/es/Navbar';
import Footer from '../../component/es/Footer';

import PopularDestinations from '../../component/es/PopularDestination';

export default function Home() {
  const router = useRouter(); 
  
  return (
    <div>
      <Head>
        
        <title>Flyinate | Reserve boletos de vuelos con tarifas bajas y autos de alquiler</title>
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

    </div>
  )
}
