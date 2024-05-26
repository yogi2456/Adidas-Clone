import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../../AxiosConfig";
import "./Register.css"
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

function Register() {
  const router = useNavigate();
  // const { state } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
  });
  // userData.name
  // userData[name]
  console.log(userData, "userData");

  function handleChange(event) {
    // console.log(event.target.value, event.target.name)
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

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
      userData.confirmPassword
    ) {
      // await calling backend one server to another server request, backend validation, data to store mongodb
      try {
        const response = await api.post("/user/register", {
          userData,
        });
        // const response = { data: { success: true, message: "Registeration Completed." } }
        // return res.status(201).json({ success: true, message: "Registeration Completed." })
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
      alert("All fields are required.");
    }
  }

  // useEffect(() => {
  //   if(state && state?.user?.role !== undefined) {
  //     if(state?.user?.role === "buyer") {
  //       router("/")
  //     } else {
  //       router("/seller")
  //     }
  //   }
  // }, [state])

  return (
    <div>
      {/* <Navbar /> */}
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
        <br />
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
          placeholder="NAME *"
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
          placeholder="EMAIL *"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
          placeholder="PASSWORD *"
        />
        <br />
        <br />
        <input
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="CONFIRMPASSWORD *"
        />
        <br />
        <select onChange={handleSelect}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
        <br />
        <input className="value1" type="submit" value="Register" />
      </form> <br/>
      <div className="value3">
        <p>you have already registered, please login here..</p>
        <button className="value2" onClick={() => router("/login")}>Login</button>
      </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Register;

