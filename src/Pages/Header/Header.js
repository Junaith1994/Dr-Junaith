import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    // Auth state & sign-out function from firebase hook
    const [user, loading] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

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
                        {user || loading ? <Button onClick={() => signOut()} className='btn-grad fw-semibold'>Sign-Out</Button>
                            :
                            <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;