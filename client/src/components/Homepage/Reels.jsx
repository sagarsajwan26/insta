import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import ReelsPosts from './Reels/ReelsPosts'
const Reels = () => {
  const icons = [1, 2, 3, 4, 5]
  const { allPosts } = useSelector(state => state.post)
  const navigate = useNavigate()

  if (!allPosts) {
    return <div className='text-white text-center py-10'>Loading...</div>
  }

  if (allPosts.length === 0) {
    return (
      <div className='text-white text-center py-10'>NO Posts available</div>
    )
  }
  return (
    <div className='h-screen w-full flex flex-col items-center gap-4 lg:gap-6 overflow-y-scroll py-3 lg:py-5 bg-black'>
      {allPosts.map(post => (
      <ReelsPosts post={post} key={post._id} />
      ))}
    </div>
  )
}

export default Reels
