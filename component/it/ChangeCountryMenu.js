import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Button } from 'react-bootstrap';


export default function ChangeCountryMenu() {
    const [lang, setLang] = useState("IT");
    const [curr, setCurr] = useState('INR');
    const [expanded, setExpanded] = useState(false);

    return (
        <DropdownButton title={<>
            <span>
                {/* {curr} <b className='mx-1'>|</b>  */}
                {lang} <i className="bi bi-chevron-down"></i>
            </span> </>}
            variant="outline-secondary">
            <div className='curr-block py-4'>
                <h5 className='mb-3 text-center'>Seleziona la lingua</h5>
                <Row>
                <Col xs="12" md="12" className='mb-3'>
                        <Dropdown.Item as={Link} href="/" onClick={(e) => { setLang('EN') }}>
                            <a className={'btn btn-site ripple-effbtn btn-40 btn-block text-center dropdown-item'}>
                                <span>English</span>
                            </a>
                        </Dropdown.Item>
                    </Col>
                    <Col xs="12" md="12" className='mb-3'>
                        <Dropdown.Item as={Link} href="/es"  onClick={(e) => { setLang('ES') }}>
                            <a className={'btn btn-site ripple-effbtn btn-40 btn-block text-center dropdown-item'}>
                                <span>Spanish</span>
                            </a>
                        </Dropdown.Item>
                    </Col>
                    <Col xs="12" md="12">
                        <Dropdown.Item as={Link} href="/it"  onClick={(e) => { setLang('IT') }}>
                            <a className={'btn btn-site ripple-effbtn btn-40 btn-block text-center dropdown-item active'}>
                                <span>Italian</span>
                            </a>
                        </Dropdown.Item>
                    </Col>
                </Row>
            </div>


            {/* <Dropdown.Divider className='my-3'/>
    <div className='curr-block'>
    <h5>Select Currency</h5> 

    <Row className='selcur-rew'>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('USD')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='USD flg'></b>
                USD</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('INR')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='INR flg'></b>
                INR</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('AUD')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='AUD flg'></b>
                AUD</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('GBP')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='GBP flg'></b>
                GBP</span></Dropdown.Item>
            </Col>

            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('AED')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='AED flg'></b>
                AED</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('EUR')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='EUR flg'></b>
                EUR</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('CA')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='CA flg'></b>
                CA</span></Dropdown.Item>
            </Col>
        </Row> 
    </div> */}
        </DropdownButton>
    )
}
