import React, { useRef } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import phone2 from "/phone2.png";

const About = () => {
  return (
    <div className="justify-between flex-col sm:flex-row items-center relative md:px-12 sm:px-8 px-4 sm:mt-0 mt-12 flex sm:gap-28 gap-14">
      <div className="basis-1/2">
       <h1 className='md:text-[64px] text-[55px] font-bold text-black '>Ingeniously designed </h1>
       <p className='md:pt-9 pt-6  pl-2 flex gap-2 items-center'><FaRegCheckCircle />Lorem ipsum dolor sit amet</p>
       <p className='py-5 pl-2 flex gap-2 items-center'> <FaRegCheckCircle />Lorem ipsum dolor sit amet consectetur.</p>
       <p className='pl-2 flex gap-2 items-center'> <FaRegCheckCircle />Lorem ipsum dolor sit amet</p>
       <button className='mt-9 py-3 px-5 bg-black text-white rounded-3xl'>Read More</button>
      </div>
      <div className="basis-1/2">
        <img src={phone2} className='sm:hidden' alt="" />
      </div>
    </div>
  );
};

export default About;
