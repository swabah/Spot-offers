import React, { useState } from 'react';
import '../../assets/Style.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FaArrowRight } from 'react-icons/fa';
import {AiOutlineLoading} from 'react-icons/ai'

function Newsletter() {
  const SERVICE_ID = 'service_kuh42dq';
  const TEMPLATE_ID = 'template_fmlwxas';
  const ID = '0rXcb8Z74c5Lx6Xss';
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, ID);
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Successfully subscribed',
      });
    } catch (error) {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      });
    }

    setLoading(false);
    e.target.reset();
  };

  return (
    <div id='Contact' className="bg-[#0d1d39] h-screen md:h-[680px] flex flex-col items-center justify-center px-2 md:px-5 xl:px-32">
      <div className='flex flex-col items-center justify-center'>

      <h1 className="mb-8 md:mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[#e8effd]">
        Do not miss <br />
        <span className="text-[#005eb8]">any updates</span>
      </h1>
      {loading ? (<h2 className='animate-spin transition-all text-3xl text-white'><AiOutlineLoading/></h2> ): 
      <>
      <form onSubmit={handleOnSubmit} className="border-t-4 border-[#005eb8]  w-full  flex items-center bg-[#3b5a8f3a] relative">
        <input
          required
          type="email"
          name="user_email"
          className="w-full p-3 md:p-3 bg-transparent placeholder:font-thin placeholder:text-sm md:placeholder:text-base border-0 outline-0 text-[hsl(218,81%,95%)] font-bold md:tracking-wider"
          placeholder="Subscribe to our newsletter"
        />
        <button
          type="submit"
          className="absolute right-0 md:right-3 md:text-xl p-1 md:p-2 active:bg-gray-100 active:text-black active:bg-opacity-20 cursor-pointer text-white brightness-75 font-thin"
          disabled={loading}
        >
          <FaArrowRight />
        </button>
      </form>
      </> }
      </div>
    </div>
  );
}

export default Newsletter;
