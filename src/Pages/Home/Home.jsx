import React from 'react'
export default function Home() {
  return (
    <>
    <div className=" text-center space-y-8 bg-teal-500 text-white p-8 pt-32">
      <img className='w-60 mx-auto' src="../src/assets/avataaars.svg" alt="avatar" />
      <h1 className='font-bold md:text-5xl text-3xl'>START FRAMEWORK</h1>
      <div className='flex flex-row items-center space-x-5 justify-center'>
        <div className="w-24 h-1 bg-white rounded"></div>
        <i className="fa-solid fa-star"></i>
        <div className="w-24 h-1 bg-white rounded"></div>
      </div>
      <p className='text-lg'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>

  )
}