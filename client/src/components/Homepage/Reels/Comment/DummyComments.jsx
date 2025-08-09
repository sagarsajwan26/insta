import React from 'react'

const DummyComments = () => {
  return (
    <div className="space-y-4 p-4">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex items-start space-x-3 animate-pulse">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-gray-300 rounded w-20"></div>
            <div className="h-3 bg-gray-300 rounded w-full"></div>
            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DummyComments