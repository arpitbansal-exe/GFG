import React from 'react';

const EventCard = () => {
  return (
    <div className='event-card bg-green-700 w-max-full h-[220px] m-4 rounded-2xl shadow-xl shadow-gray-300 relative flex-shrink-0 hover:shadow-2xl hover:shadow-gray-400' >
      <div className='title font-bold text-white text-xl mt-5 ml-5'>Upcoming Events</div>
      <button className='w-32 h-10 flex-shrink-0 rounded-full bg-white bg-opacity-80 font-bold absolute bottom-5 right-5 hover:scale-105 hover:shadow-md'>Register Now</button>
    </div>
  );
}

export default EventCard;
