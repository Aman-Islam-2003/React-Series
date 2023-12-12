import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [user, setUser] = useState({
    email:'',
    password:'',
  })

  const handleInput = (event)=>{
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
    console.log(event.target.name, event.target.value)
  }

  return (
    <div className='wrapper'>
    <div className='login'>
        <h1>Login</h1>
            <input type='email'  name="email" placeholder='Enter your email' onChange={handleInput}/>
            <input type='password' name="password"  placeholder='Enter your password' onChange={handleInput}/>
            <button>Login</button>
            <div>or</div>
            <button>Register</button>
    </div>
    </div>
  )
}

export default Login
