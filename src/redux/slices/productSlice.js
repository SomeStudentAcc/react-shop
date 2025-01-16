import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  product: null,
  filteredProduct: null,
  status: 'idle', 
  error: null,
};

export const fetchProduct = createAsyncThunk('products/fetchProduct', async () => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/products');
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filter(state, action) {
      if (action.payload === 'All') {
        state.filteredProduct = state.product;
    } else {
        state.filteredProduct = state.product.filter(el => el.category.name === action.payload);
    }
  } 
    },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { filter } = productSlice.actions;
export default productSlice.reducer;
