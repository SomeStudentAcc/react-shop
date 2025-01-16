import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    status: 'idle',
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartAdd(state, action) {
            const prod = { ...action.payload, count: 1 }
            const isAdded = state.cart.find(el => el.id == prod.id)
            if (!isAdded) {
                state.cart.push(prod)
            }
        },
        incrementCart(state, action) {
            const item = state.cart.find(el => el.id === action.payload);
            if (item) {
                item.count += 1;
            }
        },
        decrementCart(state, action) {
            const item = state.cart.find(el => el.id === action.payload);
            if (item && item.count > 1) {
                item.count -= 1;
            }
        },
        clearCart(state, action){
            const item = state.cart.find(el => el.id === action.payload);
            if (item) {
                state.cart = state.cart.filter(el=> el.id !== item.id)
            }
        }
    }
});

export const { cartAdd, incrementCart, decrementCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
