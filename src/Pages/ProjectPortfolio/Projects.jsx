import React from 'react'
import ImageSlide from '../../assets/ImageSlide'

function Projects() {
  return (
    <div id='Project' className='px-2 md:px-5 xl:px-32 h-screen md:pb-12 w-full'>
      {/* <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold w-full text-end text-[#399e96] flex flex-col items-end'>
             Introducing Project Portfolio
            <span className='before:block before:mt-3 before:h-0.5 md:before:h-1 before:w-20 before:bg-[#4185c6]'></span>
      </h2>  */}
      <h2 className='text-2xl md:text-3xl lg:text-4xl mt-20 font-semibold tracking-wide'>Project Portfolio</h2>
      <div className="w-full h-auto pt-8 md:py-14">
      <ImageSlide/>
      </div>
    </div>
  )
}

export default Projects
