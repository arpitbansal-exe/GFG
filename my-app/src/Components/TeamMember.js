import React from 'react'
import { Link } from 'react-router-dom'

function TeamMember(props) {
    return (
        <div className="card card-side card-compact h-40 w-50 bg-[#35763F] shadow-2xl">
            <figure><img src={props.img} alt={props.Name} /></figure>
            <div className="card-body">
                <h1 className="card-title text-white">{props.Position}</h1>
                <h2 className="card-title text-white">{props.Name}</h2>
                <div className='absolute bottom-5 right-5 '>
                <div className="card-actions justify-end mb-0 pb-0" >
                    <div className='flex'>
                        <Link className="mr-2" to={props.Insta} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="24" height="24" alt="Instagram" /></Link>
                        <Link to={props.Linked} target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width="24" height="24" alt="LinkedIn" /></Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMember