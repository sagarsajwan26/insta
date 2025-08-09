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


export const addComment= createAsyncThunk('/post/addComment',async(data, {rejectWithValue})=>{
  const token = localStorage.getItem('accessToken')
  try {
    const res= await axiosInstance.post(`/comment/addComment/${data.postId}`,{comment:data.comment},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    return res.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

export const deleteComment= createAsyncThunk('/post/deleteComment',async(id, {rejectWithValue})=>{

  const token = localStorage.getItem('accessToken')
  try {
    const res= await axiosInstance.delete(`/comment/deleteComment/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    // console.log(res);
    
    return res.data.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

export const editComment= createAsyncThunk('/user/updateComment',async(data,{rejectWithValue})=>{
  const token=  localStorage.getItem('accessToken')
  if(!token) return rejectWithValue('No token found')
    try {
      const res= await axiosInstance.put(`/comment/updateComment/${data.id}`,{comment:data.comment},{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})