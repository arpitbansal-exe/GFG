import { useParams } from 'react-router-dom';
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
    await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/post/getpost`, {
      "Title": Title
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
    if (localStorage.getItem("token-info") == null) {
      alert("Please Login First");
      return;
    }
    let postId = data._id;
    if (text === "") {
      alert("Cannot post empty comment");
      return;
    }
    await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/post/comment`, {
      "postId": postId,
      "text": text
    }, {
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem('token-info'))
      },
    }).then((res) => {
      res.data.title === "comment added" ? alert("Comment Added Successfully") : alert("Error Occured");
      Get();
    }).then((err) => {
      console.log(err);
    });

  }

  return (
    <>
      <div className='min-h-[75vh]'>
        <div class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                DATA STRUCTURES <br />
                AND ALGORITHM
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-3xl dark:text-gray-400">
                <h3>Title: {data.Title}</h3>
                <h4>Description: {data.Description}</h4>
                <h4>Difficulty: {data.difficulty}</h4>
              </p>
              <Link to={data.link}>
                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Solve Now
                </button>
              </Link>
              <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 pt-20">
                <h1 class="max-w-1xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-4xl dark:text-white">
                  Facing Queries ?? Let's talk ...
                </h1>
              </div>
              <div>
                <br />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setText(e.target.value)}
                />
                <button
                  type="button"
                  class="text-white bg-gradient-to-r mx-5 from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-7 py-3  text-center mr-2 mb-2"
                  onClick={addComment}
                >
                  Post
                </button>
              </div>
              <br />
              <div className="collapse bg-base-200 ">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium px-7">
                  Comments
                </div>
                <div className="collapse-content">
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
          </div>
        </div>

        
      </div>

    </>
  );
}
export default DSADetail;

