import toast from "react-hot-toast";
import api from "../../AxiosConfig";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = () => {
    const [productData, setProductData] = useState({});
    const router = useNavigate();
    // console.log(productData, "productData")
    const { id } = useParams();
    const { state } = useContext(AuthContext);

    async function AddToCart(productId) {
        if(!state?.user?._id) {
          toast.error("Please login to add products into cart.")
          router("/login")
        }
        try {
          const response = await api.post("/api/v1/user/add-to-cart", {userId : state?.user?._id, productId : productId,})
          if(response.data.success){
            toast.success(response.data.message);
          }
        } catch (error) {
          console.log(error)
        }
      }

      async function AddToWishlist(productId) {
        if(!state?.user?._id){
          toast.error("Please login to add products into wishlist")
          router("/login")
        }
        try {
          const response = await api.post("/api/v1/user/add-to-wishlist", {userId : state?.user?._id, productId: productId })
          if(response.data.message){
            toast.success(response.data.message);
          }
        } catch (error) {
          console.log(error)
        }
      }

    useEffect(() => {
        async function getSingleProductData() {
            try {
                const { data } = await api.get(`/api/v1/product/get-single-product?id=${id}`)
                if (data.success) {
                    setProductData(data.product)
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (id) {
            getSingleProductData();
        }
    }, [id])

    console.log(productData, "productData")

    return (
        <div>
            {productData?._id ?
                <div id='full'>
                    <div className="left" >
                        <img alt='ubhn' style={{ width: "60%", height: "85%" }} src={productData.image} />
                    </div>
                    <div className="right" >
                        <h1>name: {productData.name}</h1>
                        <p className='all5'>Category: {productData.category}</p>
                        <p className='all5'>Quantity: {productData.quantity}</p>
                        <p className='all5'>Price: ${productData.price}</p>
                        <p className='all5'>Tags: {productData.tags}</p>
                        <button className="btns" onClick={() => AddToCart(productData?._id)}>Cart</button>
                        <button className="btns1" onClick={() => AddToWishlist(productData?._id)}>Add to Wishlist</button>
                    </div>
                </div>
                :
                <div>Loading..</div>
            }
        </div>
    )
}

export default SingleProduct