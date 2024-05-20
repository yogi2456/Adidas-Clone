import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./PageNotFound.css";

const PageNotFound = () => {

    const router = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            router("/")
        }, 3000)
    })
  return (
    <div className='page'>
      <h1>Page Not Found</h1>
      <p>redirecting your page in homepage in 3sec....</p>
    </div>
  )
}

export default PageNotFound
