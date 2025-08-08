import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getOtherUserProfile } from '../../store/user/user.thunk'
import PostGallery from './setting/PostGallery/PostGallery'

const OtherUserProfile = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    dispatch(getOtherUserProfile(id)).then(() => {
      setLoading(false)
    })
  }, [dispatch, id])


  const { SearchUserProfile } = useSelector(state => state.user)
  const gallery = SearchUserProfile?.posts



  if(loading) return <div>Loading</div>
  if(!gallery) return <div> Sorry User not found </div>

  return (
<div className='w-full overflow-y-scroll ' >
    <div className="max-w-5xl mx-auto relative h-screen max-h-screen  ">
  
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 h-[30vh] w-full p-6 bg-base-100 rounded-lg shadow-md">
        
       
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3">
          <img
            className="h-40 w-40 object-cover rounded-full border-4 border-primary shadow-lg"
            src={SearchUserProfile?.avatarUrl || "/avatar.webp"}
            alt={SearchUserProfile?.username || "User avatar"}
          />
        </div>

       
        <div className="flex flex-col flex-grow w-full md:w-2/3 space-y-4">
        
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <h1 className="text-3xl font-extrabold text-base-content">{SearchUserProfile?.username || "Username"}</h1>
            <div className="flex gap-3 flex-wrap">
              <button className="btn btn-primary btn-outline px-6 py-2 text-sm font-semibold rounded-md hover:bg-primary hover:text-white transition">
                Follow
              </button>
              <button className="btn btn-secondary btn-outline px-6 py-2 text-sm font-semibold rounded-md hover:bg-secondary hover:text-white transition">
                Message
              </button>
            </div>
          </div>

         
          <div className="flex justify-start space-x-8 text-center text-base-content/80 font-semibold select-none">
            <div>
              <span className="text-primary text-lg font-bold">
                {SearchUserProfile?.posts?.length ?? 0}
              </span>
              <p className="text-sm">Posts</p>
            </div>
            <div>
              <span className="text-primary text-lg font-bold">
                {SearchUserProfile?.followers?.length ?? 0}
              </span>
              <p className="text-sm">Followers</p>
            </div>
            <div>
              <span className="text-primary text-lg font-bold">
                {SearchUserProfile?.following?.length ?? 0}
              </span>
              <p className="text-sm">Following</p>
            </div>
          </div>

       
          {SearchUserProfile?.bio && (
            <p className="text-base-content text-base md:text-lg font-medium border-l-4 border-primary pl-4 leading-relaxed whitespace-pre-wrap">
              {SearchUserProfile.bio}
            </p>
          )}
        </div>
      </div>

  
      <div className="mt-8">
        <PostGallery gallery={gallery} />
      </div>
    </div>
</div>
  )
}

export default OtherUserProfile
