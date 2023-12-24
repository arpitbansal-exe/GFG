import React from 'react';
import '../Components/Styles/Home.css';
import EventCard from '../Components/EventCard';
import { event1img } from '../Components/EventImages';
import { event2img } from '../Components/EventImages';
import PrevEventCard from '../Components/PrevEventCard';

export default function Home() {
  return (
    <div className='min-h-[65vh] max-w-full'>
        <div className="wrapper p-4">
          <p className="line__1">Conquering <span className="green-text">DSA.</span></p>
          <p className="line__2">Creating with <span className="green-text">Web-Dev.</span></p>
          <p className="line__3">Daily <span className="green-text">Tech-Bytes.</span></p>
          <p className="line__4">Peer to Peer <span className="green-text">Learning.</span></p>
        </div>

        <div className='text-gray-700 text-3xl font-bold p-4 mt-2 ml-4'>Events </div>

        <div className='grid grid-cols-1  gap-1 md:grid-cols-4'>
          <EventCard />
          <PrevEventCard images={event1img} text="Geek of the Month(JAN 2023)" />
          <PrevEventCard images={event2img} text="C++ Worshop" />
          <PrevEventCard images={event1img} text="DSA Boot Camp" />

        </div>
      </div>
  );
}
