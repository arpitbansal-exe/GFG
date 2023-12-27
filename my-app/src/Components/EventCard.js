import React from 'react';

const EventCard = () => {
  return (
    <div
    className='event-card w-max-full h-[220px] m-4 rounded-2xl shadow-xl relative flex-shrink-0 '
    style={{ backgroundImage: 'url("https://i.pinimg.com/564x/c0/14/8a/c0148aceb11f270a2455c741248baae0.jpg")', backgroundSize: 'cover' }}
  >
      <div className='title font-bold text-[#FFFBF5]  text-xl mt-5 ml-5' style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}> Upcoming Events</div>
      <button className='w-32 h-10 flex-shrink-0 rounded-full bg-white bg-opacity-80 font-bold absolute bottom-5 right-5 hover:scale-105 hover:shadow-md'>Register Now</button>
    </div>
  );
}

export default EventCard;
