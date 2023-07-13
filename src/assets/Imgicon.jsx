import React from 'react';
import logoicon1 from './img/icons/logoicon1.png';
import logoicon2 from './img/icons/logoicon2.png';
import logoicon3 from './img/icons/logoicon3.png';

function Imgicon() {
  const imgs = [
    { logo: logoicon1, link: 'https://spot-offers.vercel.app/' },
    { logo: logoicon2, link: '#' },
    { logo: logoicon3, link: 'https://www.instagram.com/_spotoffers_/' },
  ];

  return (
    <div className='flex space-x-3 md:space-x-5 pt-5 z-10'>
      {imgs.map((img, index) => (
        <a href={img.link} key={index}>
          <img
            className='w-10 p-1.5 rounded-xl border-0 bg-white bg-opacity-90 shadow-sm brightness-75 inner-shadow hover:scale-105 transition-all'
            src={img.logo}
            alt=''
          />
        </a>
      ))}
    </div>
  );
}

export default Imgicon;
