import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link';
import { useRouter } from 'next/router';



import Subheader from '../Subheader';
import ChangeCountryMenu from './ChangeCountryMenu';

export default function Header() {
    const location = useRouter();

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar collapseOnSelect expanded={expanded} expand="xl" bg="white" variant="light" fixed="top" className='new_header_area flex-column'>
                <div className='w-100 d-none d-xl-block'>
                    <Subheader />

                </div>
                <div className='clearfix'></div>

                <Container className='navtop_2'>
                    <Link href="/es" locale="es" activeclassname="active" onClick={() => window.innerWidth < 1200 ? setExpanded(false) : ''}>
                        <a className='navbar-brand'>
                            <img src='/images/logo.png' alt='logo' width={211}></img>
                        </a>
                    </Link>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ml-2 order-3' onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} />


                    <div className='headerusd-dropdown position-relative order-xl-3'>
                        <ChangeCountryMenu />

                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav" className='order-4 order-xl-1'>
                        <Nav className="ml-auto text-capitalize">
                            <Link href="/es" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} locale="es">
                                <a className={'border-first nav-link ' + (location.pathname === "/es" ? 'active' : '')}>Casa</a>
                                </Link>
                            <Link href="/es/sobre-nosotras" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} locale="es">
                                <a className={'nav-link ' + (location.pathname === "/es/sobre-nosotras" ? 'active' : '')}>
                                    Sobre Nosotras
                                </a>
                            </Link>
                            <Link href="/es/vuelos" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} locale="es">
                                <a className={'nav-link ' + (location.pathname === "/es/vuelos" || location.pathname === "/es/vuelos/[vuelosDetail]" ? 'active' : '')}>
                                    Vuelos
                                </a>
                            </Link>
                            <Link href="/es/articulos" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} locale="es">
                                <a className={'nav-link ' + (location.pathname === "/es/articulos" || location.pathname === "/es/articulos/[articulosDetail]" ? 'active' : '')}>
                                    Articulos
                                </a>
                            </Link>
                            <Link href="/es/contacto" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} locale="es">
                                <a className={'nav-link ' + (location.pathname === "/es/contacto" ? 'active' : '')}>
                                    Contacto
                                </a>
                            </Link>
                            <div className='d-xl-none' onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''}>
                                <Subheader />
                            </div>
                        </Nav>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
            <div className='new_header_area_empty full-w'></div>
        </>
    )
}








