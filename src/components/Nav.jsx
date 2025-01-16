import React, { useState } from 'react';
import { FaRegHeart, FaSearch, FaUser } from 'react-icons/fa';
import { IoBag } from 'react-icons/io5';
import { TbXboxX } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className='flex justify-between items-center p-4'>
      <div className='text-xl font-bold'>
        <h2 onClick={() => navigate('/')} className='text-white'>
          <span className='text-[#6C3EB8]'>$</span>TAFF
        </h2>
      </div>
      <div className='flex items-center border rounded-full px-4'>
        <FaSearch className='text-white' />
        <input
          type="text"
          placeholder="Search for anything"
          className='ml-2 p-2 outline-none w-full'
        />
      </div>
      <div className='flex gap-4 text-xl'>
        <span onClick={toggleUserMenu} className='relative'>
          <FaUser className='text-white cursor-pointer' />
        </span>
        <span className='relative' onClick={() => navigate('/cart')}>
          <IoBag className='text-white' />
          {cart.length > 0 && (
            <span className='absolute top-[10px] left-[12px] h-5 w-5 bg-slate-600 text-white text-[15px] rounded-full flex items-center justify-center'>
              {cart.length}
            </span>
          )}
        </span>
      </div>

      {/* User Dropdown */}
      {isUserMenuOpen && (
        <div className='fixed flex  top-0 right-0 w-full h-full bg-transparent shadow-lg z-50'>
          <div onClick={toggleUserMenu} className='w-[75%]  bg-black bg-opacity-50'>
          </div>
          <div className='w-[25%] bg-[#191919] relative'>
            <h3 className='text-white text-[20px] font-[700] text-center pt-10 pb-8'>Register</h3>
            <TbXboxX onClick={toggleUserMenu} className='text-white text-[25px] absolute top-[42px] right-[45px]'/>
            <div className='flex flex-col gap-3 items-center'>
              <input className='w-[272px] h-[40px] rounded-[8px] bg-[#212123] text-white pl-4' type="text" placeholder='Enter email'/>
              <input className='w-[272px] h-[40px] rounded-[8px] bg-[#212123] text-white pl-4' type="text" placeholder='Enter password' />
              <button className='w-[272px] h-[40px] rounded-[8px] bg-[#6C3EB8] text-white pl-4'>Create account</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
