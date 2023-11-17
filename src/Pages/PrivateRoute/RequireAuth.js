import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const RequireAuth = ({ children }) => {
    // Auth state from firebase hook
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    
    // Prevention to redirect user to login page
    if (loading) {
        return <div className='text-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    }

    return user ? children : <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default RequireAuth;