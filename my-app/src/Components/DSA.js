import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'

export default function DSA() {

    const [posts, setPosts] = useState([]);

    async function GetAll() {
        let url = "http://localhost:5000/post/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        }
    



  return (
    
    <div>
        <Navbar/>
        

        <h1>DSA</h1>
        <button onClick={GetAll}>Get All</button>
        <p>{posts}</p>
    </div>
  )
}
