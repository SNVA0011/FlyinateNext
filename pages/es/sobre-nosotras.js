import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router';
import Head from 'next/head'
import BreadHero from "../../component/BreadHero"
import Header from "../../component/es/Navbar";
import Footer from "../../component/es/Footer";


export default function sobrenosotras() {

  const router = useRouter(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        
        <title>Sobre Nosotras - Flyinate</title>
        <link rel="canonical" href={`https://www.flyinate.com${router.asPath}`} />
				
      </Head>

      <Header />
      <BreadHero
        title="sobre nosotras"
        linkhtml={
          <>
            <ul className="breadcrumb text-white">
              {" "}
              <li className="breadcrumb-item">
                {" "}
                <Link href="/es/">Casa</Link>{" "}
              </li>{" "}
              <li className="breadcrumb-item active" aria-current="page">
                {" "}
                sobre nosotras{" "}
              </li>{" "}
            </ul>
          </>
        }
      />

      <div className="about-uspage full-w pyblock-80">
        <Container>
          <Row>
            <Col xs={12} xl={8} className="about-font-18">
              <h2 className="sub-title">sobre nosotras</h2>

              <p>
                Viajar no es solo una parte del turismo; es el medio para cumplir la pasión y los sueños de uno. Es a la vez tranquilo y caótico, pacífico y aventurero. Cuando viajas por negocios, necesitas asesoramiento profesional, pero cuando viajas por tus sueños, necesitas magia y un poco de todo.{" "}
              </p>

              <p>
                En Flyinate lo entendemos perfectamente. Lo que necesitas y lo que tu corazón desea son dos cosas diferentes y, a veces, tienes que elegir entre estas dos. ¡Ya no! No tiene que conformarse con lo mundano para sus viajes de negocios; o el mínimo indispensable si tiene poco presupuesto; desde las últimas ofertas hasta los viajes y viajes más baratos, te lo ofrecemos todo.


              </p>

              <p>
                Con conexiones con los lugares más exóticos, aerolíneas y estadías en hoteles, permítanos planificar su viaje desde cero. La satisfacción del cliente es lo que prosperamos porque nuestro trabajo se basa en la confianza. Asegurándonos de que siga viniendo a nosotros una y otra vez, siempre nos aseguramos de que pueda viajar a lo grande, sin importar cuán pequeño sea el presupuesto.

                {" "}
              </p>

              <p>
                La seguridad, el mantenimiento del presupuesto, tomar la decisión correcta, elegir el precio más justo y hospedarse en los lugares más impresionantes son la esencia de un viaje; y nos aferramos a ellos con mucho cariño.

                {" "}
              </p>

              <p>
                Así que no espere, haga esa llamada, envíe ese correo electrónico o haga clic en ese botón; nuestros representantes están esperando ansiosamente para diseñar un viaje solo para usted.


              </p>
            </Col>
            <Col xs={12} xl={4}>
              <div className="about-mailtoleft-box">
                <h6>
                  <strong>Correo a Soporte</strong>
                </h6>
                <div className="talk">
                  <ul className="list-unstyled">
                    <li className="d-flex">
                      <i className="bi bi-envelope-open-fill"></i>
                      <div className="left">
                        <h4>EMAIL</h4>
                        <p className="mb-0">
                          <a
                            href="mailto:support@flyinate.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            support@flyinate.com
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
