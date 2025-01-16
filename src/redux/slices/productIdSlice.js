import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  productId: null,
  status: 'idle', 
  error: null,
};

export const fetchSingleProduct = createAsyncThunk('productId/fetchProduct', async (id) => {
  const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  return response.data;
});

const productIdSlice = createSlice({
  name: 'productId',
  initialState,
  reducers: {
    increment(state) {
        state.value++
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productId = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { increment } = productIdSlice.actions;
export default productIdSlice.reducer;
