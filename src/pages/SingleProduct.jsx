import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../redux/slices/productIdSlice';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { cartAdd } from '../redux/slices/cartSlice';
import { fetchProduct } from '../redux/slices/productSlice';

export default function SingleProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.product);
    const productsStatus = useSelector((state) => state.products.status);
    const singleProduct = useSelector((state) => state.productId.productId);
    const productStatus = useSelector((state) => state.productId.status);
    const error = useSelector((state) => state.productId.error);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        if (productsStatus === 'idle' && (!products || products.length === 0)) {
            dispatch(fetchProduct());
        }
    }, [dispatch, productsStatus, products]);

    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (singleProduct && singleProduct.images.length > 0) {
            setMainImage(singleProduct.images[0]);
        }
    }, [singleProduct]);


    const handleCartAdd = ()=>{
        dispatch(cartAdd(singleProduct))
    }

    if (productStatus === 'loading') return <div>Loading...</div>;
    if (productStatus === 'failed') return <div>Error: {error}</div>;

    const filteredProducts = products?.filter(
        (product) =>
            singleProduct && product.category.name === singleProduct.category.name && product.id !== singleProduct.id
    );

    return (
        <div>
            <div className="bg-[#191919] w-full h-[423px] rounded-[6px] mt-6 p-4 flex overflow-hidden">
                <div className="w-[40%] flex items-center justify-center">
                    {mainImage && (
                        <img
                            src={mainImage}
                            alt="Main"
                            className="w-full h-full object-cover rounded-md"
                        />
                    )}
                </div>

                <div className="w-1/2 pl-4 flex">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col space-y-2">
                            {singleProduct?.images?.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-[700px] h-20 object-cover cursor-pointer rounded-md"
                                    onClick={() => setMainImage(img)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col ml-4">
                        <div>
                            <h2 className="text-white text-2xl font-bold mb-2">{singleProduct?.title}</h2>
                            <p className="text-white text-[25px] font-semibold mb-2">{singleProduct?.price}$</p>
                            <p className="text-gray-400 text-sm mb-4">{singleProduct?.description}</p>
                            <div className='flex gap-4'>
                                <button onClick={handleCartAdd} className='bg-[#6C3EB8] w-[145px] h-[45px] rounded-[6px] text-[16px] font-[700] text-white'>Add to cart</button>
                                <button className='bg-[#576067] w-[180px] h-[45px] rounded-[6px] text-[16px] font-[700] text-white'>Add to favorites</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center mt-[30px] font-extrabold text-[25px] text-white'>Related products</h2>
                <div className='grid grid-cols-4 gap-4'>
                    {filteredProducts?.map(el => <ProductCard key={el.id} product={el} />)}
                </div>
            </div>
        </div>
    );
}
