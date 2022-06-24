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
        <Container className="inner_container_1">
          <Row>
            <Col xs={12} md={6} xl={3}>
              <>
                <h5 className="use-head">Useful Links</h5>
                <ul className="use-li">
                  <li>
                    <Link href="/blog">
                      <a className="ripple-effbtn d-inline-block"><span>Blog</span></a>
                    </Link>
                  </li>
                  <li>
                    <Link  href="/flights" >
                      <a className="ripple-effbtn d-inline-block"><span>Flights</span></a>
                    </Link>
                  </li>
                </ul>
              </>
            </Col>
            <Col xs={12} md={6} xl={3}>
              <h5 className="use-head">About Us</h5>
              <ul className="use-li">
                {/* <li>
                  <Link href="/contact-us">
                    <a className="ripple-effbtn d-inline-block"><span>Contact Us</span></a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/about-us">
                    <a className="ripple-effbtn d-inline-block"><span>About Us</span></a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="ripple-effbtn d-inline-block"><span>Contact</span></a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <a className="ripple-effbtn d-inline-block"><span>Privacy Policy</span></a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms">
                    <a className="ripple-effbtn d-inline-block"><span>Terms &amp; Conditions</span></a>
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
                {/* <li>
                  <Link href="/site-map">
                    <a className="ripple-effbtn d-inline-block"><span>Site Map</span></a>
                  </Link>
                </li> */}
              </ul>
            </Col>
            <Col xs={12} md={6} xl={3}>
              <h5 className="use-head">Connect With Us</h5>
              <ul className="use-li address">
                <li>
                  <p className="footer_address">
                    <span>Address:</span> W Ray Rd, Chandler, AZ 85226, USA
                  </p>
                </li>
                <li>
                  <p className="footer_email">
                    <span>Email:</span>
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
                <h3 className="use-head">Subscribe</h3>
                <form className="subscribe-form" id="myForm">
                  <InputGroup className="flex-column">
                    <FormControl
                      type="email"
                      className="subscribe w-100"
                      placeholder="Your Email Address"
                    />
                    <Button className="btn btn-site btn-block ripple-effbtn  w-100">
                      <span>Subscribe</span>
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

                <Image alt="logos" src="/images/card-logos-footer.png"   width={780} height={58}></Image> 
                </p>
                <p className="footer_disclaimer">
                  © 2022 flyinate.com, having its registered office in the state
                  of USA located at W Ray Rd in the city of Chandler with Zip
                  Code 85226. All rights reserved.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}
