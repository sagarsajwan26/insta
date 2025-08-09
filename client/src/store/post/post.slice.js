import { createSlice } from "@reduxjs/toolkit"
import { getAllPosts, getUserPosts, likePost } from "./post.thunk"

const initialState={
    loginUserPosts:[],
    allPosts:null
    
}
const postSlice= createSlice({

    name:"post",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getUserPosts.fulfilled,(state,action)=>{
            // console.log(action.payload);
            state.loginUserPosts= action.payload.data
            
        })
        builder.addCase(getAllPosts.fulfilled, (state,action)=>{
            // console.log(action.payload);
            state.allPosts= action.payload.data
        })

        builder.addCase(likePost.fulfilled,(state,action)=>{
            console.log(action.payload);
            const index= state.allPosts.findIndex(post=>post._id ===action.payload.data._id 
            )
            console.log(index);
            
            if(state.allPosts[index].likes.includes(state.user.userData._id)){
                state.allPosts[index].likes.filter(id=> id!== state.user.userData._id )
            }{
                state.allPosts[index].likes.unshift(state.user.userData._id)
            }
        })

    }



})
export const {} = postSlice.actions
export default postSlice.reducer