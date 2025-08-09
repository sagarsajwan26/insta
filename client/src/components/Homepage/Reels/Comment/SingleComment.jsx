import React from 'react'
// If you want to use redux state, uncomment:
import { useSelector } from 'react-redux'

const SingleComment = ({comment}) => {
  const {userData} = useSelector(state => state.user)
console.log(comment);

 
  
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center p-4 rounded-xl bg-base-100 shadow-md border border-base-200 transition-all hover:shadow-lg">
      {/* Avatar */}
      <div className="flex-shrink-0 h-20 w-20 sm:h-[72px] sm:w-[72px] rounded-full overflow-hidden flex items-center justify-center bg-orange-300 border border-base-300">
        <img src="/avatar.webp" alt="User avatar" className="w-full h-full object-cover" />
      </div>

      {/* Comment Content */}
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-base-content">{comment.userId._id} {userData._id}</span>
         
        </div>
        <h2 className="text-base text-base-content whitespace-pre-wrap">
         {comment.comment}
        </h2>
      </div>


   {comment.userId._id === userData._id && (
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn btn-error btn-sm text-white">Delete</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SingleComment
 