import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { moveNextAction } from '../features/formSlice';

export default function Login() {
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
    //  console.log(trace)
   }


  return (
    <>
    <h2 className='mb-5 font-bold text-2xl'>Login</h2>
    <div className='w-80 border-2 border-sky-500 p-5 rounded-lg'>
        <form className='max-w-sm mx-auto'>

            <input type="email" className="shadow-sm text-white bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-5" placeholder='Email' />
            <input type="password" placeholder='Password' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-5" name="password"/>
        </form>
        </div>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus-ring-4 mt-10' onClick={clickNext}>Next</button>
      
    </>
  )
}
