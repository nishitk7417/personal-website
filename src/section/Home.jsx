import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center h-screen text-2xl'>
      Welcome to my website
    </div>
    </>
  )
}

export default Home