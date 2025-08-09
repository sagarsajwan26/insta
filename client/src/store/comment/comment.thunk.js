import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

export const getComments= createAsyncThunk('/post/getComments',async(id,{rejectWithValue})=>{
  const token = localStorage.getItem('accessToken')
  try {
    const res= await axiosInstance.get(`/comment/getComments/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    return res.data.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})