import React from 'react'

const ReelPostMedia = ({media ,imageRef}) => {
  return (
    <>
       {    media.mediaType === 'image' ? (
                <img 
                ref={imageRef}
                  key={media._id}
                  src={media.mediaUrl}
                  alt='reel'
                  className='h-full max-h-[90vh] w-full flex-shrink-0 object-contain rounded'
                  draggable={false}
                />
              ) : (
                <video
                ref={imageRef}
                  key={media._id}
                  controls
                  className='h-full max-h-[90vh] w-full flex-shrink-0 object-contain rounded'
                  src={media.mediaUrl}
                />
              )}
    </>
  )
}

export default ReelPostMedia