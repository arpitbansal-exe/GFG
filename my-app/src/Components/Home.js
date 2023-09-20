import React from 'react';
import Navbar from './Navbar';
import './Styles/Home.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <p className="line__1">Conquering <span className="green-text">DSA.</span></p>
        <p className="line__2">Creating with <span className="green-text">Web-Dev.</span></p>
        <p className="line__3">Daily <span className="green-text">Tech-Bytes.</span></p>
        <p className="line__4">Peer to Peer <span className="green-text">Learning.</span></p>
      </div>
    </div>
  );
}
