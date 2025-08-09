import React from 'react'
// If you want to use redux state, uncomment:
// import { useSelector } from 'react-redux'

const SingleComment = () => {
  // const {userData} = useSelector(state => state.user)
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center p-4 rounded-xl bg-base-100 shadow-md border border-base-200 transition-all hover:shadow-lg">
      {/* Avatar */}
      <div className="flex-shrink-0 h-20 w-20 sm:h-[72px] sm:w-[72px] rounded-full overflow-hidden flex items-center justify-center bg-orange-300 border border-base-300">
        <img src="/avatar.webp" alt="User avatar" className="w-full h-full object-cover" />
      </div>

      {/* Comment Content */}
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-base-content">Rahul</span>
          {/* You can add a timestamp or badge here if you want */}
        </div>
        <h2 className="text-base text-base-content whitespace-pre-wrap">
          Lorem ipsum dolor
        </h2>
      </div>

      {/* Actions */}
      <div className="flex flex-row sm:flex-col gap-1 mt-2 sm:mt-0 ml-auto">
        <button
          className="btn btn-xs btn-error btn-outline rounded-md px-4"
          aria-label="Delete comment"
        >
          Delete
        </button>
        <button
          className="btn btn-xs btn-primary btn-outline rounded-md px-4"
          aria-label="Edit comment"
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default SingleComment
 