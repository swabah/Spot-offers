import React from 'react'
import about from '../../assets/img/bg/about.jpg'

function About() {
  return (
    <div id='About' style={{backgroundImage: `url(${about})`}} className='flex flex-col w-full h-screen bg-cover py-8 md:py-12 xl:py-32 pb-5 relative lg:pb-12 bg-no-repeat bg-center items-start  px-2 lg:px-5 xl:px-32'>
      <div className='z-10 w-full h-full text-white'>
        <div className='w-full  mt-20 relative'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide'>Welcome to `OFFERSGRAM`</h2>
        </div>
            <p className='indent-8 text-lg mt-20 capitalize tracking-wide w-full  text-start'>
              At Offers Gram, we are dedicated to bringing you the best deals, discounts, and offers from various online platforms. We understand that finding the right deals can be time-consuming and overwhelming, so our mission is to make your shopping experience easier, more affordable, and more enjoyable.
              Our team of dedicated deal finders scours the internet to curate a wide range of offers across different categories, including electronics, fashion, home goods, beauty, travel, and more. We partner with reputable online platforms, including Amazon and other affiliate programs, to provide you with a diverse selection of products at discounted prices.</p>
      </div>
      <div className='bg-[#000] absolute opacity-80 inset-0 h-full w-full'></div>
        {/* <h2 className='text-2xl md:text-3xl lg:text-4xl text-[#399e96] font-bold'>
            Inventing the Future of Design
            <span className='before:block before:mt-3 before:h-0.5 md:before:h-1 before:w-20 before:bg-[#4185c6]'></span>
        </h2>   
        <div  className='relative lg:flex items-center justify-between w-full my-8 md:my-12 lg:space-x-12'>
          <div className='relative lg:w-1/3 px-5 h-full bg-[#40b6ad] md:mx-44 lg:mx-0  rounded-md bg-opacity-90'>
            <img src={bgabout} className='w-full object-cover h-full' alt="About gif" />
          </div>
            <div className='flex flex-col h-full lg:w-2/3 py-5 lg:py-0'>
                <p className='indent-8 text-sm md:text-base font-medium italic'>DataHex is your ultimate destination for cutting-edge digital transformation and consultancy solutions. As a leading digital solution company, we are committed to empowering businesses to navigate the intricate landscape of technology and excel in the digital era. With our team of seasoned experts who possess extensive experience and industry knowledge, we ensure that businesses of all sizes can achieve new heights in their objectives. At DataHex, we harness state-of-the-art technology and adhere to industry standards to deliver unparalleled digital transformation and consultancy services. Whether you're a small startup or a large corporation, our customized solutions are specifically designed to address your unique challenges and propel your business forward in the digital realm. With our deep understanding of the rapidly evolving digital landscape, we assist you in embracing innovation, optimizing processes, elevating customer experiences, and outperforming your competitors. Discover the DataHex advantage today and unlock the full potential of technology to transform your business into a digital powerhouse.</p>
            </div>
        </div> */}
    </div>
  )
}

export default About
