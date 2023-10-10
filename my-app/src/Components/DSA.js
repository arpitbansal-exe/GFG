import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import Footer from './Footer';
export default function DSA() {
  const [admin, setadmin] = useState("NO");
  useEffect(() => {   
    CurrentUser();
    GetAll();
    
  }, []);
  async function CurrentUser() {
    if (localStorage.getItem('token-info')) {
      let res = await fetch("/user/current-user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem('token-info')),
        },
      });
      res = await res.json();
      console.log(res);
      if (res.title === "Unauthorized") {
        localStorage.clear();
        window.location.href = "/";
        return;
      }
      if(res.role==="admin"){
        setadmin("YES");
        console.log("set");
      }
  }

  }
  async function CreatePost() {
    if (admin !== "YES") {
        alert("You are not authorized to create post");
      return;
    }
    if (admin === "YES") {
      let item = { "Title": "DSA 8", "Description": "Data Structures and Algorithms", "difficulty": "medium", "link": "https://www.geeksforgeeks.org/data-structures/" }
      let result = await fetch("/post/create", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem('token-info')),
        },
        body: JSON.stringify(item)
      });

      result = await result.json();
      console.log(result);
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
    let url = "/post/";
    const response = await fetch(url);
    const ques = await response.json();

    setData(ques);

  }
  return (
    <>
      <Navbar />

      <h1 className="text-3xl font-bold">DSA</h1>

      <button className="btn btn-neutral ml-2" onClick={CreatePost}>Create Post</button>
      <div className="h-56 grid grid-cols-5 gap-10 content-center ...">
          {data.map((card) => (
            <div key={card.Title} className="card ml-2">
              <Link to={`/dsa/${card.Title}`}>
                <div className="card w-96 bg-green-300 text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title">{card.Title}</h2>
                    <p className="card-title">Difficulty: {card.difficulty}</p>
                    <div className="card-actions justify-end">
                      <button className="btn">Solve</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div> 

      <Footer />
    </>
  )
}
