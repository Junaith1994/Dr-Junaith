import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <Navbar expand="lg" className="navbar-bg">
            <Container>
                <Navbar.Brand href="#home"><FontAwesomeIcon icon={faTooth} beatFade size='2xl'></FontAwesomeIcon> <span>Taimiyah's Dental Care</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About me</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>
                        <Nav.Link href="#link">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;