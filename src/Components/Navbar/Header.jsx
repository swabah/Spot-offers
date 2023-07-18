import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { CgClose, CgMenuRightAlt } from 'react-icons/cg';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [fix, setFix] = useState(false);
  
  const navigations = [
    { option: 'Home', path: 'Home' },
    { option: 'About', path: 'About' },
    { option: 'Service', path: 'Service' },
    { option: 'Contact', path: 'Contact' }
  ];

  const Navfix = () => {
    if (window.scrollY >= 400) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener('scroll', Navfix);

  return (
    <div className={`w-full h-auto  px-3 md:px-10 lg:px-10 xl:px-32 py-2 z-50 ${fix ? ' bg-white fixed left-0 top-0 shadow-lg drop-shadow-md  py-5 mdpy-6' : 'md:py-8  text-[#0d1d39] bg-transparent '}`}>
      <div className="flex items-center justify-between   w-full h-full">
        <div  className='w-auto '>
          <h2 className=' text-2xl md:text-3xl lg:text-4xl  uppercase font-extrabold'>Spot Offers</h2>
        </div>
        <ul className="xl:flex hidden space-x-7">
          {navigations.map((navigation, index) => (
            <li
              key={index}
              className={`font-semibold text-sm md:text-base hover:text-[#030a198b] tracking-wider uppercase transition-all duration-200 ease-in cursor-pointer`}
            >
              <Link
                activeClass="active"
                to={navigation.path}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                {navigation.option}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-fit xl:hidden">
          <CgMenuRightAlt
            className={`text-[30px] lg:text-[40px] ${fix ? 'text-[#0d1d39]' : 'text-[#0d1d39]'} font-bold cursor-pointer`}
            onClick={() => setNavOpen(true)}
          />
        </div>
      </div>
      <div className={`xl:hidden w-full md:w-1/2 lg:w-1/2 md:shadow-lg h-screen ${navOpen ? 'flex opacity-100' : 'hidden opacity-0 -z-50  '} bg-white py-4  px-3 md:px-10 lg:px-10 xl:px-32 md:py-12  flex-col border-b border-[#0d1d39] justify-start items-start z-50 right-0 top-0 md:right-0 absolute`}>
        <div className="flex items-center justify-between md:justify-end w-full h-auto">
           <h2 className='md:hidden text-2xl uppercase font-extrabold'>Spot Offers</h2>
          <CgClose
            className={`text-[30px] lg:text-[35px] ${fix ? 'text-[#0d1d39]' : 'text-[#0d1d39]'} hover:text-[#605e5e79] font-bold  cursor-pointer`}
            onClick={() => setNavOpen(false)}
          />
        </div>

        <ul className={`flex flex-col items-start justify-start space-y-4 py-8 w-full h-full transition-all text-start duration-1000`}>
          {navigations.map((navigation, index) => (
            <li
              key={index}
              className={`font-semibold text-sm md:text-base hover:text-[#605e5e79] text-[#000000bb] tracking-wider text-start uppercase transition-all duration-200 ease-in cursor-pointer`}
            >
              <Link
                activeClass="active"
                to={navigation.path}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={() => setNavOpen(false)}
              >
                {navigation.option}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
