import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
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
    let item = {Title};
    let ques =await fetch("/post/getpost",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body:JSON.stringify(item)
    });
    ques=await ques.json();
     setData(ques);
    setComments(ques.comments); 
  }

  if (!data) {
    return <div>Not found</div>;
  }

  async function addComment() {
    if(localStorage.getItem("token-info")==null){
      alert("Please Login First");
      return;
    }
    
    let postId=data._id;
    let item = {postId,text};
    let res=await fetch("/post/comment",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization":"Bearer "+JSON.parse(localStorage.getItem('token-info')).token
      },
      body:JSON.stringify(item)
    });
    res=await res.json();
    if(res.title==="comment added"){
      alert("Comment Added Successfully");
    }
    else{
      alert("Error Occured");
    }
    Get();
  }
  return (
    <>
    <Navbar/>

    <div className="card-detail">
      <h3>Title: {data.Title}</h3>
      <h4>Description: {data.Description}</h4>
      <h4>Difficulty: {data.difficulty}</h4>

      <Link to={data.link} target='_blank'>Solve Now</Link>
    </div>
    <br /><br />
    <div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"onChange={(e) => setText(e.target.value)} />
      <button class="btn btn-accent btn-outline" onClick={addComment}>post</button>
    </div>

    <br/><br/>
    <h1>Comments</h1>
    <div className="list">
      {Comments.map((card) => (
        <span className="card">
            <h6>TEXT: {card.text}</h6>
            <h6>Posted BY: {card.postedBy}</h6>

        </span>
      ))}
    </div>

    </>
  );
}
export default CardDetail;

