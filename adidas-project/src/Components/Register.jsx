import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import './Register.css'

const Register = () => {

  const router = useNavigate();

    const [userData, setUserData] = useState({name : "", email : "", password : "", confirmpassword : ""})
      // userData.name
    // userData[name]
    //console.log(userData, "userData")

    const handleChange = (event) => {
        //console.log(event.name.value, event.target.name)
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmpassword) {
              // await calling backend one server to another server request, backend validation, data to store mongodb
              try {
                const response = {data: {success: true, message: "Registration Successfull"}}
                if(response.data.success) {
                  toast.success(response.data.message)
                  setUserData({name : "", email : "", password : "", confirmpassword : ""})
                  router('/login')
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
      <div className="register">
        <div className="register1">
            <div className="register2">
            <div className="reg-right">
                <img style={{width: "35%", height: "40%"}} src="https://account-frontends.adidas.com/account_account-portal/1.0.0-experimental.14/assets/adiclub-blue-desktop.e34c412f9253e8d5.svg"/>
                <h1>YOUR ADICLUB<br/> BENEFITS AWAIT</h1>
                <p>Get free shipping, discount vouchers and members only products when you’re in adiClub.</p>
                <h2>Log in or sign up (it’s free)</h2>
                <div className="reg-right1">
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
                <input type='text' name='name' onChange={handleChange} required placeholder='NAME*'/> <br/>    
                <input type='email' name='email' onChange={handleChange} required placeholder="EMAIL ADDRESS *"/> <br/>
                <input type='password' name='password' onChange={handleChange} required placeholder="PASSWORD *"/> <br/>
                <input type='confirmpassword' name='confirmpassword' onChange={handleChange} required placeholder='CONFIRMPASSWORD'/> <br/>
                <div className="reg-right2">
                    <input type="checkbox"/>
                    <p>
                        I would like to stay up to date with adidas. I agree to receive personalised marketing messages from adidas India Marketing Pvt. Ltd.</p>
                </div>
                <div className="reg-right3">Read more</div>
                <div className="reg-right2">
                    <input type="checkbox"/>
                    <p>I have read and accepted the Terms & Conditions, the adiClub Terms & Conditions and the adidas Privacy Policy.</p>
                </div>
                <div className="reg-right4">
                    <input type="button"/>
                    <p>
                        Keep me logged in. Applies to all options.</p>
                </div>
                <div className="reg-right3">More info</div>
                <input className='value1' type='submit' value="Register"/>
                </form>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Register




{/* <form onSubmit={handleSubmit}>
<label>Name : </label> <br/>
<input type='text' name='name' onChange={handleChange} required/> <br/>
<label>Email : </label> <br/>
<input type='email' name='email' onChange={handleChange} required/> <br/>
<label>Password : </label> <br/>
<input type='password' name='password' onChange={handleChange} required/> <br/>
<label>ConfirmPassword : </label> <br/>
<input type='password' name='confirmpassword' onChange={handleChange} required/> <br/>
<input  type='submit' value= "Register"/>
</form> */}

// { position: "top-right"}