import React from 'react'

function Location() {
  return (
    <div className='px-2 md:px-5 xl:px-32 rounded-md py-8 md:py-12'>
    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold w-full text-end text-[#399e96] flex flex-col items-end'>
             Our Location
            <span className='before:block before:mt-3 before:h-0.5 md:before:h-1 before:w-20 before:bg-[#4185c6]'></span>
      </h2> 
      <iframe allowFullScreen='' className='w-full h-64 pt-8 md:pt-12 lg:h-80 rounded-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1851114853634!2d75.83148087496454!3d11.247789188931076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bbe4441e6f5%3A0x187fc127f970479b!2sDataHex%20Digital%20Solution!5e0!3m2!1sen!2sin!4v1686150462354!5m2!1sen!2sin" ></iframe>
    </div>
  )
}

export default Location
