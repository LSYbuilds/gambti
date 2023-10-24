import React from 'react'
import { MainStyleWrap } from '../css/MainStyle'
import Header from './Header';
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <MainStyleWrap>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </MainStyleWrap>
  )
}

export default Layout
