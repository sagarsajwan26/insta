import React from 'react'
import SettingSidebar from './setting/SettingSidebar'
import { Outlet } from 'react-router'

const Setting = () => {
  return (
    <div className='w-full h-screen grid grid-cols-4' >
      <div className='col-span-1 '>
        <SettingSidebar/>
      </div>
    <div className="col-span-3 ">
        <Outlet/>
    </div>
    </div>
  )
}

export default Setting