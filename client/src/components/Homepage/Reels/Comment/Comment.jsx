import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DummyComments from './DummyComments'
import SingleComment from './SingleComment'
import { useState } from 'react'
import { addComment } from '../../../../store/comment/comment.thunk'


const Comment = ({ setShowComments ,postId}) => {
  console.log(postId);
  
  
  const { comments } = useSelector(state => state.comment)
  const [comment, setComment] = useState('')
  const [loading, setLoading]= useState(false)
  const dispatch= useDispatch()  
  const [addOrUpdateState, setAddOrUpdateState]= useState(true)
  const handleComment= async(e)=>{
    e.preventDefault()
    setLoading(true)
    if(addOrUpdateState){
      dispatch(addComment({postId,comment})).then((res)=>{
        console.log(res);
        
        setLoading(false)
      })
      
    }else {
      console.log('hi');
      loading(false)
      
    }

  }


  return (
    <div className="absolute bottom-0 left-0 w-full h-[70vh] bg-base-200 rounded-t-xl shadow-lg flex flex-col z-30">
      <div className="flex items-center justify-center py-3 border-b border-base-300 relative">
        <button
          onClick={() => setShowComments(false)}
          className="absolute left-4 p-1 rounded-full hover:bg-base-300 transition"
          aria-label="Close comments"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="stroke-current"
          >
            <polyline
              fill="none"
              strokeWidth="2"
              points="7.086 3.174 17.086 13.174 7.086 23.174"
              transform="scale(1 -1) rotate(-89 -1.32 0)"
            />
          </svg>
        </button>
        <h2 className="font-semibold text-lg">Comments</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {!comments ? (
          <DummyComments />
        ) : comments.length <=0 ? (
          <div className="flex flex-col items-center justify-center h-full text-base-content/70">
            <p className="text-center font-medium">No Comments yet</p>
            <p className="text-sm">Be the first to add one!</p>
          </div>
        ) : (
          comments.map((comment, idx) => (
            <SingleComment key={idx} comment={comment} />
          ))
        )}
      </div>

      <form onSubmit={handleComment} className="border-t border-base-300 p-3 flex gap-2">
        <input
        value={comment}
        onChange={(e)=> setComment(e.target.value)}
          type="text"
          placeholder="Add a comment..."
          className="input input-bordered w-full input-sm"
        />
        <button disabled={loading} type="submit" className='btn btn-primary'>
         {addOrUpdateState ? "add Comment":"Update Comment"}
        </button>
      </form>
    </div>
  )
}

export default Comment
