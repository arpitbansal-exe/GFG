import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function DSA() {
  const [admin, setadmin] = useState("NO");
  const [visible, setvisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    CurrentUser();
    GetAll();


  }, []);
  async function CurrentUser() {
    if (localStorage.getItem('token-info')) {
      await axios.get(`${process.env.REACT_APP_BASE_URL}/user/current-user`, {
        headers: {
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem('token-info')),
        },
      }).then((res) => {
        if (res.data.title === "Unauthorized") {
          localStorage.clear();
          window.location.href = "/";
          return;
        }
        if (res.data.role === "admin") {

          setadmin("YES");
          setvisible(true);
        }
        else {
          setadmin("NO");
          setvisible(false);
        }
      }).catch((err) => {
        console.log(err);
      });
    }

  }
  async function CreatePostbtn() {
    if (admin !== "YES") {
      alert("You are not authorized to create post");
      return;
    }
    if (admin === "YES") {
      document.getElementById('my_modal_1').showModal();

    }

  }

  async function createPost() {
    console.log("trying");
    console.log(title, description, difficulty, link);
    await axios.post(`${process.env.REACT_APP_BASE_URL}/post/create`, {
      "Title": title,
      "Description": description,
      "difficulty": difficulty,
      "link": link
    }, {
      headers: {
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem('token-info')),
      },

    }).then((res) => {
      console.log(res);
      if (res.data.title === "post created") {
        alert("Post created successfully");
      }
      else if (res.data.message === "Title already used") {
        alert("Title already used");
      }
    }).catch((err) => {
      console.log(err);
    });
  }


  async function GetAll() {
    let url = `${process.env.REACT_APP_BASE_URL}/post/`;
    await axios.get(url).then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <>
      <div className=' min-h-[85vh]'>
        <Navbar />

        <h1 className="text-4xl ml-2 font-bold mt-5 mb-5">Data Stucture and Algorithm</h1>

        {visible &&
          <button className="btn btn-neutral ml-2 my-3" onClick={CreatePostbtn}>Create Post</button>
        }
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Post Question!</h3>
            <div className="model-action">
              <form method="model">
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="q_title" onChange={(e) => setTitle(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                  <label htmlFor="q_title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="q_description" onChange={(e) => setDescription(e.target.value)} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="q_description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descrption</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <select onChange={(e) => setDifficulty(e.target.value)} >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="repeat_password" onChange={(e) => setLink(e.target.value)} id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Link</label>
                </div>
                <button onClick={(e) => {
                  createPost();
                  GetAll();
                  
                }}className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

              </form>
            </div>
          </div>
        </dialog>

        <div className=" grid grid-cols-1 gap-5 content-center md:grid-cols-5 md:gap-12">
          {data.map((card) => (
            <div key={card.Title} className="card mx-2">
              <Link to={`/dsa/${card.Title}`}>
                <div className="card w-full md:w-96 bg-green-300 text-primary-content">
                  <div className="card-body">
                    <h2 className="card-title text-black text-2xl">{card.Title}</h2>
                    <p className="card-title text-zinc-800 text-1xl">Difficulty: {card.difficulty}</p>
                    <div className="card-actions justify-end">
                      <div className="btn">View</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
