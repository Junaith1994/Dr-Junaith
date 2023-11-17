import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    // Necessary input field states
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    // Previous page path of user 
    let from = location.state?.from?.pathname || "/";
    console.log(from);

    // Sign-in with email & password function from firebase hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // console.log(user);
    // console.log(error);

    // Sign-in with google function from firebase hook
    const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);

    // Signup form submit handler
    const formSubmitHandler = event => {
        event.preventDefault();

        // input fields value
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Sign-in with email and password with redirecting user to the intended page
        signInWithEmailAndPassword(email, password)
            .then(user => {
                return user && navigate(from, { replace: true });
            })

        // if (user) {
        //     setSuccessMsg("Login Successful");
        //     return navigate(from, { replace: true });
        // }

        // Redirecting user to the desired page
        // navigate(from, { replace: true });

        // Successful login message for user
        // return user?.user ? (setSuccessMsg("Login Successful"), navigate(from, { replace: true })) : setSuccessMsg('');

    }

    // Google sign-in handler with redirecting user to the intended page
    const googleSignInHandler = () => {
        signInWithGoogle()
            .then(user => user && navigate(from, { replace: true }))

    }

    return (
        <div className='mx-auto row container form-page-bg'>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='col-12 col-md-6 p-3 shadow-lg bg-body-tertiary rounded'>
                    <Form>
                        <h1 className='text-center my-4'>Please Login</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" ref={emailRef} placeholder="Enter Your Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                        </Form.Group>
                        <Button onClick={formSubmitHandler} className='appointment-btn' variant="primary" type="submit">
                            Login
                        </Button>
                        {/* <p className='text-success my-2 fw-semibold'>{successMsg}</p> */}
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
                    <Button onClick={googleSignInHandler} className='appointment-btn w-100 d-flex justify-content-center'>
                        <img style={{ width: '30px' }} className='img-fluid' src="https://i.ibb.co/0DcJQL5/google-logo.png" alt="Google-logo" />
                        <span className='mx-5 fs-5 fw-semibold text-wrap'>Google Sign-in</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;