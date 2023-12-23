import React from 'react';
import { useSelector } from 'react-redux';

const Topnav = () => {
  const state = useSelector((state) => state);

  return (
    <div className='bg-white w-100 rounded-md h-5 flex justify-around mb-10'>
      {state.trace === 0 && (
         <>
         <div className='bg-purple-500 m-auto w-20 inline-block rounded-md h-2'></div>
         <div className='bg-white m-auto w-20 inline-block rounded-md h-2'></div>
         <div className='bg-white m-auto w-20 inline-block rounded-md h-2'></div>
       </>
        
      )}
      {state.trace === 1 && (
        <>
          <div className='bg-purple-500 m-auto w-20 inline-block rounded-md h-2'></div>
          <div className='bg-purple-500 m-auto w-20 inline-block rounded-md h-2'></div>
          <div className='bg-white m-auto w-20 inline-block rounded-md h-2'></div>
        </>
      )}
      {state.trace === 2 && (
        <>
          <div className='bg-purple-500 m-auto w-20 inline-block rounded-md h-2'></div>
          <div className='bg-purple-500 m-auto w-20 inline-block rounded-md h-2'></div>
          <div className='bg-purple-500 m-auto w-20 inline-block rounded-md h-2'></div>
        </>
      )}
    </div>
  );
};

export default Topnav;
