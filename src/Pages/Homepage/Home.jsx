import React from 'react';
import '../../assets/Style.css';
import Header from '../../Components/Navbar/Header';
import bgBag from '../../assets/img/bg/bgBag.png';

const Home = () => {
  return (
    <div id='Home' className='h-[100vh] py-3 lg:py-5 w-full'>
      <Header />
      <div className="h-full w-full flex justify-center items-center px-3 md:px-10 lg:px-10 xl:px-32">
        <div className="text-4xl w-full h-full flex flex-col md:flex-row justify-center items-center gap-y-5 md:gap-y-0 lg:pb-20 font-extrabold text-start text-[#e8effd]">
        <div className='w-full md:w-1/2 flex flex-col items-center text-center md:text-start md:items-start text-[#0d1d39] justify-center gap-3 lg:gap-10'>
          <div className='w-auto drop-shadow-lg tracking-wide md:tracking-wider leading-snug uppercase text-5xl lg:text-6xl xl:text-7xl md:space-y-3'>
              <h1>open the</h1>
              <h1> World of </h1>
              <h1 className='bg-[#030a19] text-white w-auto px-1 md:p-1 md:px-3'>Offers</h1>
            </div>
            <p className='text-sm md:text-xl tracking-wide opacity-80'>Wide Range of Choices</p>
          </div>
          <div className='w-auto md:w-1/2 h-auto px-5 md:px-0'>
            <img src={bgBag} className='w-full h-full bgBag-bounce' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
