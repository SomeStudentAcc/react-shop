import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCart({ product }) {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)} className="w-[250px] h-[300px] p-[2px] bg-[#212123] rounded-lg shadow-lg my-5">
      <img
        className="h-[180px] w-full object-cover rounded-md shadow-sm"
        src={product?.images[0]}
        alt={product?.title}
      />
      <h3 className="text-white text-[15px] max-w-[220px] mt-1 pl-[5px]">{product?.title}</h3>
      <p className="text-[14px] text-[#B8B8B8] font-medium pl-[5px]">{product?.category.name}</p>
      <h3 className="text-[#6C3EB8] text-[25px] font-bold pl-[5px]">{product?.price}$</h3>
    </div>
  );
}
