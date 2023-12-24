import React from 'react'
import { Teamdata_2022, Teamdata_2023 } from '../Components/teamdata.js'
import { useState } from 'react'
import TeamMember from '../Components/TeamMember.js'

export default function Team() {
  const [Teamdata, setTeamdata] = useState(Teamdata_2023);
  const [Team, setTeam] = useState('Team 2023');
  return (
    <>
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p className='text-2xl md:text-5xl ml-3 md:ml-12'>{Team}</p>
        <span className='mx-3 grid grid-flow-col gap-1 md:gap-4 float-right'>
          <button className="btn btn-success mr-3" onClick={() => { setTeamdata(Teamdata_2023); setTeam("Team 2023"); }}>2023-24</button>
          <button className="btn btn-success mr-3" onClick={() => { setTeamdata(Teamdata_2022); setTeam("Team 2022"); }}>2022-23</button>
        </span>
      </div>
      <div className="flex flex-col w-full lg:flex-row  mt-4 md:mt-16">
        <div className="grid  w-2/5 mt-2 ml-3 md:ml-12">
          <p className='text-7xl text-black'>Welcome to the <br /><span className='text-green-500'>GFG</span> Clan:</p>
          <p className='text-3xl '>Where Coding Meets Community!  </p>
        </div>
        
        {/* {ALL TEAMS} */}

        {/* {CORE TEAM} */}
        <div className="grid place-items-center  mx-5 md:ml-10 mt-5">
          <div className="grid grid-cols-1 gap-5  md:grid-cols-3">
            {Teamdata.Core.map((card, index) => (
              <TeamMember key={index} {...card}/>
            
            ))}
          </div>
        </div>
      </div>

       {/* {TECH TEAM} */}
      <div className='mt-20 mb-3'>
        <h1 className='text-3xl ml-3 font-bold'>Technical Team</h1>
        <div className="h-30 grid grid-cols-1 gap-5 md:grid-cols-5 mx-5 mt-5">
          {Teamdata.Tech.map((card, index) => (
            <TeamMember key={index}  {...card}/>
          ))}
        </div>
      </div>

      {/* {SOCIAL TEAM} */}      
      <div className='mt-10 mb-3'>
        <h1 className='text-3xl ml-3 font-bold'>Social Media Team</h1>
        <div className="h-30 grid grid-cols-1 gap-5 md:grid-cols-5 mx-5 mt-5">
          {Teamdata.Social.map((card, index) => (
            <TeamMember key={index}  {...card}/>
          ))}
        </div>
      </div>

      {/* {DESIGN TEAM} */}
      <div className='mt-10 mb-3'>
        <h1 className='text-3xl ml-3 font-bold'>Design Team</h1>
        <div className="h-30 grid grid-cols-1 gap-5 md:grid-cols-5 mx-5 mt-5">
          {Teamdata.Design.map((card, index) => (
            <TeamMember key={index} {...card}/>
          ))}
        </div>
      </div>

      {/* {MARKETING TEAM} */}
      <div className='mt-10 mb-3'>
        <h1 className='text-3xl ml-3 font-bold'>Marketing Team</h1>
        <div className="h-30 grid grid-cols-1 gap-5 md:grid-cols-5 mx-5 mt-5">
          {Teamdata.Marketing.map((card, index) => (
            <TeamMember key={index} {...card}/>
          ))}
        </div>
      </div>
      <div className='mt-10 mb-3'>
        <h1 className='text-3xl ml-3 font-bold'>Event Team</h1>
        <div className="h-30 grid grid-cols-1 gap-5 md:grid-cols-5 mx-5 mt-5">
          {Teamdata.Event.map((card, index) => (
            <TeamMember key={index} {...card}/>
          ))}
        </div>
      </div>
    </>

  )
}
