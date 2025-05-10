import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import useRandom from '../hooks/random'
export default function Login() {
    let navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const random = useRandom(1,10)
    function check(){
        if(email === 'admin' && password === 'admin'){
            navigate('/home')
        }
        else{
            alert('Invalid Credentials')
        }
    }

   

  return (
    <div>
        <h1>{random}</h1>
        <input type="text" placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="text" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
         <button onClick={check}>Login</button>
    </div>
  )
}
