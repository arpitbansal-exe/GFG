import React from 'react';
import Navbar from './Navbar';
import './Styles/Home.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div class="wrapper">
        <p class="line__1">Conquering <span class="green-text">DSA.</span></p>
        <p class="line__2">Creating with <span class="green-text">Web-Dev.</span></p>
        <p class="line__3">Daily <span class="green-text">Tech-Bytes.</span></p>
        <p class="line__4">Peer to Peer <span class="green-text">Learning.</span></p>
      </div>
    </div>
  );
}
