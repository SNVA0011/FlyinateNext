import React, { useEffect } from "react";
import Head from 'next/head'
import Container from "react-bootstrap/Container";
import Enginebox from "../../component/Enginebox";
import { useRouter } from 'next/router';
import Footer from '../../component/Footer';
import Header from "../../component/Navbar";

export default function CheapFlights() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cheapflight-lar"> 
      <Head>
      
        <title>Lima-flyinate</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" /> 
        <link rel="canonical" href={`https://www.flyinate.com${router.asPath}`} />
				
      </Head>
       
      <Header />

      <Enginebox smallbanner="smallbannercheap" />

      <div className="popular-destination blogaddalist details full-w">
        <Container>
          {/*============ blogaddalist-round ============*/}
          <div className="blogaddalist-round overflow-visible">
            <div className="blogaddalist-inner">
              <div className="blog-inner-box2 about-font-18">

              
                    <h3 className="sub-title m-0"><strong>Lima</strong></h3>
                    <p className="mb-1"><strong className="mb-0"></strong></p>
                    <p>Lima is situated on the pacific coast of Peru and is also the capital of Peru. If you are looking to travel to Lima, you can learn about some famous attractions. You can visit Lima, the largest city in South America, the home of pre-Columbian art. To check the Lima travel guide to visit all the places, you can read further and find all the details.</p>

                    <p className="mb-1 mt-5"><strong className="mb-0">Plaza de Armas:</strong></p>
                    <p>It is one of the starting points of sightseeing in Lima. It is also called the plaza mayor as it is the historical center of Lima. Most of the buildings were lost in the 1746 earthquake, and this is the only one that is standing in plaza de Armas.</p>

                    <p className="mb-1 mt-5"><strong className="mb-0">Covento de san Francisco:</strong></p>
                    <p>This is the Francisco church, and when this was the Lima's first cemetery, 10,000 bones were stored in this monastery. At the bottom of the church, there is a maze of narrow hollows lined with bones on both sides.</p>


                    <p className="mb-1 mt-5"><strong className="mb-0">Magic water tour:</strong></p>
                    <p>It is located in the park of reserve and was opened in 2007, attracting two million visitors in a year. It is recorded as the biggest fountain complex that contains 13 separate fountains. The largest magic fountain shoots a water jet of almost 80 meters high, and a runnel of surprises that is a 35-meter tunnel is walked throughout it.</p>

                    <p className="mb-1 mt-5"><strong className="mb-0">Love park:</strong></p>
                    <p>If you are traveling with your partner, this place is made for you. You will find a more romantic spot at the love part to watch the beautiful sunset with your love. Mosaic designs are recreated with the help of tiny tiles that line the undulating walls. </p>

                    <p className="mb-1 mt-5"><strong className="mb-0">Miraflores:</strong></p>
                    <p>It is a neighborhood of modern glass and steel commercial buildings that is mixed with some old colonial homes and contains lots of green space. It has also become one of the Lima attractions that many travelers love to explore accordingly.</p>
                 


              </div>
            </div>
          </div>
          {/*============ end blogaddalist-round ============*/}
        </Container>
      </div>

      <Footer />
    </div>
  );
}
