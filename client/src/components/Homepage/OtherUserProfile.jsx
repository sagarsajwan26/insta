import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getOtherUserProfile } from '../../store/user/user.thunk'

const OtherUserProfile = () => {
  const {id} = useParams()
  const dispatch= useDispatch()
  

  useEffect(()=>{
      dispatch(getOtherUserProfile(id)).then((res)=>{
        console.log(res);
        
      })
  },[])
  
  return (
    <div>
      Profiel
    </div>
  )
}

export default OtherUserProfile
