import React from 'react'

const PostGallery = ({gallery}) => {
  return (
    <>
      
      <div className="w-full max-w-5xl p-3 h-screen max-h-screen">
        <div className="flex flex-wrap justify-center md:justify-start">
          {gallery.length > 0 ? (
            gallery.map(post => (
              <div 
                key={post._id}
                className="h-120 w-80 bg-base-200  shadow-md overflow-x-auto flex gap-2  snap-x snap-mandatory "
              >
                {post.media.map(media => (
                  media.mediaType === 'image' ? (
                    <img
                      key={media._id}
                      className="h-full w-full object-cover flex-shrink-0  snap-center"
                      src={media.mediaUrl}
                      alt="post media"
                    />
                  ) : (
                    <video
                      key={media._id}
                      className="h-full w-full object-cover flex-shrink-0 snap-center"
                      src={media.mediaUrl}
                      controls
                    />
                  )
                ))}
              </div>
            ))
          ) : (
            <div className="w-full flex flex-col items-center space-y-4 py-10">
              <p className="text-center text-2xl font-bold text-gray-500">No Posts Yet</p>
              <Link
                to="/upload"
                className="btn btn-primary gap-2 flex items-center"
                aria-label="Create a new Post"
              >
                <HiPlus className="w-6 h-6" />
                Create a new Post
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default PostGallery