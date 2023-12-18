import React,{useState} from 'react'
import Logo from "../Assets/Logo.png"
import Style from "../Components/Styles/Login.module.css"
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [year, setYear] = useState("");
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function login() {
  
    let item = {email,password};
    let res=await fetch("/user/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body:JSON.stringify(item)
    });
    res=await res.json();

    if(res.title==="Signin sucsessfull"){
      localStorage.setItem("token-info",JSON.stringify(res.token));
      navigate('/home');

    }
    else{
      alert("Invalid Credentials");
    }
  }
  async function createAccount(){
    let role="user";
    let info = {fname,lname,email,password,confirmPassword,role,year,enrollmentNo};
    let res=await fetch("/user/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body:JSON.stringify(info)
    });
    res=await res.json();
    if(res.messgae==="User already exists"){
      alert("User already exists");
    }
    else if(res.message==="Passwords do not match"){
      alert("Passwords do not match");
    }

    else if(res.title==="Signup successfull"){
      localStorage.setItem("token-info",JSON.stringify(res.token));
      navigate('/home');
    }
    else{
      alert("Invalid Credentials");
    }
  }

  
  return (
    <div className={Style.all}>
    <div className={Style.container}>
      <div className={Style.design}>
      <img src={Logo} alt="" />
      </div>
      <div className={Style.login}>
        <h3 className={Style.tile}>User Login</h3>
        <div className={Style.text_input}>
          <i className="ri-user-fill"></i>
          <input className={Style.inputs} type="email" placeholder="Username" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className={Style.text_input}>
          <i className="ri-lock-fill"></i>
          <input className={Style.inputs} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button className={Style.login_btn} onClick={login}>LOGIN</button>
        <Link to="/resetPassword" className={Style.forgot}>Forgot Username/Password?</Link>
        <div className={Style.create}>
          <a onClick={createAccount}>Create Your Account</a>
          <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </div>
    </div>
  )
}
