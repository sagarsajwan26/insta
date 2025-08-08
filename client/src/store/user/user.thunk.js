import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

export const loginThunk= createAsyncThunk('/user/login',async(data,{rejectWithValue})=>{

    
    try {
        const res= await axiosInstance.post('/users/userLogin',data)
        return res.data
        
    } catch (error) {
      return rejectWithValue(error.response.data)
       
    }

})



export const signupThunk= createAsyncThunk('/user/signup',async(data,{rejectWithValue})=>{

    try {
        const res= await axiosInstance.post('/users/userSignup',data)
        return res.data
        
    } catch (error) {
       return rejectWithValue(error.response.data)
       
    }

})

export const logoutThunk = createAsyncThunk('/user/logout',async(_,{rejectWithValue})=>{
const authToken= localStorage.getItem('accessToken')
try {
    const res= await axiosInstance.get('/users/logout')
} catch (error) {
    console.log(error);
    
}
})

export const getSearchUsers =  createAsyncThunk('/user/searchUsers',async(user,{rejectWithValue})=>{

    const token= localStorage.getItem('accessToken')

    try {
        const res= await axiosInstance.get(`/users/searchUser?username=${user}`,{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        return res.data
        
    } catch (error) {
        console.log(error);
        
        
    }


})

export const UpdateProfilePic= createAsyncThunk('/user/updateProfilePic',async(file,{rejectWithValue})=>{
    const token = localStorage.getItem('accessToken')
    try {
        console.log(file);
        
    const res= await axiosInstance.put('/users/updateProfilePic',file,{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })

    
return res.data    
    } catch (error) {
        
        return rejectWithValue(error.response)
        
    }
})

export const updataUserInfo= createAsyncThunk('/users/updateUserInfo',async(data,{rejectWithValue})=>{
    const token = localStorage.getItem('accessToken')
    if(!token) return rejectWithValue('no token')
        try {
            const res= await axiosInstance.put('/users/updateUser',data,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            })
            return res.data 
        } catch (error) {   
            
            console.log(error);
            
        }
})


// export const getUserProfile= createAsyncThunk("/user/getProfile",async(_,{rejectWithValue})=>{
// const token =localStorage.getItem('accessToken') 
//     try {
//         const res= await axiosInstance.get('/users/getProfile',{
//            headers:{
//             'Authorization':`Bearer ${token}`
//            }
//         })
//         console.log(res);
//         return res.data
        
        
//     } catch (error) {
//         console.log(error);
        
//     }
// })