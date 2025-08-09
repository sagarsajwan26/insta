import React from 'react'
import { useSelector } from 'react-redux'

const SingleComment = ({ comment }) => {
  const { userData } = useSelector(state => state.user)

  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center p-4 rounded-xl bg-base-100 shadow-md border border-base-200 hover:shadow-lg transition">
      <div className="flex-shrink-0 h-20 w-20 sm:h-[72px] sm:w-[72px] rounded-full overflow-hidden flex items-center justify-center bg-orange-300 border border-base-300">
        <img
          src={comment?.userId?.avatarUrl ? comment.userId.avatarUrl : "/avatar.webp"}
          alt="User avatar"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-base-content">{comment.userId.username}</span>
        </div>
        <p className="text-base text-base-content whitespace-pre-wrap">
          {comment.comment}
        </p>
      </div>

      {comment.userId._id === userData._id && (
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 space-y-1">
            <li>
              <button className="btn btn-secondary btn-sm w-full text-white">Edit</button>
            </li>
            <li>
              <button className="btn btn-error btn-sm w-full text-white">Delete</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SingleComment
