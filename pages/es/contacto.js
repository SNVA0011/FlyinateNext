import React, { useEffect } from "react";
import Header from '../../component/es/Navbar'
import Footer from "../../component/es/Footer"
import Head from 'next/head';
import BreadHero from '../../component/BreadHero'
import Link from "next/link";

export default function ContactUs() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Head>
				<title>Contáctenos - Flyinate</title>
				<meta name="description" content="¡Contacte y visite flyinate para reservar vuelos baratos y confiables ahora!" />
				<meta name="keywords" content="flyinate, cheap flight booking website, best place to book flight, online flight booking" />
				<link rel="canonical" href={'https://www.flyinate.com/es/contacto'} />
			</Head>

			<Header />

		 
			<BreadHero
        title="Contacto"
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
                Contacto{" "}
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
									<h2>Nuestras Oficinas</h2>
									<div className="contact-box">
										<h3>USA</h3>
										<p>W Ray Rd, Chandler, AZ 85226, USA</p> 
										<a href="#" title="Get Direction">Get Direction</a>
									</div>
									<div className="contact-box">
										<h3>Paris</h3>
										<p>Station F, 2 Parvis Alan Turing, 8742, Paris France</p>

										<a href="#" title="Get Direction">Obtener dirección</a>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="contact-form">
									<h2>Ponte en contacto con nosotras</h2>
									<form action="#" method="POST" className="form-underline">
										<div className="field-inline">
											<div className="field-input">
												<input type="text" name="primer nombre" placeholder="Primer nombre"/>
											</div>
											<div className="field-input">
												<input type="text" name="Apellido" placeholder="Apellido" />
											</div>
										</div>
										<div className="field-input">
											<input type="email" name="Email" placeholder="Email" />
										</div>
										<div className="field-input">
											<input type="tel" name="tel" placeholder="Número de teléfono" />
										</div>
										<div className="field-textarea">
											<textarea name="Mensaje" placeholder="Mensaje"></textarea>
										</div>
										<div className="field-submit">
											<input type="submit" value="Enviar mensaje" className="btn" />
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
