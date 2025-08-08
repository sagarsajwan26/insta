import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'

const MenuSidebar = () => {
  const [showSetting, setShowSetting] = useState(false)

  const navlinks = [
    {
      name: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m-4 0h12" />
        </svg>
      ),
      to: '/',
    },
    {
      name: 'Search',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      to: '/search',
    },
    {
      name: 'Chats',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h14M3 6h18M3 14h10M21 21v-2a4 4 0 00-3-3.87" />
        </svg>
      ),
      to: '/chats',
    },
    {
      name: 'Notifications',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      to: '/notification',
    },
    {
      name: 'Upload Reel',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      to: '/upload',
    },
    {
      name: 'Profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20v-2c0-2.21 3.58-4 8-4s8 1.79 8 4v2" />
        </svg>
      ),
      to: '/profile',
    },
  ]

  const location = useLocation()

  return (
    <div className="bg-base-200 text-white h-screen w-16 lg:w-60 flex flex-col p-2 lg:p-4 overflow-y-auto border-r border-gray-700">
      
      {/* Logo */}
      <div className="mb-4 lg:mb-6 flex justify-center lg:justify-start">
        <img src="/InstaLogo.png" alt="Logo" className="block lg:hidden h-8 w-auto" />
        <img src="/logo.png" alt="Logo" className="hidden lg:block h-10 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2 lg:space-y-3">
        {navlinks.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className={`flex items-center justify-center lg:justify-start px-2 lg:px-3 py-2 lg:py-3 rounded-md transition-colors cursor-pointer 
              ${location.pathname === item.to ? 'bg-primary text-white font-semibold' : 'hover:bg-primary hover:text-white'}
            `}
            aria-current={location.pathname === item.to ? 'page' : undefined}
            title={item.name}
          >
            {item.icon}
            <span className="hidden lg:inline ml-3 font-semibold">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom settings */}
      <div className="mt-auto pt-3 lg:pt-4 border-t border-gray-400 relative">
        {showSetting && (
          <div className="absolute bottom-12 left-0 lg:left-auto lg:right-0 bg-zinc-800 p-3 lg:p-4 rounded-md shadow-lg w-48 lg:w-56 flex flex-col space-y-2 lg:space-y-3 z-20">
            <Link
              to="/setting"
              onClick={() => setShowSetting(false)}
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-primary cursor-pointer"
            >
              ⚙️ <span className="font-semibold text-white">Setting</span>
            </Link>
            <Link
              to="/saved"
              onClick={() => setShowSetting(false)}
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-primary cursor-pointer"
            >
              📑 <span className="font-semibold text-white">Saved</span>
            </Link>
            <button className="flex items-center gap-2 px-2 py-1 rounded hover:bg-primary cursor-pointer text-white">
              🚪 <span className="font-semibold">Logout</span>
            </button>
          </div>
        )}

        <button
          onClick={() => setShowSetting(!showSetting)}
          aria-label="Toggle settings menu"
          title="More"
          className="flex items-center justify-center lg:justify-start hover:bg-primary px-2 lg:px-3 py-2 lg:py-3 rounded-md transition-colors w-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="hidden lg:inline ml-3 font-semibold">More</span>
        </button>
      </div>
    </div>
  )
}

export default MenuSidebar
