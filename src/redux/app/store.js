import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../features/productSlice'
import usersReducer from '../features/usersSlice'
import userLogReducer from '../features/userLog'
import contactReducer from '../features/ContactSlice'

export const store = configureStore({
    reducer: {
        user: userLogReducer,
        products: ProductsReducer,
        users: usersReducer,
        message: contactReducer
    }
})