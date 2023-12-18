import React from 'react';
import Navbar from '../Components/Navbar';
import '../Components/Styles/Home.css';
import Footer from '../Components/Footer';
import EventCard from '../Components/EventCard';
import { event1img } from '../Components/EventImages';
import { event2img } from '../Components/EventImages';
import PrevEventCard from '../Components/PrevEventCard';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Home() {

  const slideLeft = () =>
  {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 600;
  };
  const slideRight = () =>
  {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 600;
  };

  return (
    <div>
      <Navbar />
      <div className="wrapper p-4">
        <p className="line__1">Conquering <span className="green-text">DSA.</span></p>
        <p className="line__2">Creating with <span className="green-text">Web-Dev.</span></p>
        <p className="line__3">Daily <span className="green-text">Tech-Bytes.</span></p>
        <p className="line__4">Peer to Peer <span className="green-text">Learning.</span></p>
      </div>

      <h2 className='text-gray-700 text-3xl font-bold p-4 mt-2 ml-4'>Events </h2>

      <div className='flex items-center'>
      <IoIosArrowBack onClick={slideLeft} size={35} className='opacity-50 cursor-pointer hover:opacity-100'/>
      <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>

        <div id='cards' className="mt-10 mb-10 flex items-center">
        <EventCard />
        <PrevEventCard images={event1img} text="Geek of the Month(JAN 2023)" />
        <PrevEventCard images={event2img} text="C++ Worshop"/>
        <PrevEventCard images={event1img} text="DSA Boot Camp" />

        </div>

      </div>
      <IoIosArrowForward onClick={slideRight} size={35} className='opacity-50 cursor-pointer hover:opacity-100'/>
      </div>    
    
    </div>
  );
}
