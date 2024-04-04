import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
// import { AuthContext } from './Context/AuthContext';
import Navbar from './Navbar';
import './Login.css'
import Footer from './Footer';

const Login = () => {

    const router = useNavigate();

    // const { LOGIN } =useContext(AuthContext)
    const [userData, setUserData] = useState({email: "", password: ""})
    //console.log(userData)

    const handleChange = (event) => {
        //console.log(event.target.name, event.target.value)
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    function handleSubmit (event) {
        event.preventDefault();
        if(userData.email && userData.password) {
            try {
                const response = {data: {success: true, message: "Login Successfull", token: "abdgbhhhhhufejksjk", userData: {name: "yogesh", email: "yogesh@gmail.com"}}}
                if(response.data.success) {
                    localStorage.setItem("token", JSON.stringify(response.data.token))
                    // LOGIN(response.data.userData)
                    toast.success(response.data.message,) 
                    setUserData({email: "", password: ""})
                    router('/')
                }
            } catch (error) {
                toast.error(error)
            }
        } else {
            alert("All fields are required")
        }
    }
    return (
        <div>
            <Navbar/>
            <div className="login">
        <div className="login1">
            <div className="login-left">
                <img style={{width: "100%", height: "70%"}} src="https://www.adidas.co.in/glass/react/f69593a/assets/img/account-portal-page-inline.png"/>
                <h1>JOIN THE CLUB. GET <br/> REWARDED.</h1>
                <h2>JOIN ADICLUB. GET REWARDED TODAY.</h2>
                <div className="login-left1">
                    <div>
                        <i class="fa-solid fa-check"></i>
                        <p>Free delivery</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-check"></i>
                        <p>A 15% off voucher for your next purchase</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-check"></i>
                        <p>Access to Members Only products and sales</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-check"></i>
                        <p>Access to adidas Running and Training apps</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-check"></i>
                        <p>Special offers and promotions</p>
                    </div>
                </div>
                <p>Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.</p>
            </div>


            <div className="login-right">
                <img style={{width: "35%", height: "25%"}} src="https://account-frontends.adidas.com/account_account-portal/1.0.0-experimental.14/assets/adiclub-blue-desktop.e34c412f9253e8d5.svg"/>
                <h1>YOUR ADICLUB BENEFITS AWAIT</h1>
                <p>Get free shipping, discount vouchers and members only products when you’re in adiClub.</p>
                <h2>Log in or sign up (it’s free)</h2>
                <div className="login-right1">
                    <div>
                        <i class="fa-brands fa-apple" style={{color: "#05090f"}}></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-facebook" style={{color: "#2470f5"}}></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-google" style={{color: "#0a0a0b"}}></i>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                <input type='email' placeholder="EMAIL ADDRESS *" onChange={handleChange} name='email' required/> <br/>
                <input type='password' placeholder="PASSWORD *" onChange={handleChange} name='password' required/> <br/>
                <div class="login-right2">
                    <input type="checkbox"/>
                    <p>
                        I would like to stay up to date with adidas. I agree to receive personalised marketing messages from adidas India Marketing Pvt. Ltd.</p>
                </div>
                <div className="login-right3">Read more</div>
                <div className="login-right2">
                    <input type="checkbox"/>
                    <p>I have read and accepted the Terms & Conditions, the adiClub Terms & Conditions and the adidas Privacy Policy.</p>
                </div>
                <div className="login-right4">
                    <input type="button"/>
                    <p>
                        Keep me logged in. Applies to all options.</p>
                </div>
                <div className="login-right3">More info</div>
                <input className='value' type='submit' value="Login"/>
                </form>
            </div>

            
        </div>

    </div>
    <Footer/>
        </div>
    )
}

export default Login;



{/* <form onSubmit={handleSubmit}>
                <label>Email : </label> <br/>
                <input type='email' onChange={handleChange} required name='email'/> <br/>
                <label>Password : </label> <br/>
                <input type='password' onChange={handleChange} required name='password'/> <br/>
                <input type='submit' value="Login"/>
            </form> */}