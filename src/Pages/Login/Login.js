import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    // Necessary input field states
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [successMsg, setSuccessMsg] = useState('');

    // Sign-in with email & password function from firebase hook
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Signup form submit handler
    const formSubmitHandler = event => {
        event.preventDefault();

        // input fields value
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Validation to login
        signInWithEmailAndPassword(email, password);

        // Successful login message for user
        return user?.user ? setSuccessMsg('') : setSuccessMsg("Login Successful");

    }

    return (
        <div className='mx-auto row container form-page-bg'>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='col-12 col-md-6 p-3 shadow-lg bg-body-tertiary rounded'>
                    <Form onSubmit={formSubmitHandler}>
                        <h1 className='text-center my-4'>Please Login</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" ref={emailRef} placeholder="Enter Your Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                        </Form.Group>
                        <Button className='appointment-btn' variant="primary" type="submit">
                            Login
                        </Button>
                        <p className='text-success my-2 fw-semibold'>{successMsg}</p>
                        <p className='text-danger fw-semibold'>{error && error?.message}</p>
                        <p className='my-2'>Don't have an Account? <Link to='/signup'>Create Account!!</Link></p>
                    </Form>
                    {/* Divider */}
                    <div className='d-flex align-items-center my-3'>
                        <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                        <span className='mx-1 fw-semibold'>OR</span>
                        <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                    </div>
                    {/* Google Sign-in Button*/}
                    <Button className='appointment-btn w-100 d-flex justify-content-center'>
                        <img style={{ width: '30px' }} className='img-fluid' src="https://i.ibb.co/0DcJQL5/google-logo.png" alt="Google-logo" />
                        <span className='mx-5 fs-5 fw-semibold text-wrap'>Google Sign-in</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;