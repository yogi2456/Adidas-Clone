import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './FakeStoreAllProducts.css'

const FakeStoreAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]); // to just get products 20 -> 20
  //   console.log(allProducts, "allProducts");

  const [search, setSearch] = useState(""); // shose
  const [filterProducts, setFilterProducts] = useState([]); // [{},{} ] setting here // 20 -> 10 4

  const router = useNavigate();

  async function getProducts() {
    // api call
    // alert("Jiii")
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response, "response from fakestore api")
      if (response?.data.length) {
        setAllProducts(response.data);
        setFilterProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function redirect(id) {
    // alert(id) 1 2 3 4 5
    router(`/fake-store-single-product/${id}`);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value);

    let userword = event.target.value.toLowerCase();

    const filteredProduts = allProducts.filter((product) => { // 20 -> men
      // 20 -> 4 -> 4 result show
      return product.title.toLowerCase().includes(userword);
    });

    setFilterProducts(filteredProduts); // 20 -> 4

    console.log(filteredProduts, "filteredProduts");
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
        <div class="navbar9">
            <div class="navbar10">
            <h2>YOU GOT THIS</h2>
            <p>When you play sport on your own terms, <br/> pressure doesn't stand a chance.</p>
            <button>
                <p>EXPLORE MORE</p>
                <i class="fa-solid fa-arrow-right-long"></i>
            </button>
            </div>
        </div>
    <div>
      {/* <h1 style={{textAlign: "center", marginTop: "30px"}}>Fake Store All Products</h1> */}
      <div style={{marginLeft: "42%", marginTop: "30px"}}>
        <h2>Search Product:</h2>
        <input placeholder="Mens.." value={search} onChange={handleChange} />
      </div>
      {filterProducts?.length ? (
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginBottom: "30px",
          }}
        >
          {filterProducts.map((productObj) => (
            <div
              onClick={() => redirect(productObj.id)}
              style={{
                width: "18%",
                border: "2px solid black",
                height: "250px",
                marginBottom: "30px",
                overflow: "hidden"
              }}
            >
              <img
                style={{ height: "70%", width: "100%" }}
                src={productObj.image}
              />
              <p style={{fontSize: "12px"}}>{productObj.title}</p>
              <p>{productObj.description}</p>
              <h2>{productObj.price}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </>
  );
};

export default FakeStoreAllProducts;