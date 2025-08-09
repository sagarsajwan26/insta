import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DummyComments from './DummyComments'
import SingleComment from './SingleComment'
import { addComment, editComment } from '../../../../store/comment/comment.thunk'
import { setSelectedCommentForUpdate } from '../../../../store/comment/comment.slice'

const Comment = ({ setShowComments, postId }) => {
  const { selectedCommentToUpdate, comments } = useSelector(state => state.comment)
  const dispatch = useDispatch()

  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [addOrUpdateState, setAddOrUpdateState] = useState(true)

  useEffect(() => {
    setComment(selectedCommentToUpdate?.comment || '')
    setAddOrUpdateState(!selectedCommentToUpdate)
  }, [selectedCommentToUpdate])

  const handleComment = async (e) => {
    e.preventDefault()
    if (!comment.trim()) return
    setLoading(true)
    if (addOrUpdateState) {
      dispatch(addComment({ postId, comment })).then(() => {
        setLoading(false)
        setComment('')
      })
    } else {
      dispatch(editComment({ id: selectedCommentToUpdate._id, comment })).then(() => {
        setLoading(false)
        setComment('')
        setAddOrUpdateState(true)
        dispatch(setSelectedCommentForUpdate(null))
      })
    }
  }

  return (
    <div className="absolute bottom-0 left-0 w-full h-[70vh] bg-base-200 rounded-t-xl shadow-lg flex flex-col z-30">
      <div className="flex items-center justify-center py-3 border-b border-base-300 relative">
        <button
          onClick={() => setShowComments(false)}
          className="absolute left-4 p-2 rounded-full hover:bg-base-300 transition flex items-center justify-center"
          aria-label="Close comments"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="font-semibold text-lg">Comments</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {!comments ? (
          <DummyComments />
        ) : comments.length <= 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-base-content/70">
            <p className="text-center font-medium">No Comments yet</p>
            <p className="text-sm">Be the first to add one!</p>
          </div>
        ) : (
          comments.map((comment, idx) => (
            <SingleComment key={idx} comment={comment} setAddOrUpdateState={setAddOrUpdateState} />
          ))
        )}
      </div>

      <form onSubmit={handleComment} className="border-t border-base-300 p-3 flex items-center gap-2 relative">
        <input
          value={comment}
          onChange={e => setComment(e.target.value)}
          type="text"
          placeholder="Add a comment..."
          className="input input-bordered w-full input-sm"
          aria-label="Add a comment"
        />
        {!addOrUpdateState && (
          <button
            type="button"
            onClick={() => {
              setAddOrUpdateState(true)
              setComment('')
              dispatch(setSelectedCommentForUpdate(null))
            }}
            className="btn btn-ghost text-error btn-sm absolute right-5 top-[-20%] hover:bg-white/60 "
            aria-label="Cancel editing comment"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary"
          aria-label={addOrUpdateState ? "Add comment" : "Update comment"}
        >
          {addOrUpdateState ? "Add Comment" : "Update Comment"}
        </button>
      </form>
    </div>
  )
}

export default Comment
