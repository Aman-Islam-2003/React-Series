import React from 'react'
import Topnav from './Topnav'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { movePrevAction } from '../features/formSlice';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clickPrevious = (event)=>{
      dispatch(movePrevAction());
      navigate('/login')
    }
    return (
        <>
        <Topnav/>
        <h2 className='mb-5 font-bold text-2xl'>Profile</h2>
        <div className='w-80 border-2 border-sky-500 p-5 rounded-lg'>
            <form className='max-w-sm mx-auto'>
    
                <input type="text" className="shadow-sm text-white bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-5" placeholder='Full name' />
                <input type="text" placeholder='Profile Url' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mb-5" />
            </form>
            </div>
            <button className='text-white bg-blue-700 hover:bg-blue-800 focus-ring-4 mt-10 mr-9' onClick={clickPrevious}>Previous</button>
          
        </>
      )
    }
    

export default Profile
