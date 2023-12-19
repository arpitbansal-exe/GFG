import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function DSADetail() {

  const { Title } = useParams();
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    Get();
  }, []);
  const [Comments, setComments] = useState([]);

  async function Get() {
    let item = { Title };
    await axios.post(`${process.env.REACT_APP_BASE_URL}/post/getpost`, {
      body: JSON.stringify(item)
    }).then((res) => {
      setData(res.data);
      setComments(res.data.comments.reverse());
    }).catch((err) => {
      console.log(err);
    });
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
    await axios.post(`${process.env.REACT_APP_BASE_URL}/post/comment`, {
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem('token-info'))
      },
      body: JSON.stringify(item)
    }).then((res) => {
      res.data.title === "comment added" ? alert("Comment Added Successfully") : alert("Error Occured");
      Get();
    }).then((err) => {
      console.log(err);
    });

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
              <button className="btn btn-accent btn-outline ml-3 mt-2" onClick={addComment}>post</button>
            </div>
            <div className="list">
              {Comments.map((card) => (
                <div key={card._id} className="chat chat-start">
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
export default DSADetail;

