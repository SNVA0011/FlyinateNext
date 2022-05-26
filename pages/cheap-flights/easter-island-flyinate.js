import React, { useEffect } from "react";
import Head from 'next/head'
import Container from "react-bootstrap/Container";
import Enginebox from "../../component/Enginebox";
import { useRouter } from 'next/router';
import Footer from '../../component/Footer';
import Header from "../../component/Navbar";

export default function CheapFlights() {
  const location = useRouter();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cheapflight-lar"> 
      <Head>
      
        <title>Easter-island-flyinate</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href={"https://www.flyinate.com/cheap-flights/easter-island-flyinate"} />
      </Head>

      <Header />

      <Enginebox smallbanner="smallbannercheap" />

      <div className="popular-destination blogaddalist details full-w">
        <Container>
          {/*============ blogaddalist-round ============*/}
          <div className="blogaddalist-round overflow-visible">
            <div className="blogaddalist-inner">
              <div className="blog-inner-box2 about-font-18">

            
                    <h3 className="sub-title m-0"><strong>Easter Island</strong></h3>
                    <p className="mb-1"><strong className="mb-0">Travel guide to Easter Island</strong></p>

                    <p>Easter Island, the love of historians and travelers. Located in Chile, in the middle of the Pacific Ocean. Easter Island is very famous for its moai statues as it is still a mystery who craved these statues and transported them to Easter Island. There are nearly 900 of them; this attracts visitors to Easter Island. It is a tiny, unique, and remote Island. </p>
                    <p>So, if you are looking for an Easter Island travel guide, follow this page till the end to visit Easter Island.</p>
                    <p>There are a lot of beautiful tourist attractions listed below to visit on Easter Island. Go ahead and travel them all when you pay a visit there. </p>
                    <p>Best Easter Island attraction</p>

                    <p className="mb-1 mt-5"><strong className="mb-0">Ahu Tongariki </strong></p>
                    <p>There are 15 moai statues in Tongariki. You are sure not to miss the sunrise on Tongariki. It is one of the must-included places to go when you visit Easter Island.</p>

                    <p className="mb-1 mt-5"><strong className="mb-0">Rano Raraku Quarry </strong></p>
                    <p>It is known as the factory of moai statues. There are 376 statues at this place. You are sure to visit this place as it has the quarry where the moai are built. So, you get to see how these moai are made in today’s world. </p>

                    <p className="mb-1 mt-5"><strong className="mb-0">Anakena Beach</strong></p>
                    <p>The beach is very famous amongst the tourists as it is a white-sanded beach and the palm trees on this beach are a sure sight which shouldn’t be missed. </p>

                    <p className="mb-1 mt-5"><strong className="mb-0">Ahu Nau Nau </strong></p>
                    <p>This palace is very famous for the moai wearing the red hat on their head. These statues are built with red hats on their heads, making them different from all the other moai on the Island. </p>

                    <p className="mb-1 mt-5"><strong className="mb-0">Ahu Akivi </strong></p>
                    <p>Traveling to Easter island not seeing Ahu Akivi is not fair as this place is very famous for its seven same shape and same size moais facing the ocean. The most beautiful thing about these moai statues is that they face the sunset at the spring equinox, and they have their backs to the sunrise at the fall equinox; this sight is what interests the tourists.</p>
                    <p>Easter Island is a mysterious and amazing island that is a good catch for adventurous people. </p>

 

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
