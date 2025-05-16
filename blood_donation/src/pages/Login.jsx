import { Link,useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react';
export default function Login() {
    let dummyEmail = 'a@gmail.com';
    let dummyPassword = '0000';

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    let navigate  = useNavigate();
    function login(){
        if(email === dummyEmail && password === dummyPassword){
            localStorage.setItem('email',email);
            localStorage.setItem('islogin',true);
            navigate('/dashboard')
        }
        else{
            setErrorMessage('Invalid Credentials')
        }
    }
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
                   {
                       errorMessage && <div className="alert alert-danger">{errorMessage}</div>
                   }
                    <div className="card p-3">  
                        <h1>LOGIN</h1>
                        <hr />
                        <label htmlFor="name">Your Email</label>
                        <input type="email" className="form-control my-3" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="name">Your Password</label>
                        <input type="password" className="form-control my-3" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="btn btn-primary" onClick={login}>Login</button>
                        <hr />
                        <p>Don't have an account? <Link to="/signup">Signup</Link></p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
