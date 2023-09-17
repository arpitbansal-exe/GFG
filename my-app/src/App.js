
import React from "react";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import Team from "./Components/Team";
import Login from "./Components/Login";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="team" element={<Team />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>   
    </>
    
  );
}

export default App;
