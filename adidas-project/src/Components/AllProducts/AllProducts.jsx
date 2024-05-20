import React, { useEffect, useState } from 'react';
import './AllProducts.css';
import api from '../../AxiosConfig';

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([]);

    // const [search, setSearch] = useState("");
    // const [filteredProduts, setFilterProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get("/product/get-all-products");
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
            <div className='all2'>
                <img className='all3' src={item.image} alt=''/>
                <h1 className='all4'>name: {item.name}</h1>
                <p className='all5'>Category: {item.category}</p>
                <p className='all5'>Quantity: {item.quantity}</p>
                <p className='all5'>Price: ${item.price}</p>
                <p className='all5'>Tags: {item.tags}</p>
                <div className='all9'>
                    <button>Add to Cart</button>
                    <button>Add to Wishlist</button>
                </div>
            </div>
        ))}
      </div> : <div>Loading...</div> }
    </div>
  )
}

export default AllProducts
