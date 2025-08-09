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
    <div className="grid grid-cols-5 ">
      <div className="col-span-1 ">
        <MenuSidebar />
      </div>
    
      <main className="col-span-4">
        <Outlet />
      </main>
    </div>
  )
}

export default HomePage
