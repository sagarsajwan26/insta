import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { updataUserInfo, UpdateProfilePic } from '../../../store/user/user.thunk'
import {toast} from 'react-toastify'

const SettingMain = () => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const [image, setImage]=useState()
    const [loading, setLoading]= useState(false)
    
      const { userData } = useSelector(state => state.user)
    const [bio, setBio] = useState(userData?.bio || '')

  const languages = [
    "English", "Spanish", "French", "German", "Chinese", "Japanese", "Arabic", "Hindi", "Russian", "Portuguese"
  ]
    const metaLinks = [
    { text: "Meta", to: "/setting/meta" },
    { text: "About", to: "/setting/about" },
    { text: "Blog", to: "/setting/blog" },
    { text: "Jobs", to: "/setting/jobs" },
    { text: "Help", to: "/setting/help" },
    { text: "API", to: "/setting/api" },
    { text: "Privacy", to: "/setting/privacy" },
    { text: "Terms", to: "/setting/terms" },
    { text: "Locations", to: "/setting/locations" },
    { text: "Instagram Lite", to: "/setting/instagram-lite" },
    { text: "Meta AI", to: "/setting/meta-ai" },
    { text: "Meta AI Articles", to: "/setting/meta-ai-articles" },
    { text: "Threads", to: "/setting/threads" },
    { text: "Contact Uploading & Non-Users", to: "/setting/contact-uploading-non-users" },
    { text: "Meta Verified", to: "/setting/meta-verified" }
  ]


  const updateBio = (e) => {
    e.preventDefault()
    dispatch(updataUserInfo(bio)).then(res=>{
        console.log(res);
        
    })


  }
   const handlePic= (e)=>{
  
    
        const file= e.target.files[0]
        if(!file) return 
        
       
        const fileSize= (Math.floor(file.size /(1024*1024)))
       
        console.log(fileSize);
        
        if(fileSize >=5) return toast.error(`Your current file size is ${fileSize} Mb it should be less than 4Mb `)
        
        setImage(file)
    }
    const updateProfilePic= ()=>{
        setLoading(true)
        const form = new FormData()
        form.append('avatar',image)
            dispatch(UpdateProfilePic(form)).then(res=>{
                
                if(res?.payload?.status==200){
                    console.log(res)
                    
                    toast.success(res.payload.message)
                    setLoading(false)
                }else  {
                      toast.error("uploading profile pic failed")
                        setLoading(false)
                }
                
            })
    }

  
  return (
    <div className="px-4 sm:px-10 py-8 max-w-4xl mx-auto max-h-screen overflow-y-scroll text-base-content">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mb-10 relative gap-6">
        <div className="flex items-center gap-5 relative">
          <div className="relative">
            <img
              className="w-20 h-20 rounded-full object-cover border-2 border-primary"
              src={userData?.avatarUrl?.trim() ? userData.avatarUrl : "/avatar.webp"}
              alt={`${userData?.username || "User"} avatar`}
            />
            <label
              htmlFor="avatar"
              className="absolute bottom-0 right-0 bg-base-100 rounded-full p-1.5 shadow-md cursor-pointer hover:bg-base-200 transition-all"
              title="Change avatar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7h2l2-3h10l2 3h2a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1zm9 10a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            </label>
            <input
              hidden
onChange={(e)=>handlePic(e)}
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
            />
          </div>
          <h1 className="text-2xl font-semibold">{userData?.username}</h1>
        </div>

     {
    image && (
           <button
            disabled={loading}
         onClick={updateProfilePic} type="submit" className="btn btn-primary">
          {loading ? "Updating" :"Upload"}
        </button>
    )
}
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Website</h2>
        <div className="mb-2">
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noreferrer"
            className="link link-primary break-all block bg-zinc-700 py-4 rounded-md px-10"
          >
            http://localhost:5173
          </a>
        </div>
        <p className="text-sm text-base-content/70">
          Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.
        </p>
      </section>

      <form onSubmit={updateBio} className="space-y-6 mb-10">
        <div className="form-control w-full flex flex-col gap-5">
          <label htmlFor="bio" className="label">
            <span className="label-text text-2xl font-bold text-white">Bio</span>
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value) }
            placeholder="Write something about yourself..."
            className="textarea textarea-bordered resize-none h-28 bg-base-200 w-full"
          />
        </div>

        <div className="form-control w-full flex flex-col gap-5">
          <label htmlFor="gender" className="label">
            <span className="label-text font-semibold text-white text-2xl">Gender</span>
          </label>
          <select
            id="gender"
            disabled
            className="select select-bordered bg-base-200 cursor-not-allowed"
          >
            <option value="">Prefer not to say</option>
           
          </select>
          <p className="text-xs italic mt-1 text-base-content/60">
            This won't be part of your public profile
          </p>
        </div>

        <div className="bg-base-200 py-4 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2 text-xl text-white">Show account suggestions on profiles</h3>
          <p className="text-sm text-base-content/80 px-4">
            Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.
          </p>
        </div>

        <p className="text-xs text-base-content/70">
          Certain profile info, like your name, bio and links, is visible to everyone.{" "}
          <span className="link link-primary cursor-pointer">See what profile info is visible</span>
        </p>

        <div className='w-full flex justify-end items-center'>
          <button type="submit" className="btn btn-primary w-full max-w-xs">
            Submit
          </button>
        </div>
      </form>

      <section className="mb-8 flex flex-wrap gap-3">
        {metaLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.to}
            className="link link-hover text-sm text-base-content/70"
          >
            {link.text}
          </Link>
        ))}
      </section>

      <section className="mt-20 text-center text-xs text-base-content/50 select-none">
        &copy; 2025 Instagram from Meta
      </section>

      <section className="mt-6 w-48">
        <select
          className="select select-bordered w-full bg-base-200"
          defaultValue="English"
          aria-label="Select language"
        >
          {languages.map((lang, idx) => (
            <option key={idx} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </section>
    </div>
  )
}

export default SettingMain
