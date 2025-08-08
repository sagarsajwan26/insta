import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'

const ReelsPosts = ({post}) => {
      const [viewFullCaption, setViewFullCaption] = useState(false)
      const navigate= useNavigate()

  const containerRef = useRef()
  const imageRef = useRef()

  const scrollLeft = () => {
    const container = containerRef.current

    if (container) {
      console.log(imageRef.current)

      container.scrollBy({
        left: -imageRef.current.clientWidth,
        behavior: 'smooth'
      })
    }
  }
  const scrollRight = () => {
    const container = containerRef.current
    if (container) {
      container.scrollBy({
        left: imageRef.current.clientWidth,
        behavior: 'smooth'
      })
    }
  }
  return (
    <>  <div
          key={post._id}
          className='h-[96vh] sm:h-[96vh] min-h-[96vh] w-full sm:w-[70vw] lg:w-[45vw] flex gap-2 lg:gap-6 overflow-hidden relative rounded-lg shadow-lg '
         
        >
          <button
            onClick={scrollLeft}
            className='hidden sm:inline z-30 text-white bg-black/50 px-3 py-1 rounded-l-lg text-sm lg:text-base self-center hover:bg-black/70 transition'
            aria-label='Scroll Left'
          >
            &#8592;
          </button>

          <div
       ref={containerRef}   
            className='post-scrollbar h-full w-full relative z-0 flex items-center overflow-x-auto  flex-nowrap gap-4'
          >
           {post.media.map((media, idx) =>
  media.mediaType === 'image' ? (
    <img
      key={media._id}
      ref={idx === 0 ? imageRef : null}
      src={media.mediaUrl}
      alt="reel"
      className="h-full max-h-[90vh] w-auto flex-shrink-0 object-contain rounded"
      draggable={false}
    />
  ) : (
    <video
      key={media._id}
      ref={idx === 0 ? imageRef : null}
      controls
      className="h-full max-h-[90vh] w-auto flex-shrink-0 object-contain rounded"
      src={media.mediaUrl}
    />
  )
)}


            <span
              onClick={() => navigate(`/Usersprofile/${post.userId._id}`)}
              className='absolute top-4 left-12 font-semibold text-white text-xs sm:text-sm md:text-base z-30 select-none'
            >
              {post.userId.username}
            </span>
            <span className='absolute top-4 right-12 font-semibold text-white text-xs sm:text-sm md:text-base z-30 select-none'>
              <button>Follow</button>
            </span>
            <span
              onClick={() => setViewFullCaption(!viewFullCaption)}
              className='absolute bottom-4 left-12 font-semibold text-white text-xs sm:text-sm md:text-base z-30 select-none w-[50%]'
            >
              {viewFullCaption
                ? post.caption
                : post.caption.slice(0, 30) + '...'}
            </span>
            <span className='absolute bottom-4 right-12 flex flex-col z-30 select-none'>
              <span className='hover:bg-white/40 flex items-center justify-center p-2 rounded-full'>
                <svg
                  width='20px'
                  height='20px'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 13.5L7.14645 13.8536C7.34171 14.0488 7.65829 14.0488 7.85355 13.8536L7.5 13.5ZM1.53553 7.53553L1.18198 7.88909H1.18198L1.53553 7.53553ZM6.53553 2.53553L6.18198 2.88909L6.53553 2.53553ZM7.5 3.5L7.14645 3.85355C7.34171 4.04882 7.65829 4.04882 7.85355 3.85355L7.5 3.5ZM8.46447 2.53553L8.11091 2.18198V2.18198L8.46447 2.53553ZM7.85355 13.1464L1.88909 7.18198L1.18198 7.88909L7.14645 13.8536L7.85355 13.1464ZM13.1109 7.18198L7.14645 13.1464L7.85355 13.8536L13.818 7.88909L13.1109 7.18198ZM6.18198 2.88909L7.14645 3.85355L7.85355 3.14645L6.88909 2.18198L6.18198 2.88909ZM7.85355 3.85355L8.81802 2.88909L8.11091 2.18198L7.14645 3.14645L7.85355 3.85355ZM10.9645 1C9.89418 1 8.86772 1.42517 8.11091 2.18198L8.81802 2.88909C9.38729 2.31981 10.1594 2 10.9645 2V1ZM14 5.03553C14 5.84061 13.6802 6.61271 13.1109 7.18198L13.818 7.88909C14.5748 7.13228 15 6.10582 15 5.03553H14ZM15 5.03553C15 2.80677 13.1932 1 10.9645 1V2C12.6409 2 14 3.35905 14 5.03553H15ZM4.03553 2C4.84061 2 5.61271 2.31981 6.18198 2.88909L6.88909 2.18198C6.13228 1.42517 5.10582 1 4.03553 1V2ZM1 5.03553C1 3.35905 2.35905 2 4.03553 2V1C1.80677 1 0 2.80677 0 5.03553H1ZM1.88909 7.18198C1.31981 6.61271 1 5.84061 1 5.03553H0C0 6.10582 0.42517 7.13228 1.18198 7.88909L1.88909 7.18198Z'
                    fill='#ffffff'
                  />
                </svg>
              </span>
              <span className='hover:bg-white/40 flex items-center justify-center p-2 rounded-full'>
                <svg
                  fill='#ffffff'
                  width='20px'
                  height='20px'
                  viewBox='0 0 0.8 0.8'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>comment</title>
                  <path d='M0.413 0.046c-0.203 0 -0.369 0.142 -0.369 0.316a0.286 0.286 0 0 0 0.072 0.186l0 0a0.318 0.318 0 0 1 -0.088 0.153l0 0a0.031 0.031 0 0 0 0.029 0.052l0 0c0.086 -0.014 0.163 -0.048 0.228 -0.097l-0.001 0.001c0.039 0.013 0.083 0.02 0.129 0.02 0.203 0 0.369 -0.142 0.369 -0.316S0.616 0.046 0.413 0.046zm0 0.569h-0.001c-0.044 0 -0.087 -0.008 -0.126 -0.023l0.002 0.001c-0.001 0 -0.003 -0.001 -0.004 -0.001h0a0.03 0.03 0 0 0 -0.007 -0.001h0a0.025 0.025 0 0 0 -0.005 0.001l0 0q-0.004 0 -0.007 0.002l0 0a0.033 0.033 0 0 0 -0.005 0.003l0 0a0.025 0.025 0 0 0 -0.004 0.003l0 0a0.345 0.345 0 0 1 -0.12 0.067l-0.002 0.001a0.33 0.33 0 0 0 0.047 -0.119l0 -0.002c0 -0.001 0 -0.002 0 -0.002a0.033 0.033 0 0 0 -0.007 -0.023l0 0c0 -0.001 -0.001 -0.001 -0.001 -0.002a0.224 0.224 0 0 1 -0.066 -0.157v0c0 -0.14 0.137 -0.253 0.306 -0.253s0.306 0.114 0.306 0.253S0.581 0.615 0.413 0.615z' />
                </svg>
              </span>
              <span className='hover:bg-white/40 flex items-center justify-center p-2 rounded-full'>
                <svg
                  fill='#ffffff'
                  width='20px'
                  height='20px'
                  viewBox='0 0 0.6 0.6'
                  id='Layer_1'
                  data-name='Layer 1'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m0.543 0.282 -0.2 -0.2A0.025 0.025 0 0 0 0.3 0.1v0.089A0.275 0.275 0 0 0 0.05 0.463V0.5a0.025 0.025 0 0 0 0.045 0.015 0.287 0.287 0 0 1 0.197 -0.101c0.001 0 0.004 0 0.008 -0.001V0.5a0.025 0.025 0 0 0 0.043 0.018l0.2 -0.2a0.025 0.025 0 0 0 0 -0.035M0.35 0.44V0.388a0.025 0.025 0 0 0 -0.025 -0.025c-0.006 0 -0.032 0.001 -0.039 0.002a0.35 0.35 0 0 0 -0.185 0.074A0.225 0.225 0 0 1 0.325 0.238a0.025 0.025 0 0 0 0.025 -0.025V0.16L0.49 0.3Z' />
                </svg>
              </span>
              <span className='hover:bg-white/40 flex items-center justify-center p-2 rounded-full'>
                <svg
                  fill='#ffffff'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20px'
                  height='20px'
                  viewBox='0 0 1.3 1.3'
                  enableBackground='new 0 0 52 52'
                  xmlSpace='preserve'
                >
                  <path d='M0.2 0.5c0.083 0 0.15 0.068 0.15 0.15s-0.068 0.15 -0.15 0.15 -0.15 -0.068 -0.15 -0.15 0.068 -0.15 0.15 -0.15m0.45 0c0.083 0 0.15 0.068 0.15 0.15s-0.068 0.15 -0.15 0.15 -0.15 -0.068 -0.15 -0.15 0.068 -0.15 0.15 -0.15m0.45 0c0.083 0 0.15 0.068 0.15 0.15s-0.068 0.15 -0.15 0.15 -0.15 -0.068 -0.15 -0.15 0.068 -0.15 0.15 -0.15' />
                </svg>
              </span>
            </span>
          </div>
          <button
            onClick={scrollRight}
            className='hidden sm:inline z-30 text-white bg-black/50 px-3 py-1 rounded-r-lg text-sm lg:text-base self-center hover:bg-black/70 transition'
            aria-label='Scroll Right'
          >
            &#8594;
          </button>
        </div>
        </>
  )
}

export default ReelsPosts