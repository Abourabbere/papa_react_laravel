import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from '@mantine/notifications';

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingIndex = state.cartItems.findIndex(
                (item) => item._id === action.payload._id
            );

            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
                };
                showNotification({
                    title: 'Increased',
                    message: 'Increased product quantity',
                    color: 'orange'
                })
            } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProductItem);
                showNotification({
                    title: 'Added',
                    message: 'Product added to cart',
                    color: 'teal'
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;

                showNotification({
                    title: 'Decreased',
                    message: 'Decreased product quantity',
                    color: 'teal'
                })
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );

                state.cartItems = nextCartItems;

                showNotification({
                    title: 'Remove',
                    message: 'Product removed from cart',
                    color: 'teal'
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
            state.cartItems.map((cartItem) => {
                if (cartItem._id === action.payload._id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item._id !== cartItem._id
                    );

                    state.cartItems = nextCartItems;

                    showNotification({
                        title: 'Remove',
                        message: 'Product removed from cart',
                        color: 'teal'
                    })
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return state;
            });
        },
        getTotals: (state, action) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        clearCart: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            showNotification({
                title: 'Clear',
                message: 'Cart cleared',
                color: 'teal'
            })
        },
    },
})


export const selectAllCart = state => state.cart.cartItems
export const totalPanier = state => state.cart.cartTotalQuantity

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSlice.actions;

export default cartSlice.reducer;