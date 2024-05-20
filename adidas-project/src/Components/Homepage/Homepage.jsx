import React from 'react'
import './Homepage.css'
// import FakeStoreAllProducts from '../FakeStoreAllProducts'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import AllProducts from '../AllProducts/AllProducts'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    {/* <FakeStoreAllProducts/> */}
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
    <AllProducts/>
    <Footer/>
    </>
  )
}

export default Homepage
