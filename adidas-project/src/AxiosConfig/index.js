import axios from "axios";


const api = axios.create({
    baseURL: "https://adidas-backend.onrender.com",
    // baseURL: process.env.ENV === "DEVELOPMENT" ? "http://localhost:3003/api/v1" : "https://awdiz-6.com",
    withCredentials: true,
});

export default api;



// https://adidas-backend.onrender.com