import React, { useEffect, useState } from 'react';
import './AllProducts.css';
import api from '../../AxiosConfig';
import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { AuthContext } from '../context/AuthContext';

const AllProducts = () => {

    const router = useNavigate();

    const [allProducts, setAllProducts] = useState([]);

    // const { state } = useContext(AuthContext);

    // const [search, setSearch] = useState("");
    // const [filteredProduts, setFilterProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get("/api/v1/product/get-all-products");
            if(response.data.success) {
                setAllProducts(response.data.products)
                // setFilterProducts(response.data.products)
            }
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [])

    // async function AddToCart(productId) {
    //     if(!state?.user?._id) {
    //       toast.error("Please login to add products into cart.")
    //       router("/login")
    //     }
    //     try {
    //       const response = await api.post("/user/add-to-cart", {userId : state?.user?._id, productId : productId,})
    //       if(response.data.success){
    //         toast.success(response.data.message);
    //       }
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
  
      // async function AddToWishlist(productId) {
      //   if(!state?.user?._id){
      //     toast.error("Please login to add products into wishlist")
      //     router("/login")
      //   }
      //   try {
      //     const response = await api.post("/user/add-to-wishlist", {userId : state?.user?._id, productId: productId })
      //     if(response.data.message){
      //       toast.success(response.data.message);
      //     }
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }

      // function redirect(id) {
      //   // alert(id) 1 2 3 4 5
      //   router(`/oneproduct/${id}`);
      // }

    // function handleChange(event) {
    //     console.log(event.target.value);
    //     setSearch(event.target.value);
    
    //     let userword = event.target.value.toLowerCase();
    
    //     const filteredProduts = allProducts.filter((product) => { // 20 -> men
    //       // 20 -> 4 -> 4 result show
    //       return product.title.toLowerCase().includes(userword);
    //     });
    
    //     setFilterProducts(filteredProduts); // 20 -> 4
    
    //     console.log(filteredProduts, "filteredProduts");
    //   }

  return (
    <div className='all6'>
        {/* <div className='all7'>
        <h2>Search Product:</h2>
        <input placeholder="Mens.." value={search} onChange={handleChange} />
      </div> */}
      <h1>All Products</h1>
      {allProducts.length ? <div className='all1'>
        {allProducts.map((item) => (
            <div className='all2' onClick={() => router(`/single-product/${item._id}`)}>
                <img className='all3' src={item.image} alt=''/>
                <h1 className='all4'>name: {item.name}</h1>
                <p className='all5'>Category: {item.category}</p>
                <p className='all5'>Quantity: {item.quantity}</p>
                <p className='all5'>Price: ${item.price}</p>
                <p className='all5'>Tags: {item.tags}</p>
                {/* <div className='all9'>
            <button onClick={() => AddToCart(item?._id)}>Add to Cart</button>
            <button onClick={() => AddToWishlist(item?._id)}>Add to Wishlist</button>
        </div> */}
            </div>
        ))}
      </div> : <div>Loading...</div> }
    </div>
  )
}

export default AllProducts
