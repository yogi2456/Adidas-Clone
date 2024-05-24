import React, { useContext, useEffect, useState } from 'react'
import api from '../../AxiosConfig';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateProduct.css';
import { AuthContext } from '../context/AuthContext';

const UpdateProduct = () => {
    const [productData, setProductData] = useState({});
    const { state } = useContext(AuthContext);
    console.log(productData, "productData")
    const { id } = useParams();
    const router = useNavigate();

    async function getProductData() {
        try {
            const response = await api.get(`/product/get-single-product?id=${id}`)
            if (response.data.success) {
                setProductData(response.data.product)
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleChange(event) {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await api.post('/product/update-product', { productData, userId: state.user._id, })
            if (response.data.success) {
                toast.success(response.data.message)
                router('/your-products')
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }

    useEffect(() => {
        if (id) {
            getProductData()
        }
    }, [id])

    return (
        <div className='add'>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit} className="add1">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={productData.name}
          placeholder="NAME *"
        />
        <br />
        <input
          type="url"
          name="image"
          onChange={handleChange}
          value={productData.image}
          placeholder="IMAGE *"
        />
        <br />
        <input
          type="catgory"
          name="category"
          onChange={handleChange}
          value={productData.category}
          placeholder="CATEGORY *"
        />
        <br />
        <input
          type="number"
          name="quantity"
          onChange={handleChange}
          value={productData.quantity}
          placeholder="QUANTITY *"
        />
        <br />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={productData.price}
          placeholder="PRICE *"
        />
        <br />
        <input
          type="text"
          name="tags"
          onChange={handleChange}
          value={productData.tags}
          placeholder="TAGS *"
        />
        <br />
        <input className="btn" type="submit" value="UpdateProduct" />
      </form>
        </div>
    )
}

export default UpdateProduct
