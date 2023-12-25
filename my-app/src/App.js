
import React from "react";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Team from "./Pages/Team";
import Login from "./Pages/Login";
import About from "./Pages/About";
import DSA from "./Pages/DSA";
import DSADetail from "./Pages/DSADetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Profile from "./Pages/Profile";
import Footer from "./Components/Footer";
import EventRegister from "./Pages/EventRegister";
import Navbar from "./Components/Navbar";


const App = () => {
  const isLoginPage = window.location.pathname === '/login';

  return (
    <BrowserRouter>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="dsa" element={<DSA />} />
        <Route exact path="team" element={<Team />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="profile" element={<Profile />} />
        <Route exact path="register" element={<EventRegister />} />
        <Route exact path="/dsa/:Title" element={<DSADetail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </BrowserRouter>
  );
};

export default App;
