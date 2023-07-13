import React from 'react';
import '../../assets/Style.css';
import Header from '../../Components/Navbar/Header'
import { FaArrowRight } from 'react-icons/fa';
import Imgicon from '../../assets/Imgicon';

function Home() {

  return (
    <div id='Home' className='h-screen w-full'>
      <Header/>
    <div  className="background h-full w-full flex flex-col items-center justify-center px-2 md:px-5 xl:px-32">
      <div className=" text-4xl space-y-2 mt-5 md:mt-10  font-extrabold text-center uppercase md:text-6xl xl:text-[5rem]  text-[#e8effd]">
        <h2 className='m-0 drop-shadow-lg leading-none'>open the </h2> 
        <h2 className="m-0 text-[#0d1d39] drop-shadow-lg leading-none">World </h2>
        <h2 className='m-0 drop-shadow-lg leading-none'>of offers</h2>
      </div>
      <Imgicon/>
    </div>
    </div>
  );
}

export default Home;
