import React, { useState } from 'react'
import Logo from "../Assets/Logo.png"
import Style from "../Components/Styles/Login.module.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Login() {


  const [SigninUser, setSigninUser] = useState({
    email: "",
    password: ""
  });
  const [SignupUser, setSignupUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    year: "",
    enrollmentNo: "",
    role: "user"
  });

  const navigate = useNavigate();

  const handleChangesignin = (e) => {
    setSigninUser({ ...SigninUser, [e.target.name]: e.target.value });
  };

  const handleChangeSignup = (e) => {
    setSigninUser({ ...SigninUser, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/user/signin`, {
      ...SigninUser
    }
    ).then((res) => {
      if (res.data.title === "Signin sucsessfull") {
        localStorage.setItem("token-info", JSON.stringify(res.data.token));
        navigate('/');
      }
      else {
        alert("Invalid Credentials");
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/user/signup`, {
      ...setSignupUser
    }).then((res) => {
      if (res.data.messgae === "User already exists") {
        alert("User already exists");
      }
      else if (res.data.message === "Passwords do not match") {
        alert("Passwords do not match");
      }
      else if (res.data.title === "Signup successfull") {
        localStorage.setItem("token-info", JSON.stringify(res.token));
        navigate('/home');
      }
      else {
        alert("Invalid Credentials");
      }


    }).catch((err) => {
      console.log(err);
    });
  }


  return (
    <div className={Style.all}>
      <div className={Style.container}>
        <div className={Style.design}>
          <img src={Logo} alt="" />
        </div>
        <div className={Style.login}>

          {/* Login Form */}
          <form onSubmit={handleSignin} className='w-full flex flex-col items-center'>
          <h3 className={Style.tile}>User Login</h3>
            <div className={Style.text_input}>
              <i className="ri-user-fill"></i>
              <input className={Style.inputs} type="email" name='email' placeholder="Username" onChange={handleChangesignin} />
            </div>
            <div className={Style.text_input}>
              <i className="ri-lock-fill"></i>
              <input className={Style.inputs} type="password" name='password' placeholder="Password" onChange={handleChangesignin} />
            </div>
            <button className={Style.login_btn} type='submit' >LOGIN</button>
          </form>
          <Link to="/resetPassword" className={Style.forgot}>Forgot Username/Password?</Link>
          <div className={Style.create}>
            {/* <Link onClick={createAccount}>Create Your Account</Link>
            <i className="ri-arrow-right-fill"></i> */}
          </div>
        </div>
      </div>
    </div>
  )
}
