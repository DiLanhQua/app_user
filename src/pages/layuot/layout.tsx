import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Home/header'
import Footer from '../Home/footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>

  )
}

export default Layout
