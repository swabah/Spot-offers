import React, { useState } from 'react';
import {  CgMenuRightAlt,  CgClose } from 'react-icons/cg';
import logo from '../../assets/img/Logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navigations = [
    { option: 'Home', path: 'Home' },
    { option: 'About', path: 'About' },
    { option: 'Project', path: 'Projects' },
    { option: 'Contact', path: 'Contact' }
  ];

  
  const [fix, setfix] = useState(false);
   const Navfix = () =>{
      if (window.scrollY >= 100) {
        setfix(true)
      }else (
        setfix(false)
      ) 
   }
   window.addEventListener('scroll' , Navfix)

  return (
    <div id="header" className={`w-full ${fix ? 'bg-white shadow-md text-[#0d1d39] ' : "bg-transparent hover:text-white text-white"} ${ navOpen && 'fixed top-0'}  fixed top-0 flex justify-center z-40 items-center px-2 md:px-5 xl:px-32`}>
      <div className="w-full flex  h-14 md:h-16 lg:h-20 justify-between items-center ">
        <div  className='w-44 '>
          <h2 className='capitalize text-xl md:text-2xl font-extrabold'>Offers gram</h2>
        </div>

        <ul className="md:flex hidden space-x-7 ">
          {navigations.map((navigation, index) => (
            <li
              key={index}
              className="font-semibold text-sm md:text-base hover:text-[#030a19] tracking-wider  transition-all duration-200 ease-in cursor-pointer"
            >
              {navigation.option === 'About' ? (
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={800}
                >
                  {navigation.option}
                </Link>
              ) : navigation.option === 'Home' ? (
                <Link
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  {navigation.option}
                </Link>
              ) : navigation.option === 'Project' ? (
                <Link
                  activeClass="active"
                  to="Project"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  {navigation.option}
                </Link>
              ) : navigation.option === 'Contact' ? (
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  {navigation.option}
                </Link>
              ) : (
                <Link to={navigation.path}>{navigation.option}</Link>
              )}
            </li>
          ))}
        </ul>

        <div className="w-fit md:hidden ">
          {navOpen ? (
            <CgClose
              className="text-[30px] font-bold text-[#40b6ad] cursor-pointer"
              onClick={() => setNavOpen(false)}
            />
          ) : (
            <CgMenuRightAlt
              className="text-[30px] font-bold text-[#40b6ad] cursor-pointer"
              onClick={() => setNavOpen(true)}
            />
          )}
        </div>

      </div>
        <div className={`md:hidden w-full bg-white flex justify-center z-50 absolute mt-[1rem]`}>
          <ul
            className={`flex flex-col absolute bg-gray-50 border-b-4 border-[#40b6ad] py-4 w-full  transition-all text-start duration-1000 ${
              navOpen ? 'top-[1rem]' : 'top-[-480px] -z-50'
            }`}
          >
            {navigations.map((navigation, index) => (
              <li
                key={index}
                onClick={() => setNavOpen(false)}
                className="py-1 hover:bg-blue-100 text-[#40b6ad] active:bg-blue-100 font-semibold px-2"
              >
                {navigation.option === 'About' ? (
                  <Link
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavOpen(false)}
                  >
                    {navigation.option}
                  </Link>
                ) : navigation.option === 'Home' ? (
                  <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavOpen(false)}
                  >
                    {navigation.option}
                  </Link>
                ) : navigation.option === 'Project' ? (
                  <Link
                    activeClass="active"
                    to="Project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavOpen(false)}
                  >
                    {navigation.option}
                  </Link>
                ) : navigation.option === 'Contact' ? (
                  <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavOpen(false)}
                  >
                    {navigation.option}
                  </Link>
                ) : (
                  <Link to={navigation.path}>{navigation.option}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Header;
