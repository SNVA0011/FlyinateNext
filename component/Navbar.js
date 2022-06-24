import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link';
import ChangeCountryMenu from './ChangeCountryMenu';
import Subheader from './Subheader';
import { useRouter } from 'next/router';

 

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
                    <Link href="/" activeclassname="active" onClick={() => window.innerWidth < 1200 ? setExpanded(false) : ''}>
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
                            <Link href="/" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''}>
                                <a className={'border-first nav-link ' + (location.pathname === "/" ? 'active' : '')}>Home</a></Link>
                            <Link href="/about-us" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''}>
                                <a className={'nav-link ' + (location.pathname === "/about-us" ? 'active' : '')}>
                                About Us
                                </a>
                                </Link>
                            <Link href="/flights" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''}>
                                <a className={'nav-link ' + (location.pathname === "/flights" || location.pathname === "/flights/[Airline]" ? 'active' : '')}>
                                Flights
                                </a>
                                </Link>
                            <Link href="/blog" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''}>
                                <a className={'nav-link ' + (location.pathname === "/blog" || location.pathname === "/blog/[blogDetail]" ? 'active' : '')}>
                                Blog
                                </a>
                                </Link>
                            <Link href="/contact" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''}>
                                <a className={'nav-link ' + (location.pathname === "/contact" ? 'active' : '')}>
                                Contact
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








