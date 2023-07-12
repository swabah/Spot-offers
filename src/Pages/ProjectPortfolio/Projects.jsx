import React from 'react'
import ImageSlide from '../../assets/ImageSlide'
import { GoInfo } from 'react-icons/go'

function Projects() {
  return (
    <div id='Project' className='px-2 md:px-5 xl:px-32 h-auto py-12 md:py-16 lg:py-24 w-full'>
      <h2 className='text-2xl text-[#0d1d39] md:text-3xl lg:text-4xl  font-semibold tracking-wide'>Project Portfolio</h2>
      <div className="w-full h-full py-8 md:py-14">
      <ImageSlide/>
      </div>
      <hr />
      <div className='w-full h-full pt-8 md:pt-14'>
        <h2 className='text-2xl text-[#0d1d39] md:text-3xl lg:text-4xl font-semibold tracking-tight'>Why Choose Spot Offers?</h2>
        <ul className='mt-5 lg:mt-10 w-full h-full text-start space-y-2 md:space-y-4 font-medium text-sm md:text-lg lg:text-xl'>
          <li className='text-[#0d1d39]'> <span className='text-[#000] font-bold md:font-semibold'>Deals:</span> Spot Offers provides a wide range of discounts and offers from various online platforms, helping users find the best bargains.</li>
          <li className='text-[#0d1d39]'> <span className='text-[#000] font-bold md:font-semibold'>Discounts:</span> Spot Offers offers exclusive savings through discounts and coupon codes, providing users with unique and special offers.</li>
          <li className='text-[#0d1d39]'> <span className='text-[#000] font-bold md:font-semibold'>Aggregation:</span> Spot Offers gathers deals from multiple platforms, saving users time by consolidating them in one place.</li>
          <li className='text-[#0d1d39]'> <span className='text-[#000] font-bold md:font-semibold'>Community:</span> Spot Offers fosters an engaged community where users can share reviews, ratings, and comments on deals and products, benefiting from collective knowledge.</li>
          <li className='text-[#0d1d39]'> <span className='text-[#000] font-bold md:font-semibold'>User-friendly:</span> Spot Offers prioritizes a seamless user experience with an intuitive interface and search options, making it easy for users to navigate and discover deals.</li>
        </ul>
      </div>
    </div>
  )
}

export default Projects
