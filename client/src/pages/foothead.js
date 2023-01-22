import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/footer'
import Header from './header/header'

function Foothead() {
  return (
    <div>
        <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Foothead