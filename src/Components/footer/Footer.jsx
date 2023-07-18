
import { FaFacebook,  FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

const Footer = () => {
  return (
    <footer class="bg-gray-100 text-[#0d1d39] py-8  px-3 md:px-10 lg:px-10 xl:px-32">
    <div class="container flex flex-col md:flex-row text-start space-y-4 md:space-y-0  py-5 justify-between">
      <div class="w-full md:w-1/2 lg:w-1/4">
        <h3 class="text-3xl font-bold mb-4">Stay Connected</h3>
        <ul class="text-lg space-y-1">
          <li className=''><a className='flex items-center ' href="mailto: spotoffers786@gmail.com"><span className='mr-2 text-xl'><CgMail/></span>Mail for enquiry</a></li>
          <li className=''><a className='flex items-center ' href="#"><span className='mr-2 text-xl'><FaFacebook/></span>Join our Facebook community</a></li>
          <li className=''><a className='flex items-center ' href="#"><span className='mr-2 text-xl'><FaWhatsapp/></span>Join our Whatsapp community</a></li>
          <li className=''><a className='flex items-center ' href="#"><span className='mr-2 text-xl'><FaTelegram/></span>Join our Telegram community</a></li>
          <li className=''><a className='flex items-center ' href="https://www.instagram.com/_spotoffers_"><span className='mr-2 text-xl'><FaInstagram/></span>Follow us on Instagram </a></li>
        </ul>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 md:px-4">
        <h3 class="text-3xl font-bold mb-4">Contact Us</h3>
        <p class="text-lg">If you have any questions or concerns, feel free to reach out to our customer support team.</p>
      </div>
    </div>
    <hr />
    <div class="container mt-8 text-center ">
      <p class="text-sm">© 2023 Spot Offers. All rights reserved. | Disclaimer: Spot Offers is not affiliated with Amazon or any other platforms mentioned. We are an independent platform that aggregates deals and discounts from various sources.</p>
    </div>
    </footer>

  );
};

export default Footer;
