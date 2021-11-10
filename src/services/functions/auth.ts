import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    headers: {
        "Content-Type": "application/json",

      },
    });

export const userAuth = (login: string, password: string) =>  createAsyncThunk(
    'user/userAuth',
    async () => {
        const res = await instance.post('',{
            body: JSON.stringify({
                login: login,
                password: password
            })
        })
    }
)

