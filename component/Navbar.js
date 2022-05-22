import  { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link';

// import Subheader from './Subheader';
// import ChangeCountryMenu from '../Atoms/ChangeCountryMenu';

export default function Header() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar collapseOnSelect expanded={expanded} expand="xl" bg="white" variant="light" fixed="top" className='new_header_area flex-column'>
                <div className='w-100 d-none d-xl-block'>
                    {/* <Subheader /> */}
                   
                </div>
                <div className='clearfix'></div>

                <Container className='navtop_2'>
                    <Link href="/" activeclassname="active" className='navbar-brand' onClick={() => window.innerWidth < 1200 ? setExpanded(false) : ''}>
                      <a>  <img src='/images/logo.png' alt='Flowers' width={`100%`} height={`100%`}></img></a>
                    </Link>
 

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ml-2 order-3' onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} />
                   
                   
                    <div className='headerusd-dropdown position-relative order-xl-3'>
                        {/* <ChangeCountryMenu /> */}
                      
                    </div> 


                    
                    <Navbar.Collapse id="responsive-navbar-nav" className='order-4 order-xl-1'>
                        <Nav className="ml-auto text-capitalize">
                            <Link href="/" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} activeclassname="active" className='border-first'>Home</Link>
                            <Link href="/about-us" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} activeclassname="active">About Us</Link>
                            <Link href="/flights" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} activeclassname="active">Flights</Link>
                            <Link href="/blog" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} activeclassname="active">Blog</Link>
                            <div className='d-xl-none' onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''}>
                                {/* <Subheader /> */}
                            </div>
                        </Nav>
                    </Navbar.Collapse>

                  
                </Container>
            </Navbar>
            <div className='new_header_area_empty full-w'></div>
        </>
    )
}








