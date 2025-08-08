import React, { useEffect } from 'react'
import MenuSidebar from '../components/Homepage/MenuSidebar'
import { Outlet } from 'react-router'
import { useDispatch } from 'react-redux'
import { getAllPosts } from '../store/post/post.thunk'

function HomePage() {
const dispatch= useDispatch()
useEffect(()=>{
  dispatch(getAllPosts())
},[])

  return (
    <div className="flex h-screen">
      <div className="flex-shrink-0">
        <MenuSidebar />
      </div>
    
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  )
}

export default HomePage
