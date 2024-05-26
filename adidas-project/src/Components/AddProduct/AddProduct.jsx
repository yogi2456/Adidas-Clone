import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../AxiosConfig";
import { AuthContext } from "../context/AuthContext";
import "./AddProduct.css";
import SellerProduct from "../redirections/SellerProduct";

const AddProduct = () => {
  const { state } = useContext(AuthContext);
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    category: "",
    quantity: "",
    price: "",
    tags: "",
  });

  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/api/v1/product/add-product", {
        productData,
        userId: state.user._id,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setProductData({
          name: "",
          image: "",
          category: "",
          quantity: "",
          price: "",
          tags: "",
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };


  return (
    <div className="add">
      <SellerProduct>
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
        <input className="btn" type="submit" value="AddProduct" />
      </form>
      </SellerProduct>
    </div>
  );
};

export default AddProduct;
