import React from 'react'
import { Link } from 'react-router-dom'
function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

export default function QuestionTable({ index, ...props }) {
  return (
    <tr className="hover">
                  <td>{index+1}</td>
                  <td>{props.Title}</td>
                  <td>{capitalizeFirstLetter(props.difficulty)}</td>
                  <td> <Link to={`/dsa/${props.Title}`}><div className="btn btn-sc">View</div></Link> </td>
                  <td> <Link to={props.link}><div className="btn btn-primary ">Solve</div></Link>  </td>
                </tr>
  )
}
