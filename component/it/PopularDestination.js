import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Image from "next/image"


export default function PopularDestinations() { 
      
  return (
   <>
    {/* PopularDestinations */}
    <div className='popular-destination full-w'>
                <Container>
                    <div className="top-title text-center">
                        <p>liste di destinazione</p>
                        <h2>
                        Popolare <span>Destinazioni</span>
                        </h2>
                    </div>

                    <Row>
                        <Col xs={12} md={6} lg={4}> 
                                <Link href="/it" locale="it">
                                <a className='image_area_partition'>
                                <Image src='/images/macchu.jpg' width={500} height={300}   alt='macchu' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>Machu Picchu</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link href="/it" locale="it">
                            <a className='image_area_partition'> 
                                <Image src='/images/island.jpg'  width="500" height="300" alt='Galapagos Islands' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>Le Isole Galapagos</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link href="/it" locale="it">
                            <a className='image_area_partition'> 
                                <Image src='/images/Cusco.jpg' width={500} height={300}   alt='Cusco' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>Cuzco</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                        
                            <Link href="/it" locale="it">
                            <a className='image_area_partition'> 
                                <Image src='/images/easter.jpg'width={500} height={300}   alt='Easter Island' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>isola di Pasqua</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link href="/it" locale="it">
                            <a className='image_area_partition'> 
                                <Image src='/images/Buenos.jpg'width={500} height={300}   alt='Buenos Aires' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>Buenos Aires</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link href="/it" locale="it">
                            <a className='image_area_partition'> 
                                <Image src='/images/Lima.jpg'width={500} height={300}   alt='turkey' className='object-cover'></Image>
                                <div className='wrapper'>
                                    <span>Cinque</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
   </>
  )
}

 

