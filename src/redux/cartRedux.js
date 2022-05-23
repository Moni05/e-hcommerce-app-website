import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getCartStart: (state) => {
            state.isFetching= true;
        },
        getCartSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
            state.error = false;
        },
        getCartFailure: (state) => {
            state.isFetching= false;
            state.error = true;
        },
        addProductStart: (state) => {
            state.isFetching = true;
        },
        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload);
            state.error = false;
        },
        addProductFailure: (state) => {
            state.isFetching= false;
            state.error = true;
        }
    }
})

export const { getCartStart, getCartSuccess, getCartFailure, addProductStart,
addProductSuccess, addProductFailure } = cartSlice.actions;
export default cartSlice.reducer;