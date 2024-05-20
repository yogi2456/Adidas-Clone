import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const AuthDirection = () => {
 
    const router = useNavigate();
    const { state } = useContext(AuthContext);

    useEffect(() => {
        if(state && state?.user === null) {
            toast.error("Please login to access this page")
            router("/login")
        }
    }, [state])
}

export default AuthDirection
