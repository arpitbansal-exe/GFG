import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'


function CardDetail() {

  const { Title } = useParams();
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    Get();
  }, []);
  const [Comments, setComments] = useState([]);

  async function Get() {
    let item = { Title };
    let ques = await fetch("/post/getpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item)
    });
    ques = await ques.json();
    setData(ques);
    setComments(ques.comments);
  }

  if (!data) {
    return <div>Not found</div>;
  }

  async function addComment() {
    console.log("add comment");

    if (localStorage.getItem("token-info") == null) {
      alert("Please Login First");
      return;
    }

    let postId = data._id;
    if (text === "") {
      alert("Cannot post empty comment");
      return;
    }
    let item = { postId, text };

    let res = await fetch("/post/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem('token-info'))
      },
      body: JSON.stringify(item)
    });
    res = await res.json();
    if (res.title === "comment added") {
      alert("Comment Added Successfully");
    }
    else {
      alert("Error Occured");
    }
    Get();
  }
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>

        <div className="card p-5">
          <div className='text-2xl font-semibold'>Title: {data.Title}</div>
          <div className='text-2xl font-semibold'>Description: {data.Description}</div>
          <div className='text-2xl font-semibold'>Difficulty: {data.difficulty}</div>
        </div>
        <Link className="ml-5 mb-10 btn bg-green-400" to={data.link} target='_blank'>
          <div className="text-white">Solve Now</div>
        </Link>


        <div className="collapse bg-green-200">
          <input type="checkbox" />
          {/* {Comments Section} */}
          <div className="collapse-title text-3xl font-medium">
            Comments
          </div>

          <div className="collapse-content">
            <div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setText(e.target.value)} />
              <button class="btn btn-accent btn-outline ml-3" onClick={addComment}>post</button>
            </div>
            <div className="list">
              {Comments.map((card) => (
                <div className="chat chat-start">
                  <div className="chat-header">
                    {card.postedBy}
                  </div>
                  <div className="chat-bubble">{card.text}</div>
                </div>
              ))}
            </div>

         </div>
        </div>
      </div>

    </>
  );
}
export default CardDetail;

