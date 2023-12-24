import React, { useEffect, useState } from 'react'
import axios from 'axios';
import QuestionCard from '../Components/QuestionCard';
import QuestionTable from '../Components/QuestionTable';
export default function DSA() {
  const [admin, setadmin] = useState("NO");
  const [visible, setvisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState([]);
  const [TableView, setTableView] = useState(true);
  const [Filter_Diff, setFilterDiff] = useState("all");
  useEffect(() => {
    CurrentUser();
    GetAll();
  }, []);
  async function CurrentUser() {
    if (localStorage.getItem('token-info')) {
      await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/user/current-user`, {
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
    await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/post/create`, {
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
    let url = `${process.env.REACT_APP_SERVER_BASE_URL}/post/`;
    await axios.get(url).then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }
  function toggleList() {
    TableView ? setTableView(false) : setTableView(true)
  }
  return (
    <>
      <div className=' min-h-[85vh]'>

        <h1 className="text-4xl ml-2 font-bold mt-5 mb-5">Data Stucture and Algorithm</h1>

        {visible &&
          <button className="btn btn-neutral ml-10 my-3" onClick={CreatePostbtn}>Create Post</button>
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
                  <input type="text" name="floating_repeat_password" onChange={(e) => setLink(e.target.value)}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Link</label>
                </div>
                <button onClick={(e) => {
                  createPost();
                  GetAll();

                }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

              </form>
            </div>
          </div>
        </dialog>


        <div className='flex flex-row mx-10 my-3'>

          <select className="select select-bordered" onChange={(e) => setFilterDiff(e.target.value)} defaultValue="difficulty">
            <option disabled value="difficulty">Difficulty</option>
            <option value="all">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <div className='justify-end'>
            <div className="w-24 ml-5">
              <label htmlFor='Table/Card' className="cursor-pointer label">
                {TableView ?
                  <div className="label-text">Table</div>
                  :
                  <div className="label-text">Card</div>
                }
                <input type="checkbox" name='Table/Card' className="toggle toggle-accent" onClick={toggleList} />
              </label>
            </div>
          </div>

        </div>



        {TableView ?

          <div className="mx-5">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className='text-center'>
                  <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Difficulty</th>
                    <th>Solve</th>
                    <th>Discuss</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  {data.filter((item) => {
                    return Filter_Diff === 'all' ?
                      item
                      :
                      item.difficulty === String(Filter_Diff)
                  }).map((card, index) => (
                    <QuestionTable key={index} index={index} {...card} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          :
          <div className="mx-5 grid grid-cols-1 gap-3 content-center md:grid-cols-5 md:gap-3 max-w-full">
            {data.filter((item) => {
              return Filter_Diff === 'all' ?
                item
                :
                item.difficulty === String(Filter_Diff)
            }).map((card, index) => (
              <QuestionCard key={index} {...card} />
            ))}
          </div>
        }


      </div>
    </>
  )
}
