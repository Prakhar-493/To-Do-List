import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
const ProtectedRoute = ({ children }) => {
    const loggedIn = useSelector(state => state.details.loggedIn);
    if (loggedIn) {
        return children;
        }
    return <Navigate to="/Login" replace />;
}

export default ProtectedRoute