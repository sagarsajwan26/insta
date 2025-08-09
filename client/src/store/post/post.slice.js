import { createSlice } from "@reduxjs/toolkit"
import { getAllPosts, getUserPosts, likePost } from "./post.thunk"

const initialState={
    loginUserPosts:[],
    allPosts:null,
    countPost:0
    
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
            console.log(action.payload);
            
            state.allPosts= action.payload.data
        })

        builder.addCase(likePost.fulfilled,(state,action)=>{
            console.log(action.payload);
            const data= action.payload.data
            
            const index= state.allPosts.findIndex(post=> post._id === data.updatedPost._id )
            
            const post= state.allPosts[index]

            
            
            if(index!==-1){
                if(post.likes.includes(data.userId)){
                    post.likes= post.likes.filter(id=> id!== data.userId)                        
                }
                else{
                post.likes.push(data.userId)
                    
                }
            }
            // if(index !== -1){
            //     state.allPosts[index]= action.payload.updatedPost
            // }else{
            //     if(state.allPosts[index].likes.includes(action.payload.userId)){
            //         state.allPosts[index].likes.filter(id=> id!==  action.payload.userId)
            //     }else{
            //         state.allPosts[index].likes.unshift(action.payload.userId)
            //     }
            // }
          
        })

    }



})
export const {} = postSlice.actions
export default postSlice.reducer