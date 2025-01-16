import React, { useEffect, useState } from 'react';
import nout from '/img/nout.png';
import axios from 'axios';

export default function Sale() {

    return (
        <div className='bg-[#191919] w-[950px] h-[423px] rounded-[6px] mt-6 p-4 relative overflow-hidden'>
            <h2 className='text-[100px] text-[#616e7425] font-extrabold m-0 p-0 leading-none'>
                BIG SALE 20%
            </h2>
            <div className='mt-4'>
                <h3 className='text-lg text-[#616E74]'>The bestseller of 2024</h3>
                <h2 className='text-[34px] font-bold text-[#F6F6F7] max-w-[435px] uppercase'>
                LENNON r2d2 <br /> with NVIDIA 5090 TI
                </h2>
            </div>
            <button className='w-[125px] h-[38px] rounded-[6px] bg-[#6C3EB8] mt-4'>
                Shop now
            </button>
            <img 
                className='absolute w-[462px] h-[359px] top-[71px] left-[265px] z-10' 
                src={nout} 
                alt="Laptop" 
            />
        </div>
    );
}
