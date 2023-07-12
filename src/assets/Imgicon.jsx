import React from 'react';
import logoicon1 from './img/icons/logoicon1.png';
import logoicon2 from './img/icons/logoicon2.png';
import logoicon3 from './img/icons/logoicon3.png';

function Imgicon() {
  const imgs = [
    { logo: logoicon1, link: 'https://datahex.in/' },
    { logo: logoicon2, link: '' },
    { logo: logoicon3, link: 'https://www.instagram.com/data.hex/' },
  ];

  return (
    <div className='flex md:flex-col space-x-3 md:space-x-0 md:space-y-10 z-10'>
      {imgs.map((img, index) => (
        <a href={img.link} key={index}>
          <img
            className='w-10 p-1.5 rounded-xl border-2 bg-white inner-shadow hover:scale-105 transition-all'
            src={img.logo}
            alt=''
          />
        </a>
      ))}
    </div>
  );
}

export default Imgicon;
