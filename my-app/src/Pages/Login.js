import React, { useState } from 'react'
import Logo from "../Assets/Logo.png"
import {useNavigate } from 'react-router-dom';
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
    year: "1",
    enrollmentNo: "",
    role: "user"
  });
  const navigate = useNavigate();
  const[loginview,setloginview]=useState(true);
  const toggleVisibility = () => {
    setloginview(!loginview);
  };

  const handleChangesignin = (e) => {
    setSigninUser({ ...SigninUser, [e.target.name]: e.target.value });
  };

  const handleChangeSignup = (e) => {
    setSignupUser({ ...SignupUser, [e.target.name]: e.target.value });
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
    console.log(SignupUser);
    await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/user/signup`, {
      ...SignupUser
    }).then((res) => {
      if (res.data.messgae === "User already exists") {
        alert("User already exists");
      }
      else if (res.data.message === "Passwords do not match") {
        alert("Passwords do not match");
      }
      else if (res.data.title === "Signup successfull") {
        localStorage.setItem("token-info", JSON.stringify(res.data.token));
        navigate('/');  
      }
      else if(res.data.title==="Validation Error"){
        alert("Error:"+res.data.message )
      }
    }).catch((err) => {
      console.log(err);
    });
  }


  return (
    <div className="h-screen flex justify-center items-center bg-[#5BAA68]">
      <div className="md:w-1/2 mx-2  md:h-[60vh]  grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-3xl bg-white overflow-hidden ">
        <div className='flex justify-center items-center w-full h-full'>
          <img src={Logo} className='align-middle' alt="" />
        </div>
        {
        loginview?(
        //Login Page
        <div className="flex flex-col items-center justify-center relative bg-white">
          <form onSubmit={handleSignin} className='w-full flex flex-col items-center'>
            <div className='text-xl '> User Login</div>
            <div className="flex w-72 h-10 items-center rounded-md px-4 my-2 bg-[#e6e6e6]">
              <i className="ri-user-fill"></i>
              <input className="bg-transparent border-none outline-none w-full h-full ml-1" type="email" name='email' placeholder="Username" onChange={handleChangesignin} />
            </div>
            <div className="flex w-72 h-10 items-center rounded-md px-4 my-2 bg-[#e6e6e6]">
              <i className="ri-lock-fill"></i>
              <input className="bg-transparent border-none outline-none w-full h-full ml-1" type="password" name='password' placeholder="Password" onChange={handleChangesignin} />
            </div>
            <button className="w-72 p-2 text-white bg-gradient-to-r from-[#0c9c24] to-[#8bec5d] border-none rounded-full cursor-pointer mt-4" type='submit' >LOGIN</button>
          </form>
          <button className="mt-5">Forgot Username/Password?</button>
          <div className="flex items-center md:absolute md:bottom-10 mt-5 mb-2">
            <button onClick={toggleVisibility}>Create Your Account</button>
            <i className="ri-arrow-right-fill"></i>
          </div>
        </div>
        ):(
          // Sign up Page
        <div className="flex flex-col items-center justify-center relative bg-white">
          <form onSubmit={handleSignup} className='w-full flex flex-col items-center'>
            <div className='text-xl '> User Signup</div>
            <div className='flex w-72 h-10 my-2'>
            <div className="items-center h-10 rounded-md px-4  bg-[#e6e6e6] mr-2">
              <i className="ri-user-fill"></i>
              <input className="bg-transparent border-none outline-none w-full h-full ml-1" type="text" name='fname' placeholder="First name" onChange={handleChangeSignup} required/>
            </div>
            <div className=" items-center h-10 rounded-md px-4  bg-[#e6e6e6]">
              <i className="ri-user-fill"></i>
              <input className="bg-transparent border-none outline-none w-full h-full ml-1" type="text" name='lname' placeholder="Lastname" onChange={handleChangeSignup} required />
            </div>
            </div>
            <div className="flex w-72 h-10 items-center rounded-md px-4 my-2 bg-[#e6e6e6]">
              <i className="ri-lock-fill"></i>
              <input className="bg-transparent border-none outline-none w-full h-full ml-1" type="email" name='email' placeholder="Email" onChange={handleChangeSignup} required/>
            </div>
            <div className="flex w-72 h-10 items-center rounded-md px-4 my-2 bg-[#e6e6e6]">
              <i className="ri-lock-fill"></i>
              <input className="bg-transparent border-none outline-none w-full h-full ml-1" type="password" name='password' placeholder="Password" onChange={handleChangeSignup} required />
            </div>
            <div className="flex w-72 h-10 items-center rounded-md px-4 my-2 bg-[#e6e6e6]">
              <i className="ri-lock-fill"></i>
              <input className="bg-transparent border-none outline-none w-full h-full ml-1" type="password" name='confirmPassword' placeholder="Confirm Password" onChange={handleChangeSignup} required/>
            </div>
            <div className="flex w-72 h-10 items-center rounded-md px-4 my-2 bg-[#e6e6e6]">
              <i className="ri-lock-fill"></i>
              {/* <input className="bg-transparent border-none outline-none w-full h-full ml-1" type="number" name='year' placeholder="Year" onChange={handleChangeSignup} required /> */}
              <select className='bg-transparent border-none outline-none w-full h-full ml-1' name="year" defaultValue="1" required onChange={handleChangeSignup} >
                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>
                  <option value="3">Third Year</option>
                  <option value="4">Fourth Year</option>
                  <option value="5">Fifth Year</option>
              </select>
            </div>
            <div className="flex w-72 h-10 items-center rounded-md px-4 my-2 bg-[#e6e6e6]">
              <i className="ri-lock-fill"></i>
              <input className="bg-transparent border-none outline-none w-full h-full ml-1" type="text" name='enrollmentNo' placeholder="Enrollment No" onChange={handleChangeSignup} required />
            </div>
            <button className="w-72 p-2 text-white bg-gradient-to-r from-[#0c9c24] to-[#8bec5d] border-none rounded-full cursor-pointer mt-4" type='submit' >Signup</button>
          </form>
          <button  className="mt-5">Forgot Username/Password?</button>
          <div className="flex items-center md:absolute md:bottom-5 mt-5 mb-2">
            <button onClick={toggleVisibility}>Already have an Account?</button>
            <i className="ri-arrow-right-fill"></i>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
