import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Check, X } from "tabler-icons-react";

// api url
// const URL = 'https://obscure-meadow-26349.herokuapp.com/api'
const URL = 'https://papa-laravel-api.herokuapp.com/api'

// delete Product
export const deleteUsers = createAsyncThunk(
    "user/deleteUsers",
    async ({ id, notification, element }) => {
        try {
            const user = await axios.delete(`${URL}/user/${id}`)
            notification.showNotification({
                title: 'Delete',
                message: 'User deleted Successfuly',
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
            return user.data
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

export const editeUsers = createAsyncThunk(
    'users/editeUsers',
    async ({ id, data, notification }) => {
        try {
            const products = await axios.put(`${URL}/user/${id}`, data)
            notification.showNotification({
                title: 'Edite',
                message: 'User edited Successfuly',
                icon: <Check />,
                color: 'teal',
            });
            return products.data

        } catch (err) {
            notification.showNotification({
                title: 'Error',
                message: 'Failed 🤥',
                icon: <X />,
                color: 'red',
            });
            return err.message
        }
    }
)

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        try {
            const users = await axios.get(`${URL}/user`)

            return users.data

        } catch (err) {
            return err.message
        }
    }
)




export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: null,
        error: false
    },
    reducers: {
        getAllUsersData: (state, { payload }) => {
            state.users = payload;
        }
    },
    extraReducers: {

        // Fetch Start
        [fetchUsers.pending]: (state, { payload }) => {
            state.status = 'loading'
        },
        [fetchUsers.fulfilled]: (state, { payload }) => {
            state.status = 'succeeded'
            state.users = payload
        },
        [fetchUsers.rejected]: (state, { payload }) => {
            state.status = 'failed'
            state.error = true
        },
        // End Fetch

        // Delete Start
        [deleteUsers.pending]: (state, { payload }) => {
            state.status = 'loading'
        },
        [deleteUsers.fulfilled]: (state, { payload }) => {
            state.status = 'succeeded'
            state.users = state.users.filter((user) => user.id !== payload);
        },
        [deleteUsers.rejected]: (state, { payload }) => {
            state.status = 'failed'
            state.error = true
        },
        // End Delete

        // Edite Start
        [editeUsers.pending]: (state, { payload }) => {
            state.status = 'loading'
        },
        [editeUsers.fulfilled]: (state, { payload }) => {
            state.status = 'succeeded'
            state.users = state.users.map((user) => user.id === payload.id ? payload : user);
        },
        [editeUsers.rejected]: (state, { payload }) => {
            state.status = 'failed'
            state.error = true
        },
        // End Edite
    }
})

export const sellectAllUsers = state => state.users.users
export const sellectAllUsersStatus = state => state.users.status

export const { getAllUsersData } = usersSlice.actions
export default usersSlice.reducer