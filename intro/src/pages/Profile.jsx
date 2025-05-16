import React from 'react'
import UserContext from '../global/Usercontext'
import { useContext } from 'react'
export default function Profile() {
    const {user} = useContext(UserContext)
  return (
    <div>
       {
        user.loggedin?<h1>Hello {user.name}</h1>:<h1>Please Login</h1>
       }
    </div>
  )
}
