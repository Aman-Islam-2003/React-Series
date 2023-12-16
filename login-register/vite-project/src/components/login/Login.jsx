import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email:'',
    password:'',
  })

  const handleInput = (event)=>{
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
    //console.log(event.target.name, event.target.value)
  }

  const login = (event)=>{
  
      // axios.post("http://localhost:4000/login", user).then((res)=> console.log(res))

      fetch("http://localhost:4000/login", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

  }

  return (
    <div className='wrapper'>
    <div className='login'>
        <h1>Login</h1>
            <input type='email'  name="email" value={user.email} placeholder='Enter your email' onChange={handleInput}/>
            <input type='password' name="password" value={user.password} placeholder='Enter your password' onChange={handleInput}/>
            <button onClick={login}>Login</button>
            <div>or</div>
            <button onClick={()=>{
                navigate('/register')
            }}>Register</button>
    </div>
    </div>
  )
}

export default Login
