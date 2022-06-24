import React, { useEffect } from "react";
import Header from '../component/Navbar'
import Footer from "../component/Footer"
import Head from 'next/head';
import BreadHero from "../component/BreadHero";
import Link from "next/link";

export default function ContactUs() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Head>
				<title>Contact Us - Flyinate</title>
				<meta name="description" content="Contact & Visit flyinate for the cheap and reliable flights booking now! " />
				<meta name="keywords" content="flyinate, cheap flight booking website, best place to book flight, online flight booking" />
				<link rel="canonical" href={'https://www.flyinate.com/contact'} />
			</Head>

			<Header />

			<BreadHero
        title="Contact Us"
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
                Contact Us{" "}
              </li>{" "}
            </ul>
          </>
        }
      />

		 

			<div className="about-uspage full-w pyblock-80">
				<div className="site-content site-contact">
				<div className="container mb-1">
						<div className="form-row">
							<div className="col-lg-6">
								<div className="contact-text">
									<h2>Our Offices</h2>
									<div className="contact-box">
										<h3>USA</h3>
										<p>48437, HC 4 AGUADILLA PR 00603-9710 USA</p>  
										<a href="#" title="Get Direction">Get Direction</a>
									</div>
									<div className="contact-box">
										<h3>Paris</h3>
										<p>Station F, 2 Parvis Alan Turing, 8742, Paris France</p>

										<a href="#" title="Get Direction">Get Direction</a>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="contact-form">
									<h2>Get in touch with us</h2>
									<form action="#" method="POST" className="form-underline">
										<div className="field-inline">
											<div className="field-input">
												<input type="text" name="first_name" Z placeholder="First Name" />
											</div>
											<div className="field-input">
												<input type="text" name="last_name" Z placeholder="Last Name" />
											</div>
										</div>
										<div className="field-input">
											<input type="email" name="email" Z placeholder="Email" />
										</div>
										<div className="field-input">
											<input type="tel" name="tel" Z placeholder="Phone Number" />
										</div>
										<div className="field-textarea">
											<textarea name="message" placeholder="Message"></textarea>
										</div>
										<div className="field-submit">
											<input type="submit" value="Send Message" className="btn" />
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
