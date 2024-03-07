import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from 'next/router';
import CustomizeTravel from '../../component/it/CustomizeTravel';
import Enginebox from '../../component/it/Enginebox';
import Header from '../../component/it/Navbar';
import Footer from '../../component/it/Footer';

import PopularDestinations from '../../component/it/PopularDestination';

export default function Home() {
  const router = useRouter(); 
  
  return (
    <div>
      <Head> 
        <title>Flyinate | Prenota biglietti aerei a basso costo e auto a noleggio</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" /> 
        <link rel="canonical" href={`https://www.flyinate.com${router.asPath}`} />
				
      </Head>
      <Header />
      <Enginebox />
      <PopularDestinations />
      <CustomizeTravel />
      <Footer />

    </div>
  )
}
