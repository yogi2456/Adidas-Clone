import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FakeStoreSingleProduct = () => {

    const [productData, setProductData] = useState({})

    const { id } = useParams();

    async function getSingleProduct () {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProductData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(id) {
            getSingleProduct()
        }
    }, [id])
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <div style={{width: "45%", height: "250px", border: "1px solid black"}}>
        <img style={{width: "50%", height: "70%", padding: "30px", marginLeft: "60px"}} src={productData?.image} alt='image'/>
        </div>
        <div style={{width: "45%", height: "200px", border: "1px solid black", padding: "20px"}}>
        <h1>{productData?.title}</h1>
        <p style={{fontSize: "15px"}}>{productData?.description}</p>
        <h2>Price: {productData?.price}</h2>
      </div>
    </div>
  )
}

export default FakeStoreSingleProduct