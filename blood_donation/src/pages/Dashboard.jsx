import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Dashboard() {
    let navigate = useNavigate();
    useEffect(function(){
        if(!localStorage.getItem('islogin')){
            navigate('/');
        }
    },[])
  return (
    <div>
        <h1>Dashboard</h1>
    </div>
  )
}
