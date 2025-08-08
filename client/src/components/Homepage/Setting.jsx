import React from 'react'
import SettingSidebar from './setting/SettingSidebar'
import { Outlet } from 'react-router'

const Setting = () => {
  return (
    <div className='w-full h-screen flex flex-col lg:flex-row' >
      <div className='lg:w-80 flex-shrink-0'>
        <SettingSidebar/>
      </div>
      <div className="flex-1 overflow-hidden">
        <Outlet/>
      </div>
    </div>
  )
}

export default Setting