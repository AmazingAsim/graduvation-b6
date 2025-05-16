import React,{ useState } from 'react'
import UserContext from '../global/Usercontext'
import { useContext } from 'react'
export default function Login() {
    const {user,setUser} = useContext(UserContext);
    const [name,setName] = useState('');

    function login(){
        setUser({...user,name:name,loggedin:true})
    }
  return (
    <div>
      <input type="text" placeholder='Enter Your name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      <button onClick={login}>Login</button>
    </div>
  )
}
