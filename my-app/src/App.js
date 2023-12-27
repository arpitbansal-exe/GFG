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
  return (
    <BrowserRouter>

      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="dsa" element={<DSA />} />
        <Route path="team" element={<Team />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<EventRegister />} />
        <Route path="/dsa/:Title" element={<DSADetail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
        <footer>
          <Footer />
        </footer>
    </BrowserRouter>
  );
};

export default App;
