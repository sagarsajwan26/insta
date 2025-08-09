import { createSlice } from "@reduxjs/toolkit"
import { addComment, deleteComment, editComment, getComments } from "./comment.thunk"

const initialState={
    comments:null,
    count:0,
    selectedCommentToUpdate:null
}
const commentSlice= createSlice({
    name:"post",
    initialState,
    reducers:{
        setSelectedCommentForUpdate:(state,action)=>{
           
            state.selectedCommentToUpdate= action.payload
            
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(getComments.fulfilled,(state,action)=>{
            // console.log(action.payload);
            state.comments= action.payload.comments 
            state.count= action.payload.count
            
        })

        builder.addCase(addComment.fulfilled,(state,action)=>{
            // console.log(action.payload);
       state.comments.unshift(action.payload.data.newComment)
            
            
                })
                builder.addCase(deleteComment.fulfilled,(state,action)=>{
                    // console.log(action.payload);
                    state.comments= state.comments.filter(comment=> comment._id !==action.payload._id)
                    
                })
                builder.addCase(editComment.fulfilled,(state,action)=>{
                    console.log(action.payload);
                    const index= state.comments.findIndex(comment=> comment._id === action.payload.data._id )
                    state.comments[index]= {
                        ...state.comments[index],
                        comment:action.payload.data.comment
                    }
                    
                })
             
    }

})
export const {setSelectedCommentForUpdate} = commentSlice.actions
export default commentSlice.reducer