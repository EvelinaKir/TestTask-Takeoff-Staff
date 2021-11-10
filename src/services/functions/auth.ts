import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../axios";



export const userAuth = createAsyncThunk(
    'user/userAuth',
    async () => {
        const res = await instance.get('http://localhost:4000/user',{
        })
        const result = res.data ? res.data : res.status
        return result
    }

)
