import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/slices/productSlice';

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.product);
    const filteredProducts = useSelector((state) => state.products.filteredProduct);
    const productStatus = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProduct());
        }
    }, [dispatch, productStatus]);

    if (productStatus === 'loading') return <div>Loading...</div>;
    if (productStatus === 'failed') return <div>Error: {error}</div>;

    const productsToDisplay = filteredProducts || products;

    // Calculate the current items to display based on pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productsToDisplay?.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(productsToDisplay?.length / itemsPerPage);

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className='grid grid-cols-4 gap-4'>
                {currentItems?.map(el => (
                    <ProductCard key={el.id} product={el} />
                ))}
            </div>
            <div className='flex justify-center mt-4'>
                {pageNumbers.length > 1 && pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => setCurrentPage(number)}
                        className={`px-4 py-2 mx-1 rounded ${currentPage === number ? 'bg-[#6C3EB8] text-white' : 'bg-gray-300 text-gray-700'}`}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}
