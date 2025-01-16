import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../redux/slices/productSlice';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState('All');
    const dispatch = useDispatch();

    const handleFilter = (categoryName) => {
        setActiveCategory(categoryName);  
        dispatch(filter(categoryName));
    };

    return (
        <div className='w-[304px] h-[423px] rounded-[6px] bg-[#191919] mt-6'>
            <h2 className='text-white text-[20px] font-bold p-5'>Categories</h2>
            <ul className='pl-5'>
                {['All', 'Clothes', 'Shoes', 'Furniture', 'Electronics', 'Miscellaneous'].map(category => (
                    <li 
                        key={category}
                        className={`text-[17px] cursor-pointer ${activeCategory === category ? 'text-[#8B57C6] font-bold' : 'text-[#576067] hover:text-[#8B57C6]'}`} 
                        onClick={() => handleFilter(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}
