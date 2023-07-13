import React from 'react'
import aboutbg from  '../../assets/img/bg/aboutbg.jfif'
import { GoRepoForked } from 'react-icons/go'

function About() {
  return (
    <div id='About' style={{backgroundImage: `url(${aboutbg})`}} className='flex flex-col w-full h-auto xl:h-screen bg-cover py-12 md:py-12 xl:py-20 pb-5 relative lg:pb-12 bg-no-repeat bg-center items-start  px-3 lg:px-5 xl:px-32'>
      <div className='z-10 w-full h-full text-white'>
        <div className='w-full py-5 md:pt-10 xl:pt-24   relative'>
            <h2 className='text-3xl md:text-5xl text-start md:text-center lg:text-6xl xl:text-7xl font-semibold tracking-wide  bg-clip-text bg-gradient-to-r from-[#02235c] via-[#4783bc] to-[#032869] text-transparent drop-shadow-md'>`OFERGRAM`</h2>
        </div>
        <div className='w-full flex flex-wrap items-center justify-center gap-3 mg:gap-4 xl:space-y-0 xl:justify-between xl:gap-3 h-auto py-8 lg:pt-20 lg:pb-10 xl:px-10 bg-transarent'>
          <div className='space-x-1.5  w-auto border border-[#dddddd76] bg-transparent hover:bg-[#dddddd1d] shadow-sm tracking-wide h-auto p-1.5 px-4 rounded-full flex items-center justify-center'>
            <h2 className='text-sm md:text-lg shadow-md text-[#005eb8]' ><GoRepoForked/></h2>
            <h2 className='text-xs md:text-sm '>Unparalleled Selection</h2>
          </div>
          <div className=' space-x-1.5  w-auto border border-[#dddddd76] bg-transparent hover:bg-[#dddddd1d] shadow-sm tracking-wide h-auto p-1.5 px-4 rounded-full flex items-center justify-center'>
            <h2 className='text-sm md:text-lg shadow-md text-[#005eb8]' ><GoRepoForked/></h2>
            <h2 className='text-xs md:text-sm '>Exclusive Discounts</h2>
          </div>
          <div className=' space-x-1.5  w-auto border border-[#dddddd76] bg-transparent hover:bg-[#dddddd1d] shadow-sm tracking-wide h-auto p-1.5 px-4 rounded-full flex items-center justify-center'>
            <h2 className='text-sm md:text-lg shadow-md text-[#005eb8]' ><GoRepoForked/></h2>
            <h2 className='text-xs md:text-sm '>User-Friendly Interface</h2>
          </div>
          <div className=' space-x-1.5  w-auto border border-[#dddddd76] bg-transparent hover:bg-[#dddddd1d] shadow-sm tracking-wide h-auto p-1.5 px-4 rounded-full flex items-center justify-center'>
            <h2 className='text-sm md:text-lg shadow-md text-[#005eb8]' ><GoRepoForked/></h2>
            <h2 className='text-xs md:text-sm '>Trust and Reliability</h2>
          </div>
          <div className=' space-x-1.5  w-auto border border-[#dddddd76] bg-transparent hover:bg-[#dddddd1d] shadow-sm tracking-wide h-auto p-1.5 px-4 rounded-full flex items-center justify-center'>
            <h2 className='text-sm md:text-lg shadow-md text-[#005eb8]' ><GoRepoForked/></h2>
            <h2 className='text-xs md:text-sm '>Community Engagement</h2>
          </div>
        </div>
            <p className='text-xs   lg:text-sm xl:text-lg capitalize tracking-wider w-full  text-start md:text-center opacity-70'>
              At offerGram , we are dedicated to bringing you the best deals, discounts, and offers from various online platforms. We understand that finding the right deals can be time-consuming and overwhelming, so our mission is to make your shopping experience easier, more affordable, and more enjoyable.
              Our team of dedicated deal finders scours the internet to curate a wide range of offers across different categories, including electronics, fashion, home goods, beauty, travel, and more. We partner with reputable online platforms, including Amazon and other affiliate programs, to provide you with a diverse selection of products at discounted prices.</p>
      </div>
      <div className='bg-[#000] absolute opacity-70 inset-0 h-full w-full'></div>
    </div>
  )
}

export default About
