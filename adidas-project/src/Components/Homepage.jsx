import React from 'react'
import './Homepage.css'
import Navbar from './Navbar'
import FakeStoreAllProducts from './FakeStoreAllProducts'
import Footer from './Footer'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <FakeStoreAllProducts/>
    <Footer/>
    </>
  )
}

export default Homepage
