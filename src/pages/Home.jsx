import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import Sale from '../components/Sale'
import ProductCart from '../components/ProductCard'
import axios from 'axios';
import ProductList from '../components/ProductList';

export default function Home() {

  return (
    <div>
      <div className='flex gap-4 mb-5'>
        <Categories />
        <Sale />
      </div>
      <h2 className='text-center mt-[30px] font-extrabold text-[25px] text-white'>All products</h2>
      <ProductList/>
    </div>
  )
}
