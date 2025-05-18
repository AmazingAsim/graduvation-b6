import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
export default function Dashboard() {
    let navigate = useNavigate();
    useEffect(function(){
        if(!localStorage.getItem('islogin')){
            navigate('/');
        }
    },[])
  return (
    <div>
       <Navbar/>
       <Outlet/>
    </div>
  )
}
