import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../components/CartItems';

export default function Cart() {
    const cartItems = useSelector((state)=> state.cart.cart)
    if(cartItems.length === 0){
        return <h1 className='text-white font-[700] text-[25px] text-center mt-[100px]'>Your cart is empty</h1>
        
    }
    
  return (
    <div>
        <h1 className='text-white font-[700] text-[25px]'>Your cart</h1>
        {cartItems.map(el=> <CartItems key={el.id} item={el}/>)}
    </div>
  )
}
