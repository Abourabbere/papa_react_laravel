import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Check, X } from "tabler-icons-react";

// api url
// const URL = 'http://localhost:5000/api'
// const URL = 'https://obscure-meadow-26349.herokuapp.com/api'
const URL = 'https://papa-laravel-api.herokuapp.com/api'



// delete Product
export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async ({ id, notification, element }) => {
        try {
            const products = await axios.delete(`${URL}/product/${id}`)
            notification.showNotification({
                title: 'Delete',
                message: 'Success',
                icon: <Check />,
                color: 'teal',
            });

            if (element.target.nodeName === 'button') {
                element.target.parentNode.parentNode.parentNode.remove()
            } else if (element.target.nodeName === 'svg') {
                element.target.parentNode.parentNode.parentNode.parentNode.remove()
            } else {
                element.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove()
            }
            return products.data
        } catch (err) {
            notification.showNotification({
                title: 'Delete',
                message: 'Failed 🤥',
                icon: <X />,
                color: 'red',
            });
            return err.message
        }
    }
);

// Edite Product
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({ id, data, notification }) => {
        try {
            const products = await axios.put(`${URL}/product/${id}`, data)
            notification.showNotification({
                title: 'Edit',
                message: 'Product edited successfuly',
                icon: <Check />,
                color: 'teal',
            })

            return products.data

        } catch (err) {
            notification.showNotification({
                title: 'Edit Error',
                message: 'Product edited error',
                icon: <X />,
                color: 'red',
            })
            return err.message
        }
    }
);

// Add Product
export const addProduct = createAsyncThunk(
    "product/addProduct",
    async ({ data, notification }) => {
        try {
            const products = await axios.post(`${URL}/product`, data)
            notification.showNotification({
                title: 'Add',
                message: 'Product edited successfuly',
                icon: <Check />,
                color: 'teal',
            })

            return products.data
        } catch (err) {
            notification.showNotification({
                title: 'Add Error',
                message: 'Product add error',
                icon: <X />,
                color: 'red',
            })

            return err.message
        }
    }
);

// Fetch Product
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const products = await axios.get(`${URL}/product`)
            return products.data
        } catch (err) {
            return err.message
        }
    }
)

// Fetch Product
export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async ({ id }) => {
        try {
            const products = await axios.get(`${URL}/product/${id}`)
            return products.data
        } catch (err) {
            return err.message
        }
    }
)



export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: {},
        status: null,
        error: false
    },
    reducers: {
        setProductsData: (state, { payload }) => {
            state.products = payload;
        },
        addNewProduct: (state, { payload }) => {
            state.status = 'succeded'
            state.products.push(payload)
        },
    },
    extraReducers: {
        // fetchs start
        [fetchProducts.pending]: (state, { payload }) => {
            state.status = 'loading'
        },
        [fetchProducts.fulfilled]: (state, { payload }) => {
            state.status = 'succeeded'
            state.products = payload
        },
        [fetchProducts.rejected]: (state, { payload }) => {
            state.status = 'failed'
            state.error = true
        },
        // End fetchs

        // fetch start
        [fetchProduct.pending]: (state, { payload }) => {
            state.status = 'loading'
        },
        [fetchProduct.fulfilled]: (state, { payload }) => {
            state.status = 'succeeded'
            state.product = payload
        },
        [fetchProduct.rejected]: (state, { payload }) => {
            state.status = 'failed'
            state.error = true
        },
        // End fetch

        // Add start
        [addProduct.pending]: (state, { payload }) => {
            state.status = 'loading'
        },
        [addProduct.fulfilled]: (state, { payload }) => {
            state.status = 'succeeded'
            state.products.push(payload)
        },
        [addProduct.rejected]: (state, { payload }) => {
            state.status = 'failed'
            state.error = true
        },
        // End add

        // Update start
        [updateProduct.pending]: (state, { payload }) => {
            state.status = 'loading'
        },
        [updateProduct.fulfilled]: (state, { payload }) => {
            state.status = 'succeeded'
            state.products = state.products.map((product) => product.id === payload.id ? payload : product);
        },
        [updateProduct.rejected]: (state, { payload }) => {
            state.status = 'failed'
            state.error = true
        },
        // End update

        // Delete Start
        [deleteProduct.pending]: (state, { payload }) => {
            state.status = 'loading'
        },
        [deleteProduct.fulfilled]: (state, { payload }) => {
            state.status = 'succeeded'
            state.products = state.products.filter((product) => product.id !== payload);
        },
        [deleteProduct.rejected]: (state, { payload }) => {
            state.status = 'failed'
            state.error = true
        },
        // End Delete
    }
})


export const selectAllProducts = state => state.products.products

export const getProductDeleteStatus = state => state.products.status
export const getProductDeleteErrror = state => state.products.error

export const getProductStatus = state => state.products.status
export const getProductErrror = state => state.products.error


export const { setProductsData, initialProduct, addNewProduct } = productsSlice.actions
export default productsSlice.reducer