import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Navbar() {
  const [user, setUser] = useState("Welcome Geek");
  const [state, setState] = useState("Login");
  const [showButton, setShowButton] = useState(false); // State for button animation

  useEffect(() => {
    CurrentUser();
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
        if (res.data) {
          setState("Logout");
          setUser("Welcome " + res.data.fname);
          setShowButton(true); // Show the button when logged in
        }
      }).catch((err) => {
        console.log(err);
      });
    }
    else {
      setState("Login");
      setUser("Welcome Geek");
      setShowButton(false); // Hide the button when logged out
    }
  }
  function LoginLogout() {
    if (state === "Login") {
      window.location.href = "/login";
    } else {
      localStorage.clear();
      window.location.href = "/";
    }
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link className="nav-link" to="/">Home </Link></li>
            <li>
              <Link className="nav-link" to="/dsa">DSA</Link>
            </li>
            <li>
              <Link className="nav-link" to="/team">Team</Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
        <img src={Logo} width="50" height="50" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link className="nav-link mx-10 text-xl font-bold" to="/">Home </Link>
          </li>
          <li>
            <Link className="nav-link mx-10 text-xl font-bold" to="/dsa">DSA</Link>
          </li>
          <li>
            <Link className="nav-link mx-10 text-xl font-bold" to="/team">Team</Link>
          </li>
          <li>
            <Link className="nav-link mx- text-xl font-bold" to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{
        showButton && (
          <Link className="navbar-text mr-4 font-semibold text-xl" to="/profile">{user} </Link>
        )
      }
        <button className="btn btn-active btn-accent my-.3 mr-1" onClick={LoginLogout}>{state}</button>
      </div>
    </div>

  )

}