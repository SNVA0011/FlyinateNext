import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Link from "next/Link"

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
                    <Link href="/blog" className="ripple-effbtn d-inline-block">
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/flights"
                      className="ripple-effbtn d-inline-block">
                      <span>Flights</span>
                    </Link>
                  </li>
                </ul>
              </>
            </Col>
            <Col xs={12} md={6} xl={3}>
              <h5 className="use-head">About Us</h5>
              <ul className="use-li">
                {/* <li>
                  <Link
                    href="/contact-us"
                    className="ripple-effbtn d-inline-block"
                  >
                    <span>Contact Us</span>
                  </Link>
                </li> */}
                <li>
                  <Link href="/about-us" className="ripple-effbtn d-inline-block">
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="ripple-effbtn d-inline-block">
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="ripple-effbtn d-inline-block">
                    <span>Terms &amp; Conditions</span>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/site-map" className="ripple-effbtn d-inline-block">
                    <span>Site Map</span>
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
                  <InputGroup>
                    <FormControl
                      type="email"
                      className="subscribe"
                      placeholder="Your Email Address"
                    />
                    <Button className="btn btn-site btn-block ripple-effbtn">
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
                  <img
                    alt="logos"
                    src="/images/card-logos-footer.png"
                    width={`780`}
                    height={`100%`}
                  />
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
