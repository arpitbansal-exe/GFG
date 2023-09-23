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
    if(localStorage.getItem("user-info")==null){
      alert("Please Login First");
      return;
    }
    
    let postId=data._id;
    let postedBy=JSON.parse(localStorage.getItem('user-info')).fname

    let item = {postId,text,postedBy};
    let res=await fetch("/post/comment",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
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
      <input type="text" placeholder='Enter a comment' onChange={(e) => setText(e.target.value)}/>
      <button onClick={addComment}>Add Comment</button>
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

