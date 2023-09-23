import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
export default function DSA() {
  useEffect(() => {
    GetAll();
  }, []);

  async function CreatePost() {
    let r;
    try {
      r = JSON.parse(localStorage.getItem('user-info')).role;

    } catch (error) {
      alert("Please Login as admin to create post");
      return;
    }
    if (r !== "admin") {
      alert("You are not authorized to create post");
      return;
    }
    if (r === "admin") {
      let item = { "Title": "DSA 8", "Description": "Data Structures and Algorithms", "difficulty": "medium", "link": "https://www.geeksforgeeks.org/data-structures/" }
      // Currently hardcoded, if button is pressed, a panel will open and show the form to fill
      let result = await fetch("http://localhost:5000/post/create", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
      });



      result = await result.json();
      if (result.title === "post created") {
        alert("Post created successfully");
      }
      else if (result.message === "Title already used") {
        alert("Title already used");
      }
    }

  }

  const [data, setData] = useState([]);
  async function GetAll() {
    let url = "http://localhost:5000/post/";
    const response = await fetch(url);
    const ques = await response.json();
    setData(ques);

  }
  return (
    <>
      <Navbar />


      <h1>DSA</h1>
      <button onClick={CreatePost}>Create Post</button>

      
    <div className="DSA-list">
      {data.map((card) => (
        <span key={card.Title} className="card">
          <Link to={`/dsa/${card.Title}`}>
            <h3>{card.Title}</h3>
            <h6>{card.difficulty}</h6>

          </Link>
        </span>
      ))}
    </div>

    </>
  )
}
