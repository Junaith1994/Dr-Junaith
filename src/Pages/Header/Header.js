import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="navbar-bg" sticky='top'>
            <Container>
                <Navbar.Brand as={NavLink} to='/'><FontAwesomeIcon icon={faTooth} beatFade size='2xl'></FontAwesomeIcon> <span className='fw-bold fs-4'>Taimiyah Dental Care</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/about'>About me</Nav.Link>
                        <Nav.Link as={NavLink} to='/services'>Services</Nav.Link>
                        <Nav.Link as={NavLink} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;