import { configureStore } from '@reduxjs/toolkit';
import products from './slices/productSlice';
import productId from './slices/productIdSlice'
import cart from './slices/cartSlice'

export const store = configureStore({
  reducer: {  
    products,  
    productId,
    cart
  },
});

export default store;
