import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { moveNextAction } from '../features/formSlice';
import Topnav from './Topnav';
import {useNavigate} from 'react-router-dom'
import { movePrevAction } from '../features/formSlice';

export default function Login() {
    const navigate = useNavigate();
    const  trace  = useSelector(state => state);
    console.log(trace)
    const dispatch = useDispatch();
   const [user, setUser] = useState({
    email:'',
    password:''
   })

   const clickNext = (event)=>{
     event.preventDefault();
     dispatch(moveNextAction());
    navigate("/profile")
   }
   const clickPrevious = (event)=>{
    dispatch(movePrevAction());
    navigate('/')
  }

  return (
    <>
    <Topnav/>
    <h2 className='mb-5 font-bold text-2xl'>Login</h2>
    <div className='w-80 border-2 border-sky-500 p-5 rounded-lg'>
        <form className='max-w-sm mx-auto'>

            <input type="email" className="shadow-sm text-white bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-5" placeholder='Email' name="email" value={user.email}/>
            <input type="password" placeholder='Password' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-5" name="password" value={user.password}/>
        </form>
        </div>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus-ring-4 mt-10 mr-9' onClick={clickPrevious}>Previous</button>
            <button className='text-white bg-blue-700 hover:bg-blue-800 focus-ring-4 mt-10 ml-20' onClick={clickNext}>Next</button>
      
    </>
  )
}
