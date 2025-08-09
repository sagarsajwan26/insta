import { createSlice } from "@reduxjs/toolkit"
import { addComment, getComments } from "./comment.thunk"

const initialState={
    comments:null,
    count:0

}
const commentSlice= createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getComments.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.comments= action.payload.comments 
            state.count= action.payload.count
            
        })

        builder.addCase(addComment.fulfilled,(state,action)=>{
            console.log(action.payload);
            
                })
    }

})
export const {} = commentSlice.actions
export default commentSlice.reducer