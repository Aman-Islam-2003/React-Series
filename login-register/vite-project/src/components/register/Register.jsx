import React, { useState } from 'react'
import './Register.css'
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
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
      // axios.post("http://localhost:4000/register", user).then((res)=> console.log(res))

      fetch("http://localhost:4000/register", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }else{
      alert("Invalid input")
    }

  }

  return (
    <div className='wrapper'>
    <div className='register'>
        <h1>Register</h1>
        <input type='text' name="name" value={user.name} placeholder='Enter your name' onChange={handleInput}/>
            <input type='email' name="email"value={user.email}  placeholder='Enter your email' onChange={handleInput}/>
            <input type='password'  name="password" value={user.password} placeholder='Enter your password' onChange={handleInput}/>
            <input type='password'  name="reEnterPassword" value={user.reEnterPassword} placeholder='ReEnter your password' onChange={handleInput}/>
            <button onClick={register}>Register</button>
            <div>or</div>
            <button onClick={()=>{
                navigate('/login')
            }}>Login</button>
    </div>
    </div>
  )
}

export default Register
