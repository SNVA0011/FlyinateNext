import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Link from "next/link"
import Image from "next/image"


export default function Footer() {
  return (
    <>
      <footer className="footer-area full-w">
        <Container className='inner_container_1'>
          <Row>
            <Col xs={12} md={6} xl={3}>
              <>
                <h5 className="use-head">Enlaces útiles</h5>
                <ul className="use-li">
                  <li>
                    <Link href="/es/articulos" locale="es">
                      <a className='ripple-effbtn d-inline-block'>
                        <span>Artículos</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/es/vuelos" locale="es">
                      <a className='ripple-effbtn d-inline-block'>
                        <span>Vuelos</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </>

            </Col>
            <Col xs={12} md={6} xl={3}>
              <h5 className="use-head">Sobre nosotras</h5>
              <ul className="use-li">
                {/* <li>
                                    <Link href="/es/contacta-con-nosotras" locale="es">
                                    <a className='ripple-effbtn d-inline-block'>
                                        <span>Contacta con nosotras</span>
                                        </a>
                                        </Link>
                                </li> */}
                <li>
                  <Link href="/es/sobre-nosotras"  locale="es">
                    <a className='ripple-effbtn d-inline-block'>
                      <span>Sobre nosotras</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/es/politica"  locale="es">
                    <a className='ripple-effbtn d-inline-block'>
                      <span>Política de privacidad</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/es/terminos"  locale="es">
                    <a className='ripple-effbtn d-inline-block'>
                      <span>Términos y condiciones</span>
                    </a>
                  </Link>
                </li>


                <li className="d-none">
                  <Link href="/">
                    <a className='ripple-effbtn d-inline-block'>
                      <span>Home</span>
                    </a>
                  </Link>
                </li>

                <li className="d-none">
                  <Link href="/es">
                    <a className='ripple-effbtn d-inline-block'>
                      <span>Casa</span>
                    </a>
                  </Link>
                </li>

              </ul>

            </Col>
            <Col xs={12} md={6} xl={3}>
              <h5 className="use-head">Conecta con nosotras</h5>
              <ul className="use-li address">
                <li>
                  <p className="footer_address">
                    <span>Dirección:</span> W Ray Rd, Chandler, AZ 85226, USA
                  </p>
                </li>
                <li>
                  <p className="footer_email">
                    <span>Correo electrónico:</span>
                    <a href="mailto:support@flyinate.com" className='d-inline-block' target="_blank">
                      support@flyinate.com
                    </a>
                  </p>
                </li>
                <li>
                  <p className="F_social_icon">
                    <a
                      className="d-inline-flex Ffacebook"
                      href="https://www.facebook.com/flyinate"
                      target="_blank"
                      rel="noreferrer">
                      <i className="bi bi-facebook" />
                    </a>
                    <a
                      className="d-inline-flex Ftwitter"
                      href="https://twitter.com/flyinate"
                      target="_blank"
                      rel="noreferrer">
                      <i className="bi bi-twitter" />
                    </a>
                    <a
                      className="d-inline-flex Finstagram"
                      href="https://www.instagram.com/flyinate"
                      target="_blank"
                      rel="noreferrer">
                      <i className="bi bi-instagram" />
                    </a>
                    <a
                      className="d-inline-flex Fpinterest"
                      href="https://www.pinterest.com/flyinate"
                      target="_blank"
                      rel="noreferrer">
                      <i className="bi bi-pinterest" />
                    </a>
                  </p>
                </li>

              </ul>

            </Col>

            <Col xs={12} md={6} xl={3}>
              <div className="subscribe">
                <h3 className='use-head'>Suscribir</h3>
                <form className="subscribe-form" id="myForm">
                  <InputGroup>
                    <FormControl type="email" className="subscribe" placeholder="Su dirección de correo electrónico" />
                    <Button className='btn btn-site btn-block ripple-effbtn'>
                      <span>Suscribir</span>
                    </Button>
                  </InputGroup>
                </form>
              </div>
              {/*subscribe*/}
            </Col>
          </Row>
        </Container>

        <div className='footer_logos_bottom'>
          <Container className='inner_container_2'>
            <Row>
              <Col xs={12} className='text-center'>
                <p className="footer_logos"> 
                  <Image alt="logo" src={"/images/card-logos-footer.png"} width={780}  height={58} ></Image>  
                </p>
                <p className="footer_disclaimer">
                  © 2022 flyinate.com, teniendo su domicilio social en el estado de EE.UU.
                  ubicado en W Ray Rd en la ciudad de Chandler con Código Postal 85226. Todos los derechos
                  reservado.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}
