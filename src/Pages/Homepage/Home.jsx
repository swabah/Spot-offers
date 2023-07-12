import React from 'react';
import '../../assets/Style.css';
import Header from '../../Components/Navbar/Header'
import { FaArrowRight } from 'react-icons/fa';

function Home() {

  return (
    <div className='h-screen w-full'>
      <Header/>
    <div className="background h-full w-full flex flex-col items-center justify-center px-2 md:px-5 xl:px-32">
      <div className=" text-5xl space-y-2 mt-5 md:mt-10  font-extrabold text-center uppercase tracking-wide md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
        <h2 className='drop-shadow-lg'>open the </h2> 
        <h2 className="text-[#0d1d39] drop-shadow-lg">World </h2>
        <h2 className='drop-shadow-lg'>of offers</h2>
      </div>
      {/* <div  className="border-t-4 border-[#0d1d39]  w-64 md:w-80 xl:w-96  flex items-center bg-[#0d1d393a] relative">
        <div
          className="w-full p-3 md:p-3 bg-transparent placeholder:font-thin placeholder:text-sm md:placeholder:text-base border-0 outline-0 text-[hsl(218,81%,95%)] font-bold md:tracking-wider"
          placeholder="Subscribe to our newsletter"
        />
        
        <div
          type="submit"
          className="absolute right-0 md:right-3 md:text-xl p-1 md:p-2 active:bg-gray-100 active:text-black active:bg-opacity-20 cursor-pointer text-white brightness-75 font-thin"
        >
          <FaArrowRight />
        </div>
      </div> */}
    </div>
    </div>
  );
}

export default Home;
