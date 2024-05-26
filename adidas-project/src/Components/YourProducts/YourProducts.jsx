import React, { useContext, useEffect, useState } from 'react'
import api from '../../AxiosConfig';
import { AuthContext } from "../context/AuthContext";
import './YourProducts.css';
// import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const YourProducts = () => {

  const router = useNavigate();

    const [allProducts, setAllProducts] = useState([]);

    const { state } = useContext(AuthContext);


    async function getProducts() {
      try {
        const response = await api.post("/product/get-product-by-seller", { userId: state?.user?._id });
        if(response.data.success){
          setAllProducts(response.data.products)
        }
      } catch (error) {
        console.log(error)
        toast.error(error?.response.data.message)
      }
    }

    async function deleteProduct(id) {
      // alert(id)
      try {
          const response = await api.delete('/product/delete-product', { params: { id } })
          if (response.data.success) {
              getProducts()
              toast.success(response.data.message)
          }
      } catch (error) {
          console.log(error, "error here")
          toast.error(error?.response.data.message)
      }
  }

    useEffect(() => {
      if(state?.user && state?.user?.name === undefined) {
        router("/login")
        toast.error("please login to access this page")
      }

      if(state?.user && state?.user?.name !== undefined) {
        getProducts();
      }
    }, [state])


    // useEffect(() => {
    //   async function getProducts() {
    //     // if(!state?.user?._id) {
    //     //   toast.error("Please login to access this page")
    //     //   router("/login")
    //     // }
    //     try {
    //       const response = await api.post("/product/get-product-by-seller", { userId: state?.user?._id});
    //       if(response.data.success){
    //         setAllProducts(response.data.products)
    //       }
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    //   getProducts()
    // }, [state])
  return (
    <div className='all6'>
      <h1>Your Products</h1>

{allProducts.length?  <div className='all1'>
 {allProducts.map((productObj) => (
   <div className='all2' key={productObj._id}>
       <img className='all3' src={productObj.image} alt=''/>
       <h1 className='all4'>Name: {productObj.name}</h1>
       <p className='all5'>Category: {productObj.category}</p>
       <p className='all5'>Price: {productObj.price}/-</p>
       <p className='all5'>Total Quantity: {productObj.quantity}</p>
       <p className='all5'>Tags: {productObj.tags}</p>
       <div className='all9'>
                    <button onClick={() => router(`/update-product/${productObj._id}`)}>Update?</button>
                    <button onClick={() => deleteProduct(productObj._id)}>Delete?</button>
                </div>
   </div>
 ))}
 </div>: <div>Loading..</div>}
    </div>
  )
}

export default YourProducts
