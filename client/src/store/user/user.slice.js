import { createSlice } from "@reduxjs/toolkit"
import {  followUnfollow, getOtherUserProfile, getSearchUsers, loginThunk, signupThunk, updataUserInfo, UpdateProfilePic } from "./user.thunk"

const initialState={
    isAuthenticated:false,
    userData:null,
    searchUsers:null,
    SearchUserProfile:null,

}


const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

builder.addCase(loginThunk.pending,(state,action)=>{
state.isAuthenticated= false
})
builder.addCase(loginThunk.fulfilled,(state,action)=>{
if(action.payload.status==200){
    state.isAuthenticated= true
    state.userData= action.payload.data.userData
}
})
builder.addCase(loginThunk.rejected,(state,action)=>{
state.isAuthenticated=false 


})


builder.addCase(getSearchUsers.fulfilled,(state,action)=>{
//  console.log(action.payload);
 state.searchUsers= action.payload.data
 
})
builder.addCase(UpdateProfilePic.fulfilled,(state,action)=>{
    // console.log(action.payload);
    state.userData={...state.userData, avatarUrl:action.payload.data.avatarUrl}
    
    
})

builder.addCase(updataUserInfo.fulfilled,(state, action)=>{
//   console.log(action.payload);
  
    state.userData=action.payload.data
})

builder.addCase(getOtherUserProfile.fulfilled, (state,action)=>{
    state.SearchUserProfile= action.payload.data

})

builder.addCase(followUnfollow.fulfilled,(state, action)=>{
    console.log(action.payload);
    if(action.payload.message==='unfollowed'){
state.SearchUserProfile.followers= state.SearchUserProfile.followers.filter((id)=> id!== state.userData._id)

    }else {
        state.SearchUserProfile.followers.unshift(state.userData._id)
    }
    
    // state.SearchUserProfile= action.payload.data
})

    }



})

export const {} = userSlice.actions
export default userSlice.reducer