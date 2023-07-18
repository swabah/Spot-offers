import React, { useState } from 'react';
import logoicon1 from './img/icons/logoicon1.png';
import logoicon2 from './img/icons/logoicon2.png';
import logoicon3 from './img/icons/logoicon3.png';
import logoicon4 from './img/icons/Whatsapp.png';
import { FaShare } from 'react-icons/fa';

function Imgicon() {
  const imgs = [
    { logo: logoicon4, link: 'https://www.instagram.com/_spotoffers_/', title:'Whatsapp'  , Con:'Join our Community'  },
    { logo: logoicon2, link: '#' ,title:'Telegram'  , Con:'Join our channel' },
    { logo: logoicon1, link: 'https://spot-offers.vercel.app/' , title:'Website' , Con:'Purchase From Site' },
    { logo: logoicon3, link: 'https://www.instagram.com/_spotoffers_/', title:'instagram'  , Con:'Follow in instagram'  },
  ];

  const [fix, setfix] = useState(false);
  const Navfix = () =>{
     if (window.scrollY >= 10) {
       setfix(true)
     }else (
       setfix(false)
     ) 
  }
  window.addEventListener('scroll' , Navfix)

  return (
    <div className={`grid grid-cols-4  sm:pt-5 md:py-5 gap-x-2 md:gap-4 w-full  z-10 `}>
      {imgs.map((item, index) => (
        <div className={`w-autobg-[#005fb80b] xs:p-1.5 xs:px-3 sm:p-2.5 sm:px-4  p-4 px-6 rounded-md shadow-md flex h-full items-center hover:shadow-xl  transition-all cursor-pointer hover:bg-[#005fb83b] bg-[#005fb81f] hover:scale-95 duration-300 space-x-3 xl:space-x-5 justify-center   `}>
            <a href={item.link}>
            <img
              className='xs:w-7 xs:h-7 sm:w-8 sm:h-8 w-10 h-10 object-cover shadow-sm hover:scale-105 transition-all'
              src={item.logo}
              alt=''
              />
            </a>
            <div className={`hidden md:flex text-[#005eb8] opacity-80 brightness-75 flex-col items-start w-auto justiyf-start h-full`} >
              <h2 className='text-base lg:text-xl  font-semibold flex items-center gap-2'>{item.title} <span className='opacity-40 text-lg  font-thin'> <FaShare/></span></h2>
              <p className='text-xs  lg:text-sm  font-medium'>{item.Con}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Imgicon;
