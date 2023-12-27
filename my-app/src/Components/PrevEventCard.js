import React, {useEffect, useState} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PrevEventCard = ({ images, text }) => {

    
    var imgarray = images;

    const[current,setcurrent]=useState(0);
    const [isHovered, setIsHovered] = useState(false);

    
    
    const slideRight=()=>{
      setcurrent(current=== imgarray.length -1? 0 : current+1)
    };
    const slideLeft=()=>{
      setcurrent(current===0 ? imgarray.length -1 : current-1)
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
      
    const handleMouseLeave = () => {
        setIsHovered(false);
        setcurrent(0);
    };

    useEffect(() =>{
        if (isHovered){
        const slideInterval = setInterval(slideRight, 3000)
        return () => clearInterval(slideInterval)
        }
    })
    return (
        <div className='w-max-full h-[220px] m-4 rounded-2xl shadow-xl relative flex-shrink-0' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div style={{backgroundImage: `url(${imgarray[current].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '>

            <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-100 hover:opacity-0 " >
                <div className='title font-bold text-[#FFFBF5] text-xl mt-5 ml-5' style={{ textShadow: '1px 1px 3px rgba(50, 50,50, 0.8)' }}>{text}</div>
            </div> 
                
            </div>

            <div>
            <button>
                <IoIosArrowBack onClick={slideLeft} size={30} className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-3 text-xl rounded-full p-1 bg-black/20 text-white cursor-pointer '/>
            </button>

            <button>
                <IoIosArrowForward onClick={slideRight} size={30} className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 text-xl rounded-full p-1 bg-black/20 text-white cursor-pointer '/>
            </button>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {imgarray.map((_,i) =>(
                        <div onClick={() => setcurrent(i)} key={i} className={
                            `transition-all w-2 h-2 bg-white rounded-full
                            ${current === i ? "p-1.5":"bg-opacity-50"}`
                        }/>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default PrevEventCard;
