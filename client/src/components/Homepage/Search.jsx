import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getSearchUsers } from '../../store/user/user.thunk'

const Search = () => {
  const dispatch= useDispatch()
   const navigate= useNavigate()
   const [loading,setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const {searchUsers}= useSelector(state=> state.user)

  // console.log(searchUsers);
  
  const onSearch = (e) => {
    e.preventDefault()
    setLoading(true)

    dispatch(getSearchUsers(search)).then(res=>{
      setLoading(false)
    })
  
  }

 

  return (
    <div data-theme="night" className="min-h-screen bg-base-900 p-6">
      <nav className="w-full flex justify-center mb-6">
        <form onSubmit={onSearch} className="form-control w-full max-w-lg flex flex-row gap-2">
          <input
            name="search"
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered flex-grow bg-base-100 text-base-content"
            aria-label="Search users"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </nav>
{loading ? (
        <div className="flex justify-center items-center h-full">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
       
      <div className="flex flex-col max-w-lg mx-auto space-y-6">
     {
      searchUsers && (
        <>
         {
        searchUsers.length===0  ? (
          <div>
              No User Found
          </div>
        ):(
          <>
              {searchUsers.map((user, idx) => (
          <div 
          onClick={()=> navigate(`/Usersprofile/${user._id}`)}
            key={idx}
            className="flex items-center gap-4 bg-base-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={user.avatarUrl.trim() ?  user.avatarUrl :"/avatar.webp"}
              alt="User avatar"
              className="w-16 h-16 rounded-full object-cover shadow-sm"
              draggable={false}
            />
            <h1 className="font-semibold text-lg text-base-content flex-grow">{user.username}</h1>
            <button
              aria-label="Cancel search"
              className="btn btn-sm btn-circle btn-ghost hover:bg-error/20 text-error"
              title="Cancel"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </>
      )}
        </>
      )
     }
          </div>
        )
      }
    </div>
  )
}

export default Search
