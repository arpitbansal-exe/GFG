
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


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="dsa" element={<DSA/>} />
          <Route exact path="team" element={<Team />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="register" element={<EventRegister />} />


          <Route exact path="/dsa/:Title" element={<DSADetail />} />
          <Route path="*" element={<NoPage />} />
          
      </Routes>
      <Footer />
    </BrowserRouter>   
    
    </>
    
  );
}

export default App;
