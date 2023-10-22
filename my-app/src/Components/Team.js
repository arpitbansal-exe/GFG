import React from 'react'
import Navbar from './Navbar'
import { Teamdata_2022, Teamdata_2023 } from './teamdata.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Team() {
  const [Teamdata, setTeamdata] = useState(Teamdata_2023);
  const [Team, setTeam] = useState('Team 2023');
  return (
    <>
      <Navbar />
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p className='text-5xl ml-3'>{Team}</p>
        <span className='mx-3 float-right'>
          <button className="btn btn-success mr-3" onClick={() => { setTeamdata(Teamdata_2023); setTeam("Team 2023"); }}>2023-24</button>
          <button className="btn btn-success mr-3" onClick={() => { setTeamdata(Teamdata_2022); setTeam("Team 2022"); }}>2022-23</button>
        </span>
      </div>

      <br /><br /><br />
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid  w-2/5 mt-2 ml-12">
          <p className='text-7xl text-black'>Welcome to the <br /><span className='text-green-500'>GFG</span> Clan:</p>
          <p className='text-3xl '>Where Coding Meets Community!  </p>
        </div>

        <div className="grid place-items-center mr-5 ml-10">
          <div className="grid grid-cols-3 gap-5 ">
            {Teamdata.Core.map((card, index) => (
              <div className="card card-side card-compact h-40 w-50 bg-[#35763F] shadow-2xl">
              <figure><img src={card.img} alt={card.Name} /></figure>
              <div className="card-body">
                <h1 className="card-title text-white">{card.Position}</h1>
                <h2 className="card-title text-white">{card.Name}</h2>
            
                <div className="card-actions justify-end " style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <Link className="mr-2" to={card.Insta} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="24" height="24" alt="Instagram" /></Link>
                    <Link to={card.Linked} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width="24" height="24" alt="LinkedIn" /></Link>
                  </div>
                </div>
              </div>
            </div>
            
            ))}
          </div>
        </div>
      </div>
      {/* <div className="grid place-items-center mr-5 ml-10">
          <div className="grid grid-cols-3 gap-5 ">
            {Teamdata.Core.map((card, index) => (
              <div className="card card-compact w-70 h-65 bg-[#35763F] shadow-xl">
              <figure className='h-1/2'><img className='object-cover' src={card.img} alt="" /></figure>
              <div className="card-body">
                <h2 className="card-title text-white">{card.Position}</h2>
                <h2 className="card-title text-white">{card.Name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className='mt-20 mb-3'>
        <h1 className='text-3xl ml-3 font-bold'>Technical Team</h1>
        <div className="h-30 grid grid-cols-5 gap-5 mx-5 mt-5">
          {Teamdata.Tech.map((card, index) => (
            <div className="card card-side card-compact h-40 w-50 bg-[#35763F] shadow-2xl">
              <figure><img src={card.img} alt={card.Name} /></figure>
              <div className="card-body">
                <h1 className="card-title text-white">{card.Position}</h1>
                <h2 className="card-title text-white">{card.Name}</h2>

                <div className="card-actions justify-end " style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <Link className="mr-2" to={card.Insta} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="24" height="24" alt="Instagram" /></Link>
                    <Link to={card.Linked} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width="24" height="24" alt="LinkedIn" /></Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10 mb-3'>
        <h1 className='text-3xl ml-3 font-bold'>Social Media Team</h1>
        <div className="h-30 grid grid-cols-5 gap-5 mx-5 mt-5">
          {Teamdata.Social.map((card, index) => (
            <div className="card card-side card-compact h-40 w-50 bg-[#35763F] shadow-2xl">
              <figure><img src={card.img} alt={card.Name} /></figure>
              <div className="card-body">
                <h1 className="card-title text-white">{card.Position}</h1>
                <h2 className="card-title text-white">{card.Name}</h2>
                <div className="card-actions justify-end " style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <Link className="mr-2" to={card.Insta} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="24" height="24" alt="Instagram" /></Link>
                    <Link to={card.Linked} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width="24" height="24" alt="LinkedIn" /></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10 mb-3'>
        <h1 className='text-3xl ml-3 font-bold'>Design Team</h1>
        <div className="h-30 grid grid-cols-5 gap-5 mx-5 mt-5">
          {Teamdata.Design.map((card, index) => (
            <div className="card card-side card-compact h-40 w-50 bg-[#35763F] shadow-2xl">
              <figure><img src={card.img} alt={card.Name} /></figure>
              <div className="card-body">
                <h1 className="card-title text-white">{card.Position}</h1>
                <h2 className="card-title text-white">{card.Name}</h2>
                <div className="card-actions justify-end " style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <Link className="mr-2" to={card.Insta} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="24" height="24" alt="Instagram" /></Link>
                    <Link to={card.Linked} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width="24" height="24" alt="LinkedIn" /></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10 mb-3'>
        <h1 className='text-3xl ml-3 font-bold'>Marketing Team</h1>
        <div className="h-30 grid grid-cols-5 gap-5 mx-5 mt-5">
          {Teamdata.Marketing.map((card, index) => (
            <div className="card card-side card-compact h-40 w-50 bg-[#35763F] shadow-2xl">
              <figure><img src={card.img} alt={card.Name} /></figure>
              <div className="card-body">
                <h1 className="card-title text-white">{card.Position}</h1>
                <h2 className="card-title text-white">{card.Name}</h2>
                <div className="card-actions justify-end " style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <Link className="mr-2" to={card.Insta} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="24" height="24" alt="Instagram" /></Link>
                    <Link to={card.Linked} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width="24" height="24" alt="LinkedIn" /></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10 mb-3'>
        <h1 className='text-3xl ml-3 font-bold'>Event Team</h1>
        <div className="h-30 grid grid-cols-5 gap-5 mx-5 mt-5">
          {Teamdata.Event.map((card, index) => (
            <div className="card card-side card-compact h-40 w-50 bg-[#35763F] shadow-2xl">
              <figure><img src={card.img} alt={card.Name} /></figure>
              <div className="card-body">
                <h1 className="card-title text-white">{card.Position}</h1>
                <h2 className="card-title text-white">{card.Name}</h2>
                <div className="card-actions justify-end " style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <Link className="mr-2" to={card.Insta} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="24" height="24" alt="Instagram" /></Link>
                    <Link to={card.Linked} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width="24" height="24" alt="LinkedIn" /></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  )
}
