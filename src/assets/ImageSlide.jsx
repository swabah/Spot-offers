import React, { useState } from 'react'
import './Style.css'
import homImg1 from './img/portfolio/one.png' 
import homImg2 from './img/portfolio/two.png' 
import homImg3 from './img/portfolio/three.png' 
import homImg4 from './img/portfolio/four.png' 

function ImageSlide() {
  const images = [
    homImg1,
    homImg2,
    homImg3,
    homImg4,
 ];
 const number =[
  '1',
  '2',
  '3',
  '4'
 ]
  const Contents = [
    'User Experience (ux) Design',
    'Digital Marketing',
   'Digital Strategy',
   'Digital Transformation',
 ];
 const [current,setCurrent]=useState(0)
   const length = images.length
   const lengthContent = Contents.length
   
  setTimeout(() => {
      setCurrent (current === length -1 ? 0 : current  + 1)
      setCurrent (current === lengthContent -1 ? 0 : current  + 1)
  }, 5000);
       
 return (
   <div className='w-full h-96'>
      {images.map((slide,index)=>{
       return (
         <div key={index}>
           {index===current ?
           <div className=' rounded-sm w-full relative cursor-pointer bg-white'>
           <img src={slide} className='w-full shadow-lg shadow-indigo-100 rounded-sm  h-72 lg:h-96 object-cover brightness-50 bg-center' id='slidingImage' alt={`Slide ${index+1}`} />
           {number.map((num,index) => {
              if (current === index) {
              return (
                  <h2 className='absolute font-extrabold text-4xl lg:text-5xl text-white right-2 lg:right-3 lg:bottom-3 brightness-150 opacity-70 bottom-1.5'>{num}</h2>
                 )
              }
            })}
           <div className=' rounded-sm w-full h-full bg-black opacity-40 z-10 absolute top-0'></div>
           {Contents.map((Content,index) => {
                if (current === index) {
                  return (
                    <div className="absolute flex space-y-1 md:space-y-2 flex-col inset-0 z-10 items-center text-center md:text-start justify-center w-full h-full ">
                      <div className='relative'>
                          <h1 className='text-white text-sm md:text-base opacity-80 z-10'>Our services</h1>
                      </div>
                      <h2 className="text-xl lg:text-4xl opacity-90 tracking-wider font-extrabold text-white uppercase">{Content}</h2>
                   </div> 
                  )
                }
              })}
           </div>
           :''
         }
         </div>
       )
      })}
   </div>
 )
}

export default ImageSlide
