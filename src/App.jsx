import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Footer from './components/Footer';

export default function App() {

  return (
    <div className=' flex justify-center items-center'>
        <div className='max-w-[80%] flex-grow '>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </div>
    </div>
  )
}
