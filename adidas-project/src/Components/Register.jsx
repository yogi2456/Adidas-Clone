import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Register.css";
import api from "../AxiosConfig";

const Register = () => {
  const router = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "buyer",
  });
  // userData.name
  // userData[name]
  //console.log(userData, "userData")

  const handleChange = (event) => {
    //console.log(event.name.value, event.target.name)
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  function handleSelect(event) {
    // console.log("event.target.value")
    setUserData({ ...userData, ["role"]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmpassword
    ) {
      // await calling backend one server to another server request, backend validation, data to store mongodb
      try {
        const response = await api.post("/user/register", { userData });
        if (response.data.success) {
          setUserData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "buyer",
          });
          toast.success(response.data.message);
          router("/login");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      alert("All fields are required");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="register">
        <div className="register1">
          <div className="register2">
            <div className="reg-right">
              <img
                style={{ width: "35%", height: "40%" }}
                src="https://account-frontends.adidas.com/account_account-portal/1.0.0-experimental.14/assets/adiclub-blue-desktop.e34c412f9253e8d5.svg"
                alt=""
              />
              <h1>
                YOUR ADICLUB
                <br /> BENEFITS AWAIT
              </h1>
              <p>
                Get free shipping, discount vouchers and members only products
                when you’re in adiClub.
              </p>
              <h2>Log in or sign up (it’s free)</h2>
              <div className="reg-right1">
                <div>
                  <i
                    class="fa-brands fa-apple"
                    style={{ color: "#05090f" }}
                  ></i>
                </div>
                <div>
                  <i
                    class="fa-brands fa-facebook"
                    style={{ color: "#2470f5" }}
                  ></i>
                </div>
                <div>
                  <i
                    class="fa-brands fa-google"
                    style={{ color: "#0a0a0b" }}
                  ></i>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  required
                  placeholder="NAME*"
                />{" "}
                <br />
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                  placeholder="EMAIL ADDRESS *"
                />{" "}
                <br />
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  required
                  placeholder="PASSWORD *"
                />{" "}
                <br />
                <input
                  type="confirmpassword"
                  name="confirmpassword"
                  value={userData.confirmpassword}
                  onChange={handleChange}
                  required
                  placeholder="CONFIRMPASSWORD"
                />{" "}
                <br />
                <select onChange={handleSelect}>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
                <div className="reg-right2">
                  <input type="checkbox" required />
                  <p>
                    I would like to stay up to date with adidas. I agree to
                    receive personalised marketing messages from adidas India
                    Marketing Pvt. Ltd.
                  </p>
                </div>
                <div className="reg-right3">Read more</div>
                <div className="reg-right2">
                  <input type="checkbox" required />
                  <p>
                    I have read and accepted the Terms & Conditions, the adiClub
                    Terms & Conditions and the adidas Privacy Policy.
                  </p>
                </div>
                <div className="reg-right4">
                  <input type="checkbox" required />
                  <p>Keep me logged in. Applies to all options.</p>
                </div>
                <div className="reg-right3">More info</div>
                <input className="value1" type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;

// { position: "top-right"}
