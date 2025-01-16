import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='bg-[#191919] w-full h-[80px] rounded-[8px] text-white flex items-center justify-between p-4 mt-4'>
        <h2 className='text-white text-xl font-bold'>
          <span className='text-[#6C3EB8]'>$</span>TAFF
        </h2>
        <div className='flex justify-center items-center text-[30px] gap-4'>
            <FaInstagram/>
            <FaTelegram/>
            <FaFacebook/>
        </div>
    </div>
  )
}
