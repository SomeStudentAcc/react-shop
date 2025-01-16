import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { clearCart, decrementCart, incrementCart } from '../redux/slices/cartSlice';

export default function CartItems({ item }) {
    const dispatch = useDispatch()

    const handleIncrement = (id)=>{
        dispatch(incrementCart(id))
    }
    const handleDecrement = (id)=>{
        dispatch(decrementCart(id))
    }
    const handleDelete = (id)=>{
        dispatch(clearCart(id))
    }
  return (
    <div className='bg-[#191919] w-full h-[130px] rounded-[8px] text-white flex items-center justify-between p-4 mt-4'>
      <div className='flex items-center gap-5'>
        <img className='w-[165px] h-[100px] rounded-[6px]' src={item.images[0]} alt="" />
        <div className='w-[230px]'>
          <h2 className='font-[600] text-[20px] truncate'>{item.title}</h2>
          <h3 className='font-[600] text-[16px]'>{item.category.name}</h3>
        </div>
      </div>
      <h2 className='font-[700] text-[25px]'>{item.price}$</h2>
      <div className='flex items-center gap-5'>
        <span onClick={()=> handleDecrement(item.id)}  className='flex items-center justify-center h-[35px] w-[35px] rounded-[6px] bg-[#576067] text-center text-[25px] font-[700]'>
          <FaMinus />
        </span>
        <p>{item.count}</p>
        <span onClick={()=> handleIncrement(item.id)} className='flex items-center justify-center h-[35px] w-[35px] rounded-[6px] bg-[#6C3EB8] text-center text-[25px] font-[700]'>
          <FaPlus />
        </span>
      </div>
      <h2 className='font-[700] text-[25px] text-[#6C3EB8]'>{item.price * item.count}$</h2>
      <h3 onClick={()=> handleDelete(item.id)} className='text-[28px] font-[700]'><MdDelete /></h3>
    </div>
  );
}
