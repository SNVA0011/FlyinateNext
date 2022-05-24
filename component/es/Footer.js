import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer className="footer-area full-w">
        <Container className="inner_container_1">
          <Row>
            <Col xs={12} md={6} xl={3}>
              <>
                <h5 className="use-head">Enlaces útiles</h5>
                <ul className="use-li">
                  <li>
                    <Link href="/articulos">
                      <a className="ripple-effbtn d-inline-block"><span>articulos</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link  href="/vuelos" >
                      <a className="ripple-effbtn d-inline-block"><span>vuelos</span></a>
                    </Link>
                  </li>
                </ul>
              </>
            </Col>
            <Col xs={12} md={6} xl={3}>
              <h5 className="use-head">Sobre nosotras</h5>
              <ul className="use-li">
                {/* <li>
                  <Link href="/contact-us">
                    <a className="ripple-effbtn d-inline-block"><span>Contact Us</span></a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/sobre-nosotras">
                    <a className="ripple-effbtn d-inline-block"><span>Sobre-nosotras</span></a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="ripple-effbtn d-inline-block"><span></span></a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms">
                    <a className="ripple-effbtn d-inline-block"><span></span></a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/site-map">
                    <a className="ripple-effbtn d-inline-block"><span>Site Map</span></a>
                  </Link>
                </li> */}
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
                    <a
                      href="mailto:support@flyinate.com"
                      className="d-inline-block"
                      target="_blank">
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
                <h3 className="use-head">Suscribir</h3>
                <form className="subscribe-form" id="myForm">
                  <InputGroup className="flex-column">
                    <FormControl
                      type="email"
                      className="subscribe w-100"
                      placeholder="Su dirección de correo electrónico"
                    />
                    <Button className="btn btn-site btn-block ripple-effbtn  w-100">
                      <span>Suscribir</span>
                    </Button>
                  </InputGroup>
                </form>
              </div>
              {/*subscribe*/}
            </Col>
          </Row>
        </Container>

        <div className="footer_logos_bottom">
          <Container className="inner_container_2">
            <Row>
              <Col xs={12} className="text-center">
                <p className="footer_logos">
                  <img
                    alt="logos"
                    src="/images/card-logos-footer.png"
                    width={`780`}
                    height={`100%`}
                  />
                </p>
                <p className="footer_disclaimer">
                © 2022 flyinate.com, teniendo su domicilio social en el estado de EE.UU. ubicado en W Ray Rd en la ciudad de Chandler con Código Postal 85226. Todos los derechos reservado.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}
