import { Link } from 'react-router-dom';
import Logo from '../Assets/logo1.png';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [user, setUser] = useState("Welcome Geek");
  const [state, setState] = useState("Login");
  const [showButton, setShowButton] = useState(false); // State for button animation

  useEffect(() => {
    CurrentUser();
  }, []);

  async function CurrentUser() {
    if (localStorage.getItem('token-info')) {
      let res = await fetch("http://localhost:5000/user/current-user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + JSON.parse(localStorage.getItem('token-info')),
        },
      });
      res = await res.json();
      if (res.title === "Unauthorized") {
        localStorage.clear();
        window.location.href = "/";
      };
      if (res) {
        setState("Logout");
        setUser("Welcome " + res.fname);
        setShowButton(true); // Show the button when logged in
      }
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
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="nav-link" to="/">Home </Link>
            </li>
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
        <div className="navbar-end">
        <Link className="navbar-text mr-2">{user}</Link>
        <button className="nav-btn btn btn-primary my-.3" onClick={LoginLogout}>{state}</button>
        </div>
      </div>

  )

}