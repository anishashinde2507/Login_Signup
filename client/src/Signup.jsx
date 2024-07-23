import React from 'react';
import { useState } from 'react';
import "./signup.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Signup() {
    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const[password,setPassword] =useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name,email,password})
        .then(result => {console.log(result)
        navigate('/login')
    })
        .catch(err=>console.log(err)) 
    }

  return (
    <div className='signup-form'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputName" 
            aria-describedby="nameHelp" 
            placeholder="Enter name"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
      <p>Already have an account?</p>
      <Link to='/login' className='btn btn-primary btn-full-width'>Login</Link>
    </div>
  );
}

export default Signup;
