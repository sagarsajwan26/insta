import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { getUserPosts } from '../../store/post/post.thunk'
import { HiCamera, HiPlus } from 'react-icons/hi'
import PostGallery from './setting/PostGallery/PostGallery'

const Profile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserPosts())
  }, [dispatch])

  const { userData } = useSelector(state => state.user)
  const { loginUserPosts } = useSelector(state => state.post)

  const name = userData?.username || "SagarSajwan"
  const bio = userData?.bio?.trim() ? userData.bio : 'Bio'
  const avatar = userData?.avatarUrl?.trim() ? userData.avatarUrl : "/avatar.webp"
  const postCount = userData?.posts?.length || 0
  const followers = userData?.followers?.length || 0
  const following = userData?.following?.length || 0
  const gallery = loginUserPosts || []

  return (
    <div className="h-screen max-h-screen bg-gradient-to-br from-base-300 via-base-200 to-base-300 py-8 flex flex-col items-center overflow-y-scroll">
      
      <div className="w-full max-w-5xl bg-base-100 rounded-2xl shadow-xl mb-8 p-6 flex flex-col md:flex-row items-center md:items-start gap-8">
        
        <div className="relative flex-shrink-0">
          <img
            src={avatar}
            className="h-32 w-32 object-cover rounded-full border-4 border-primary shadow-lg"
            draggable={false}
            alt="avatar"
          />
          <Link
            to="/setting"
            aria-label="Edit Profile Picture"
            className="absolute bottom-0 right-0 bg-primary rounded-full p-2 shadow-lg hover:bg-primary-focus transition"
          >
            <HiCamera className="text-white w-6 h-6" />
          </Link>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">{name}</h2>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Link
                to="/setting"
                className="btn btn-outline btn-primary font-semibold"
              >
                Edit Profile
              </Link>
              <button className="btn btn-outline btn-error font-semibold">
                Logout
              </button>
            </div>
          </div>

      
          <div className="flex gap-8 mt-2 justify-center md:justify-start">
            <div className="text-center">
              <span className="font-bold text-lg text-primary">{postCount}</span>
              <div className="text-gray-500">Posts</div>
            </div>
            <div className="text-center">
              <span className="font-bold text-lg text-primary">{followers}</span>
              <div className="text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <span className="font-bold text-lg text-primary">{following}</span>
              <div className="text-gray-500">Following</div>
            </div>
          </div>

       
          <p className="whitespace-pre-line text-gray-600 text-base mt-2 font-medium border-l-4 border-primary pl-3">
            {bio}
          </p>
        </div>
      </div>

      <PostGallery gallery={gallery} />
     
    
    </div>
  )
}

export default Profile
