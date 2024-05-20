import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SellerProduct = ({children}) => {
    const router = useNavigate();
 const { state } = useContext(AuthContext);

 useEffect(() => {
    if(state?.user && state?.user?.role !== "seller") {
        toast.error("your are not allow to access this page, only for seller")
        router("/")
    }
 }, [state]);
 return children
}

export default SellerProduct
