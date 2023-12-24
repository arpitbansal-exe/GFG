import React from 'react'
import { Link } from 'react-router-dom'
function capitalizeFirstLetter(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}

export default function QuestionCard(props) {
  return (
    <div key={props.Title} className="card mx-2">
              {/* <Link to={`/dsa/${props.Title}`}> */}
                <div className="card w-full  bg-green-300 text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title text-black text-2xl">{props.Title}</h2>
                    <p className="card-title text-zinc-800 text-1xl">Difficulty: {capitalizeFirstLetter(props.difficulty)}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/dsa/${props.Title}`}><div className="btn">View</div></Link>  
                      <Link to={props.link}><div className="btn">Solve</div></Link>  

                    </div>
                  </div>
                </div>
              {/* </Link> */}
            </div>
  )
}
