import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from 'next/router';
import CustomizeTravel from '../../component/es/CustomizeTravel';
import Enginebox from '../../component/es/Enginebox';
import Header from '../../component/es/Navbar';
import Footer from '../../component/es/Footer';

import PopularDestinations from '../../component/es/PopularDestination';

export default function Home() {
  const useroute = useRouter();
  const canonicalURL = 'https://www.flyinate.com/' + useroute.pathname;
  return (
    <div>
      <Head>
        <html lang="es" />
        <title>Flyinate | Reserve boletos de vuelos con tarifas bajas y autos de alquiler</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" /> 
        <link rel="canonical" href={canonicalURL} />
        <link rel="alternate" href={canonicalURL} />
      </Head>
      <Header />
      <Enginebox />
      <PopularDestinations />
      <CustomizeTravel />
      <Footer />

    </div>
  )
}
