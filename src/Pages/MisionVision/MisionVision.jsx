import React from 'react'

function MisionVision() {
  return (
    <div style={{ backgroundImage: `url(${'bgabout'})` }} className='flex flex-col w-full h-full pb-12 bg-no-repeat px-2 md:px-5 xl:px-32 '>
    <h2 className='text-2xl md:text-3xl lg:text-4xl text-[#399e96] font-bold'>
        Our Methodology
        <span className='before:block before:mt-3  before:h-0.5 md:before:h-1 before:w-20 before:bg-[#4185c6]'></span>
    </h2>   
    <div  className='relative md:flex items-center text-center  md:justify-between w-full my-8 md:my-12 lg:my-16 space-y-5 md:space-y-0 md:space-x-8'>
      <div className='hover:scale-95 ease-linear cursor-pointer transition-all rounded-md p-5 md:p-6 lg:p-12 flex flex-col items-center justify-between md:border-2 border-[#4186c682] first-letter:text-center shadow-inner md:w-1/2 h-auto space-y-4 lg:space-y-6'>
        <h1 className='text-2xl md:text-3xl font-extrabold text-[#40b6ad] opacity-90 drop-shadow-xl'>Our Mission</h1>
        <p className='text-sm md:text-base tracking-wide md:leading-7 font-thin '>At DataHex, our mission is to provide tailored digital transformation and consultancy services, guiding businesses through the dynamic digital realm with innovative, client-centric solutions.</p>
      </div>
      <div className=' hover:scale-95 ease-linear cursor-pointer transition-all  rounded-md p-5 md:p-6 lg:p-12 flex flex-col items-center justify-between md:border-2 border-[#4186c682] first-letter:text-center  shadow-inner md:w-1/2 h-auto space-y-4 lg:space-y-6'>
        <h1 className='text-2xl md:text-3xl font-extrabold text-[#40b6ad] opacity-90 drop-shadow-xl'>Our Vision</h1>
        <p className='text-sm md:text-base tracking-wide md:leading-7 font-thin '>Our vision at DataHex is to be a leading digital solutions company that empowers businesses to achieve their full potential by leveraging the latest technologies and innovative digital strategies.</p>
      </div>
    </div>
</div>
  )
}

export default MisionVision

