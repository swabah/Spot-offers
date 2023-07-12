
import Imgicon from '../../assets/Imgicon'

const Footer = () => {
  return (
    <footer id='Contact' className='bg-gray-50 pt-12 text-[#005eb8] '>
      <div className="py-8 flex flex-col md:flex-row items-start justify-between space-y-5 md:space-y-0 px-2 md:px-5 xl:px-32">
        <div className='flex flex-col space-y-5 items-start'>
          <h2 className="text-2xl leading-8 tracking-wide md:text-3xl lg:text-4xl font-extrabold capitalize">Got a Project? <br /> Let's Get to Work</h2>
          <p className='leading-6 md:leading-7 text-sm md:text-base brightness-50'>
            <span className='font-semibold text-lg md:text-xl '>DataHex Digital Solution</span> <br />
            3rd Floor, Hilite Business Park <br />
            Calicut, Kerala <br />
            673001</p>
        </div>
        <div className='font-medium h-full'>
          <Imgicon/>
        </div>
      </div>
      <div className=' text-sm md:text-base  border-t-4 flex items-start justify-between py-4 px-2 md:px-5 xl:px-32'>
        <div className='font-semibold tracking-wider'>
          <h2>mail@datanex.in</h2>
          <h2>+91 6238 274 734</h2>
        </div>
        <span >made by  <span className='font-bold cursor-pointer'>sw_abah</span> </span>
      </div>
    </footer>
  );
};

export default Footer;
