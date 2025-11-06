import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // payload - id
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        },
        incItem(state, action) {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decItem(state, action) {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity > 1 &&
                (item.quantity--,
                (item.totalPrice = item.quantity * item.unitPrice));
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const { addItem, deleteItem, incItem, decItem, clearCart } =
    cartSlice.actions;
export default cartSlice.reducer;

// use in the cartOverview section and components.
export const getTotalQuantity = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getTotalPrice = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
};

export const getCurrentQuantityByID = (id) => (state) =>
    state.cart.cart.find((item) => item.id === id) ?.quantity ?? 0 
