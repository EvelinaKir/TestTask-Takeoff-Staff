import { createSlice, PayloadAction, CaseReducer } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";
import {userAuth} from '../functions/auth'
import {getContacts, sendContact, sendContactsChange, deleteContact} from '../functions/contacts'

type TUserInfo = {
    loggged: boolean,
    answer: {login: string, password: string, id: string | number} | null,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: boolean 
}

const userInfo:TUserInfo = {
    loggged: false,
    answer: null,
    loading: 'idle',
    error:false,
}

type TContacts = {
    answer:  any,
    data: any,
    loading: boolean,
    error: boolean,
    filtered: any 

}

const contactsInfo: TContacts = {
    answer: null,
    data: null,
    loading: false,
    error:false,
    filtered: null
}

export const mainSlice = createSlice({
    name: 'user',
    initialState: userInfo,
    reducers: {
        loggIn(state){
            state.loggged = true;
        },
        loggOut(state){
            state.loggged = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userAuth.pending, (state) => {
            state.loading = "pending"
        }),
        builder.addCase(userAuth.fulfilled, (state, action) => {
            state.loading = 'succeeded',
            state.answer = action.payload
        }),
        builder.addCase(userAuth.rejected, (state) => {
            state.error = true,
            state.loading = 'failed'
        })
    }
})

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInfo,
    reducers: {
        changeLocal (state, action) {
            state.data = action.payload
        },
        filterSeach (state, action){
            console.log('payloading')
            state.filtered = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getContacts.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(getContacts.fulfilled, (state, action) => {
            state.answer = action.payload,
            state.data = action.payload
            state.loading = false
        }),
        builder.addCase(getContacts.rejected, (state) => {
            state.error = true,
            state.loading = false
        }),
        builder.addCase(sendContact.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(sendContact.fulfilled, (state, action) => {
            state.answer = action.payload,
            state.loading = false
        }),
        builder.addCase(sendContact.rejected, (state) => {
            state.error = true,
            state.loading = false
        }),
        builder.addCase(sendContactsChange.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(sendContactsChange.fulfilled, (state, action) => {
            state.answer = action.payload,
            state.loading = false
        }),
        builder.addCase(sendContactsChange.rejected, (state) => {
            state.error = true,
            state.loading = false
        }),
        builder.addCase(deleteContact.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(deleteContact.fulfilled, (state, action) => {
            state.answer = action.payload,
            state.loading = false
        }),
        builder.addCase(deleteContact.rejected, (state) => {
            state.error = true,
            state.loading = false
        })
    }
})
