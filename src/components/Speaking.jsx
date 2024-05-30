import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import app from "/app.png";
import google from "/google.png";
import speak from "/speak.png";
import mainsp from "/mainsp.png";
import germansp from "/germansp.png";
import frenchsp from "/frenchsp.png";
import japonsp from "/japonsp.png";

gsap.registerPlugin(ScrollTrigger);

const Speaking = () => {
  const japonImg = useRef(null);
  const frenchImg = useRef(null);
  const germanImg = useRef(null);

  return (
    <div className='section bg-black min-h-screen w-full sm:py-0 py-6 relative flex justify-center items-center'>
            <div className="relative w-full justify-between items-center flex sm:flex-row flex-col">
      <div className="basis-1/2 pl-10">
        <h1 className='lg:text-[96px] md:text-[75px] sm:text-[60px] xs:text-[50px] text-white font-bold sm:text-start text-center'> Speak any  <br />
language
        </h1>
        <p className="text-white text-sm   md:pt-9 pt-4 sm:text-start text-center">
        Lorem ipsum dolor sit amet consectetur. Aenean consectetu
r egestas nec nunc pellentesque eget blandit. Mi pulvinar
 enim orci porttitor amet at amet fermentum cras.Aenean 
consectetur egestas nec nunc pellentesque eget blandit. 
        </p>
        <div className="flex gap-4 justify-start mt-8 items-center">
          <img src={app} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
      <div className="basis-1/2 justify-start items-end flex relative">
         <div className="md:flex flex-col justify-center items-center hidden">
           <div className="flex  ">
            <div className="absolute top-[14%] right-[17%] z-0 hidden lg:flex">
                <svg width="406" height="89" viewBox="0 0 406 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="pathx" d="M2 76.9236C2 76.9236 17.6507 56.5066 33.3014 50.5518C48.9522 44.597 76.2291 57.7828 76.2291 57.7828C76.2291 57.7828 88.7497 70.9687 76.2291 76.9236C63.7086 82.8785 59.9761 77.1598 53.4238 70.9687C41.6279 59.823 55.6064 44.6482 65.9444 32.2617C80.1796 15.2057 120.498 11.8448 120.498 11.8448C120.498 11.8448 259.581 -17.0569 328.429 24.18C343.269 33.0685 363.755 50.5518 363.755 50.5518C363.755 50.5518 370.084 68.5672 363.755 76.9236C358.643 83.6747 351.906 88.9828 343.633 86.2813C332.567 82.6678 335.722 65.9822 343.633 57.7828C352.253 48.8491 364.121 54.1288 376.276 57.7828C389.032 61.6174 396.214 66.5754 404 76.9236" stroke="#EBA8A8" stroke-width="4"/>
                </svg>
            </div>
            <img src={japonsp} ref={japonImg}  className='speakimg sp1 absolute top-[25%] left-0 lg:w-[264px] w-[220px] h-[190px] lg:h-[215px]' alt="" />
            <img src={frenchsp} ref={frenchImg} className='speakimg sp2 z-10 ml-6 mb-6  lg:w-[264px] w-[220px] h-[190px] lg:h-[215px]'  alt="" />
            <img src={germansp} ref={germanImg}  className=' speakimg sp3 absolute top-[22%] right-0 lg:w-[264px] w-[220px] h-[190px] lg:h-[215px]' alt="" />
           </div>
            <img src={mainsp} alt="" />

        </div> 
        <img src={speak}  alt="" className="md:hidden" /> 
      </div>
    </div>
    </div>
  )
}

export default Speaking