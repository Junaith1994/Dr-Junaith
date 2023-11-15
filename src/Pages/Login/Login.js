import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mx-auto row container form-page-bg'>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <Form className='col-12 col-md-6 p-3 shadow-lg bg-body-tertiary rounded'>
                    <h1 className='text-center my-4'>Please Login</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter Your Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='appointment-btn' variant="primary" type="submit">
                        Login
                    </Button>
                    <p className='my-2'>Don't have an Account? <Link to='/signup'>Create Account!!</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Login;