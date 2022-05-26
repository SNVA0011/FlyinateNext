import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link"
import Image from "next/image"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Head from 'next/head'
import BreadHero from "../component/BreadHero";
import Header from "../component/Navbar";

export default function AboutUs() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        
        <title>About us - Flyinate</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="https://www.flyinate.com/about-us" />
      </Head>

      <Header />
      <BreadHero
        title="ABOUT US"
        linkhtml={
          <>
            <ul className="breadcrumb text-white">
              {" "}
              <li className="breadcrumb-item">
                {" "}
                <Link href="/">Home</Link>{" "}
              </li>{" "}
              <li className="breadcrumb-item active" aria-current="page">
                {" "}
                ABOUT US{" "}
              </li>{" "}
            </ul>
          </>
        }
      />

      <div className="about-uspage full-w pyblock-80">
        <Container>
          <Row>
            <Col xs={12} xl={8} className="about-font-18">
              <h2 className="sub-title">About Us</h2>

              <p>
                Traveling is not just a part of tourism; it is the means to
                fulfill one’s passion and dreams. It’s both calm and chaotic,
                peaceful and adventurous. When you travel for business, you need
                professional advice, but when you travel for your dreams, you
                need magic and a little bit of everything.{" "}
              </p>

              <p>
                We at Flyinate understand this perfectly. What you need and what
                your heart desires are two different things, and sometimes you
                have to choose between these two. Not anymore! You don’t have to
                settle for the mundane for your business travel; or the bare
                minimum if you are low on budget; from the latest offers to the
                cheapest travels and trips, we offer everything.
              </p>

              <p>
                Having connections with the most exotic locations, airlines and
                hotel stay, let us plan your trip from scratch. Customer
                satisfaction is what we thrive on because our work is about
                trust. Making sure that you keep coming to us again and again,
                we always make sure you get to travel big, no matter how small
                the budget.{" "}
              </p>

              <p>
                Safety, security, budget maintenance, making the right call,
                choosing the fairest price, and staying at the most breathtaking
                places, are all the essence of a trip; and we hold on to them
                dearly.{" "}
              </p>

              <p>
                So don’t wait, make that call, send that email or click that
                button; our representatives are eagerly waiting to craft a trip
                just for you.
              </p>
            </Col>
            <Col xs={12} xl={4}>
              <div className="about-mailtoleft-box">
                <h6>
                  <strong>Mail to Support</strong>
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
