import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export default function Signup() {
  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 p-1">
                     <div className=' text-center'>
                         <img src={logo} className="w-50 mx-auto" alt="" />
                          <h2 className=' display-6 text-danger'>Donate Blood and save Lives</h2>
                     </div>
                </div>
                <div className="col-md-6 p-5">
                    <div className="card p-3">  
                        <h1>SIGNUP</h1>
                        <hr />
                        <label htmlFor="name">Enter Your Name</label>
                        <input type="text" className="form-control my-3" placeholder="Enter Your Name" />
                        <label htmlFor="name">Your Email</label>
                        <input type="email" className="form-control my-3" placeholder="Enter Your Email" />
                        <label htmlFor="name">Your Password</label>
                        <input type="password" className="form-control my-3" placeholder="Enter Your Password" />
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" className="form-control my-3" placeholder="Confirm Your Password" />
                        <button className="btn btn-primary">Signup</button>
                        <hr />
                        <p>Already have an account? <Link to="/">Login</Link></p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
