import { createSlice, PayloadAction, CaseReducer } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";

type TUserInfo = {
    loggged: boolean,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: boolean 
}

const userInfo:TUserInfo = {
    loggged: false,
    loading: 'idle',
    error:false,
}

export const mainSlice = createSlice({
    name: 'user',
    initialState: userInfo,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder.addCase(getUserAxiosRepo.pending, (state) => {
    //         state.loading = "pending"
    //     }),
    //     builder.addCase(getUserAxiosRepo.fulfilled, (state, action) => {
    //         state.loading = 'succeeded',
    //         state.data = action.payload
    //     }),
    //     builder.addCase(getUserAxiosRepo.rejected, (state) => {
    //         state.error = true,
    //         state.loading = 'failed'
    //     })
    // }
})

export default mainSlice.reducer