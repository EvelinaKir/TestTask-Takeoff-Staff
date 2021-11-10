import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../axios";

export const getContacts = createAsyncThunk("user/getContacts", async () => {
  const res = await instance.get("http://localhost:4000/contacts");
  const result = await res.data;
  return result;
});
export const sendContact = createAsyncThunk(
  "user/sendContact",
  async (arg:{name: string, phone: string, email: string}) => {
    const res = await instance.post("http://localhost:4000/contacts", {
      contact: arg,
    });
    const result = await res.data;
    return result;
  }
);

export const sendContactsChange = createAsyncThunk(
  "user/sendContactsChange",
  async (arg:any) => {
    const res = await instance.patch(`http://localhost:4000/contacts/${arg.id}`, {
      contact: arg.contact,
    });
    const result = await res.data;
    return result;
  }
);

export const deleteContact = createAsyncThunk(
  "user/deleteContact",
  async (arg:any) => {
    const res = await instance.delete(`http://localhost:4000/contacts/${arg}`)
    const firstRes = await res
    const secondRes = await instance.get("http://localhost:4000/contacts"); 
    const result = await secondRes;
    return result;
  }
);

