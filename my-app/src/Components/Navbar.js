import { Link } from 'react-router-dom'
import Logo from '../Assets/logo.jpeg'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import Logo from '../Assets/logo1.png';
import React, { useEffect, useState } from 'react';
import './Styles/Navbar.css'; // Import the CSS file

export default function Navbar() {
  const [user, setUser] = useState("Welcome Geek");
  const [state, setState] = useState("Login");
  const [showButton, setShowButton] = useState(false); // State for button animation

<<<<<<< HEAD
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            setState("Logout");
            setUser("Welcome " + JSON.parse(localStorage.getItem('user-info')).name);
        }
        else {
            setState("Login");
            setUser("Welcome Geek");
        }
    }, [])
    function LoginLogout() {
        if (state === "Login") {
            window.location.href = "/login";
        }
        else {

            localStorage.clear();
            window.location.href = "/";
            alert("Logout Sucessfull");

        }
=======
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      setState("Logout");
      setUser("Welcome " + JSON.parse(localStorage.getItem('user-info')).name);
      setShowButton(true); // Show the button when logged in
    } else {
      setState("Login");
      setUser("Welcome Geek");
      setShowButton(true); // Show the button when logged out
>>>>>>> f931b8c3f25dac13a24300a806cbe055c1e4bf32
    }
  }, []);

  function LoginLogout() {
    if (state === "Login") {
      window.location.href = "/login";
    } else {
      localStorage.clear();
      window.location.href = "/";
    }
  }

<<<<<<< HEAD
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light p-0" style={{ backgroundColor: '#e3f2fd' }} >
                <Link className="navbar-brand" style={{ marginLeft: 5 }} to="/">
                    <img src={Logo} width="50" height="50" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/dsa">DSA</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/team">Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        
                        <li className="nav-item mx-3 my-.5 ">
                            <p className="navbar-text">{user}</p>
                        </li>
                        <li class="nav-item ">
                            <button className="nav-btn btn btn-primary my-.3" onClick={LoginLogout}>{state}</button>
                        </li>    
                    </ul>
                    
                        

            </div>

                
            </nav>


        </>
    )
=======
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={Logo} width="50" height="50" alt="" />
          <span className="separator">|</span> {/* Add separator */}
          <span className="brand-text">GeeksforGeeks</span> {/* Permanent text */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto"> {/* Align to the right using ml-auto */}
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">{user}</Link>
            </li>
            <li className={`nav-item ${showButton ? 'fade-in' : ''}`}>
              <Link className="nav-link login-button" onClick={LoginLogout}>
                {state}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
>>>>>>> f931b8c3f25dac13a24300a806cbe055c1e4bf32
}
