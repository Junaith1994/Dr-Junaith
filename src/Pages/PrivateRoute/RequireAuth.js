import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    // Auth state from firebase hook
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    return user && loading ? children : <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default RequireAuth;