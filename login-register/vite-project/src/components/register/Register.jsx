import React, { useState } from 'react'
import './Register.css'
import axios from "axios"

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email:'',
    password:'',
    reEnterPassword:'',
  })

  const handleInput = (event)=>{
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
    //console.log(event.target.name, event.target.value)
  }

  const register = (event)=>{
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && (password === reEnterPassword)) {
      axios.post("http://localhost:4000/register", user).then((res)=> console.log(res))
    }else{
      alert("Invalid input")
    }

  }

  return (
    <div className='wrapper'>
    <div className='register'>
        <h1>Register</h1>
        <input type='text' name="name" placeholder='Enter your name' onChange={handleInput}/>
            <input type='email' name="email" placeholder='Enter your email' onChange={handleInput}/>
            <input type='password'  name="password" placeholder='Enter your password' onChange={handleInput}/>
            <input type='password'  name="reEnterPassword" placeholder='ReEnter your password' onChange={handleInput}/>
            <button onClick={register}>Register</button>
    </div>
    </div>
  )
}

export default Register
