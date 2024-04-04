'use client'
import React, { useEffect } from 'react'
import Navbar from './(main)/navbar'

const template = ({children}) => {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    
  }, [])
  


  return (
    <div>
        
        {children}
        </div>
  )
}

export default template