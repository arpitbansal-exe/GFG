
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Assets/Logo.png"
import "./Styles/Login.css"


import { useNavigate } from 'react-router-dom';
export default function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('user-info')){

      navigate('/home');
    }
  }, [])

  async function login() {
  
    let item = {email,password};
    console.warn(item);
    let res=await fetch("http://localhost:5000/user/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body:JSON.stringify(item)
    });
    res=await res.json();

    if(res.title=="Signin sucsessfull"){
      localStorage.setItem("user-info",JSON.stringify(res));
      navigate('/home');

    }
    else{
      alert("Invalid Credentials");
    }
  }


  return (
    <div className="container">
      <div className="design">
      <img src={Logo} alt="" />
      </div>
      <div className="login">
        <h3 className="title">User Login</h3>
        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input type="email" placeholder="Username" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button className="login-btn" onClick={login}>LOGIN</button>
        <a href="#" className="forgot">Forgot Username/Password?</a>
        <div className="create">
          <a href="#">Create Your Account</a>
          <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </div>
  )
}
