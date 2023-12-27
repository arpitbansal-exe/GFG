import React from 'react'
import Logo from "../Assets/Logo.png"
export default function About() {
  return (
    <>

      <div className=' min-h-[75vh]'>
        <div className="flex flex-col  md:flex-row mt-5">
          <div className='hidden md:block md:w-3/12'>
            <img src={Logo} alt="" srcSet="" />
          </div>

          <div className='flex items-center md:w-9/12'>
            <div className='ml-5'>
              <p className='text-5xl md:text-7xl text-black'>Welcome to <span className='text-green-500'>Geeks for Geeks</span> <br /> Student Chapter</p>
              <p className='text-2xl md:text-3xl  mt-3'>at MIT ADT University! 🚀</p>
              <p className='text-xl md:text-2xl mt-3'>At our core, we are a vibrant community of tech enthusiasts, learners, and innovators. Our mission is to create a platform where passion meets knowledge, and students embark on an exciting journey of exploration, skill enhancement, and career development.</p>
            </div>
          </div>
        </div>
        {/* <div className='mx-10'> 
          <div>What Sets Us Apart:</div>
          <div>
            <div>Knowledge Sharing: We believe in the power of collective wisdom. Our community thrives on the sharing of knowledge, experiences, and insights to foster mutual growth.</div>
            <div>Skill Development: Beyond theoretical knowledge, we focus on practical skills. From coding challenges to real-world problem-solving, we provide a hands-on learning experience.</div>
            <div>Inclusive Community: We welcome individuals from all backgrounds and skill levels. Whether you're a beginner or an experienced coder, there's a place for you in our community.</div>
            <div>Career Guidance: We go beyond coding challenges. Our community provides guidance on career paths, placements, and industry trends to ensure our members are career-ready.</div>
          </div>
          <div>Join us in this exciting tech journey where we not only learn together but also create lasting friendships and support each other's growth. Together, let's shape a future where technology meets innovation, and every member thrives in the world of coding and beyond! 🌐💻</div>
        </div> */}
      </div>

    </>
  )
}