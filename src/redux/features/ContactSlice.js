import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Check, X } from "tabler-icons-react";
const URL = 'https://papa-laravel-api.herokuapp.com/api'



export const fetchMessage = createAsyncThunk(
    'message/fetchMessage',
    async () => {
        try {
            const message = await axios.get(`${URL}/contact`)

            return message.data

        } catch (err) {
            return err.message
        }
    }
)

export const addMessage = createAsyncThunk(
    'message/addMessage',
    async ({ data, notification }) => {
        try {
            const message = await axios.post(`${URL}/contact`, data)
            notification.showNotification({
                title: 'Add',
                message: 'Message sending successfuly',
                icon: <Check />,
                color: 'teal',
            })
            return message.data

        } catch (err) {
            notification.showNotification({
                title: 'Error',
                message: 'Message sending error',
                icon: <X />,
                color: 'red',
            })
            return err.message
        }
    }
)

export const deleteMessage = createAsyncThunk(
    'message/deleteMessage',
    async ({ id, notification }) => {
        try {
            const products = await axios.delete(`${URL}/contact/${id}`)
            notification.showNotification({
                title: 'Delete',
                message: 'Message supprimer successfuly',
                icon: <Check />,
                color: 'teal',
            })
            return products.data

        } catch (err) {
            notification.showNotification({
                title: 'Error',
                message: 'Message deleted error',
                icon: <X />,
                color: 'red',
            })
            return err.message
        }
    }
)



export const contactSlice = createSlice({
    name: 'users',
    initialState: {
        messages: [],
        message: {},
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
        [fetchMessage.pending]: (state, { payload }) => {
            state.status = 'loading'
        },
        [fetchMessage.fulfilled]: (state, { payload }) => {
            state.status = 'succeeded'
            state.messages = payload
        },
        [fetchMessage.rejected]: (state, { payload }) => {
            state.status = 'failed'
            state.error = true
        },
        // End Fetch

        // Add Start
        [addMessage.pending]: (state, { payload }) => {
            state.status = 'loading'
        },
        [addMessage.fulfilled]: (state, { payload }) => {
            state.status = 'succeeded'
            state.messages.data.push(payload)
        },
        [addMessage.rejected]: (state, { payload }) => {
            state.status = 'failed'
            state.error = true
        },
        // End Add

        // Delete Start
        [deleteMessage.pending]: (state, { payload }) => {
            state.status = 'loading'
        },
        [deleteMessage.fulfilled]: (state, { payload }) => {
            state.status = 'succeeded'
            state.messages = state.users.data.filter((user) => user.id !== payload);
        },
        [deleteMessage.rejected]: (state, { payload }) => {
            state.status = 'failed'
            state.error = true
        },
        // End Delete
    }
})

export const selectAllMessage = state => state.message.messages.data

export const { getAllUsersData } = contactSlice.actions
export default contactSlice.reducer