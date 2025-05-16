import React from 'react'
import { useState } from 'react'
import UserContext from './Usercontext'
export default function UserProvider({children}) {
    const [user,setUser] = useState({name:'asim',role:'admin',loggedin:false})
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
