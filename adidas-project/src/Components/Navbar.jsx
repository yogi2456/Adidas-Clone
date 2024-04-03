import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="navbar1">
            <div className="navbar2">
                <img style={{width: "30%", height: "80%"}} src="https://th.bing.com/th/id/OIP.6v0frLqWo2Oo-_bpbT22yAHaHa?pid=ImgDet&w=182&h=182&c=7&dpr=1.3"/>
            </div>
            <div className="navbar3">
                <a href="menspage.html"><p>MEN</p></a>
                <a href="womenspage.html"><p>WOMEN</p></a>
                <a href="kidspage.html"><p>KIDS</p></a>
                <p>SPORTS</p>
                <p>BRANDS</p>
                <p>LIFESTYLE</p>
                <p>OUTLET</p>
            </div>
            <div className="navbar4">
                <div className="navbar5">
                    <p>help</p>
                    <p>orders and returns</p>
                    <a href="register.html"><p>sign up</p></a>
                    <a href="login.html"><p>log in</p></a>
                </div>
                <div className="navbar6">
                    <div className="navbar7">
                        <div>
                            <input placeholder="Search"/>
                        </div>
                        <div>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div>
                        <a href="profile.html"><i class="fa-regular fa-user"></i></a>
                    </div>
                    <div>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div>
                        <a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
