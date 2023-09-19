import { Link } from 'react-router-dom';
import Logo from '../Assets/logo1.png';
import React, { useEffect, useState } from 'react';
import './Styles/Navbar.css'; // Import the CSS file

export default function Navbar() {
  const [user, setUser] = useState("Welcome Geek");
  const [state, setState] = useState("Login");
  const [showButton, setShowButton] = useState(false); // State for button animation

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      setState("Logout");
      setUser("Welcome " + JSON.parse(localStorage.getItem('user-info')).name);
      setShowButton(true); // Show the button when logged in
    } else {
      setState("Login");
      setUser("Welcome Geek");
      setShowButton(true); // Show the button when logged out
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
}
