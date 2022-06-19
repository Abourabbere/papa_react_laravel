import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const URL = 'https://obscure-meadow-26349.herokuapp.com/api'
const URL = 'https://papa-laravel-api.herokuapp.com/api/auth'

export const editeUser = createAsyncThunk(
    'user/editeUser',
    async ({ id, data }) => {
        try {
            const products = await axios.put(`${URL}/user/${id}`, data)

            return products.data

        } catch (err) {
            return err.message
        }
    }
)



export const userLogSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: null,
        error: false
    },
    reducers: {
        getUserData: (state, { payload }) => {
            state.status = 'succeded'
            state.user = payload
        }
    },
    extraReducers: {
        [editeUser.pending]: (state, action) => {
            state.status = 'loading'
        },
        [editeUser.fulfilled]: (state, action) => {
            state.status = 'succeded'
            state.user = action.payload
        },
        [editeUser.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = true
        },
    }
})


export const selectUser = state => state.user.user
export const editUserStatus = state => state.user.status

export const { getUserData } = userLogSlice.actions
export default userLogSlice.reducer