import React from 'react'
import Navbar from '../Components/Navbar'
import Logo from "../Assets/Logo.png"
export default function About() {
  return (
    <>

      <div className=' min-h-[85vh]'>
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <div><img src={Logo} alt="" srcset="" /></div>
          
          <div className='flex items-center'>
            <div className='ml-5'>
            <p className='text-7xl text-black'>The <span className='text-green-500'>GFG</span> <br /> Student Chapter</p>
            <p className='text-3xl mt-3'>MIT ADT University  </p>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <div className='text-4xl ml-5 text-black font-medium my-2'>Our Mission</div>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-5 mx-5'>
            <div className='card bg-green-300/75 h-48 '>
              <div className='text-center my-auto text-2xl font-normal italic'>Educate</div>
            </div>
            <div className='card bg-green-300/75 h-48 '>
              <div className='text-center my-auto text-2xl font-normal italic'>Guide</div>
            </div>
            <div className='card bg-green-300/75 h-48 '>
              <div className='text-center my-auto text-2xl font-normal italic'>Connect</div>
            </div>
            <div className='card bg-green-300/75 h-48 '>
              <div className='text-center my-auto text-2xl font-normal italic'>Leadership </div>
            </div>
            <div className='card bg-green-300/75 h-48 '>
              <div className='text-center my-auto text-2xl font-normal italic'>Opportunities</div>
            </div>
          
          </div>

        </div>

      </div>

    </>
  )
}