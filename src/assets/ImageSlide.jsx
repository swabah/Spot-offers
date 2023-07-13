import React, { useState, useEffect } from 'react';
import './Style.css';
import homImg1 from './img/portfolio/one.jpg';
import homImg2 from './img/portfolio/two.jpg';
import homImg3 from './img/portfolio/three.jpg';
import homImg4 from './img/portfolio/four.jpg';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';

function ImageSlide() {
  const images = [homImg1, homImg2, homImg3, homImg4];
  const number = ['1', '2', '3', '4'];
  const contents = [
    'Deal Aggregation',
    'Exclusive Discounts',
    'User-Friendly Interface',
    'Community Engagement and Reviews',
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const playNext = () => {
    setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
  };

  const playPrev = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? images.length - 1 : prevCurrent - 1));
  };

  return (
    <div className="w-full h-auto">
      {images.map((slide, index) => (
        <div key={index}>
          {index === current && (
            <div className="rounded-sm w-full relative cursor-pointer bg-white">
              <img
                src={slide}
                className="w-full shadow-lg shadow-indigo-100 rounded-sm h-72 lg:h-96 object-cover brightness-50 bg-center"
                id="slidingImage"
                alt={`Slide ${index + 1}`}
              />
              {number.map((num, i) => (
                current === i && (
                  <h2
                    className="absolute font-extrabold text-4xl lg:text-5xl text-white right-3 lg:right-3 lg:bottom-1.5 brightness-150 opacity-70 bottom-1.5"
                    key={i}
                  >
                    {num}
                  </h2>
                )
              ))}
              <div className="rounded-sm w-full h-full bg-black opacity-40 z-10 absolute top-0"></div>
              {contents.map((content, i) => (
                current === i && (
                  <div
                    className="absolute flex space-y-1 md:space-y-2 flex-col inset-0 z-10 items-center text-center md:text-start justify-center w-full h-full"
                    key={i}
                  >
                    <div className="relative flex items-center justify-center space-x-1">
                      <span onClick={playPrev} className="text-white text-lg md:text-2xl">
                        <CgPlayTrackPrev />
                      </span>
                      <h1 className="text-[#eee] text-sm md:text-base opacity-80 z-10">Our services</h1>
                      <span onClick={playNext} className="text-white text-lg md:text-2xl">
                        <CgPlayTrackNext />
                      </span>
                    </div>
                    <h2 className="text-xl lg:text-4xl opacity-90 tracking-wider font-extrabold text-[#ffff] uppercase">
                      {content}
                    </h2>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImageSlide;
