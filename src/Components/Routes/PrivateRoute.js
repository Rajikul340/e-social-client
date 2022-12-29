import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthUser } from '../AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const{loading, user} = useContext(AuthUser);
    const location = useLocation();

if(user){
return children
}
if(loading){
    return <p>Loading....</p>
}

    return <Navigate to='/login' state={{from:location}} replace/>
};

export default PrivateRoute;