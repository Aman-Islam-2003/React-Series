import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Topnav from './Topnav';
import {useDispatch, useSelector} from 'react-redux'
import { moveNextAction } from '../features/formSlice';

export default function SignUp() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
   const [user, setUser] = useState({
    name:'',
    email:'',
    password:''
   })


   const formHandler = (event)=>{
    setUser({
        ...user,
        [event.target.name]: event.target.value
    })
    console.log(event.target.name, event.target.value)
   }

    const submitHandler =(event)=>{
       event.preventDefault();
       const { name, email, password } = user;
       if(name && email && password){
        dispatch(moveNextAction())
         navigate("/login") 
       }else{
        alert("Required fields empty")
       }
    }
  return (
    <>
    <Topnav/>
    <h2 className='mb-5 font-bold text-2xl'>Register</h2>
    <div className='w-80 border-2 border-sky-500 p-5 rounded-lg'>
        <form className='max-w-sm mx-auto'>
        <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-5" placeholder='Username' onChange={formHandler} name="name" value={user.name}/>
            <input type="email" className="shadow-sm text-white bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-5" placeholder='Email' onChange={formHandler}name="email" value={user.email}/>
            <input type="password" placeholder='Password' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-5" onChange={formHandler}name="password" value={user.password}/>
            <button className='text-white bg-blue-700 hover:bg-blue-800 focus-ring-4' onClick={submitHandler}>SignUp</button>
        </form>
        </div>
      
    </>
  )
}
