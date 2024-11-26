import React from 'react'
import notfound from '../../assets/404.svg'
export default function Notfound() {
  return (
    <div className='mt-20 py-20 flex justify-center items-center flex-col'>
      <img className='w-96' src="/assets/404.svg"  alt='not found page'/> 
      <h2 className='text-center mt-4 text-2xl text-gray-600'>Oops! The page you're looking for doesn't exist. <a className='text-blue-600' href='/'>Back To Home</a></h2>
      

    </div>
  )
}
