import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import audio from '/audio.gif';
import micro from '/micro.gif';
import appc from '/appc.png';
import googlec from '/googlec.png';
import calls from '/calls.png';
import call1 from '/call1.png';
import call2 from '/call2.png';
import call3 from '/call3.png';
import call4 from '/call4.png';
import mic from '/Mic.png'

gsap.registerPlugin(ScrollTrigger);

const Clarity = () => {
    const callz = useRef(null);
    const clarityx = useRef(null);

    useEffect(() => {
        // GSAP animation for transparency and position
        gsap.fromTo(clarityx.current, 
            { opacity: 1 }, 
            {
                opacity: 0,
                scrollTrigger: {
                    trigger: clarityx.current,
                    start: "top 30%", // Start the animation when the top of clarityx is at the center of the viewport
                    end: "top top", // End the animation when the top of clarityx is at the top of the viewport
                    scrub: true,
                }
            }
        );

        gsap.fromTo(callz.current, 
            { y: 300, opacity: 0 , scale:0.8 }, 
            {
                y: 0,
                opacity: 1,
                scale :1 ,
                scrollTrigger: {
                    trigger: clarityx.current,
                    start: "top 30%", // Start the animation when the top of clarityx is at the center of the viewport
                    end: "top top", // End the animation when the top of clarityx is at the top of the viewport
                    scrub: true,
                }
            }
        );
    }, []);

    return (
        <div className='section bg-[#130B38] py-[120px] md:py-[170px] lg:py-[200px] w-full relative flex justify-center items-center'>
        <div className="flex flex-col" ref={clarityx}>
                <div className="flex justify-center items-center relative">
                    <div className=" flex justify-center items-center relative">
                        <img src={audio} className='md:h-[158px] h-[130px] md:w-[458px] w-[400px]' alt="" />
                        <img src={micro}  className="md:w-[189px] w-[169px] md:h-[158px] h-[138px] absolute" alt="" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className='text-white md:text-[90px] sm:text-[78px] text-[55px] font-bold'>Instant Clarity</h1>
                    <p className='text-[#9F9F9F] sm:text-base text-sm  text-center pt-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nisi fuga ullam? 
                        Ab distinctio id veniam, <br /> sit repellat asperiores perspiciatis.
                    </p>
                    <div className="flex gap-4 pt-10">
                        <img src={appc} className="sm:w-[129px] w-[110px]  h-[45px] sm:h-[52px]" alt="" />
                        <img src={googlec} className="sm:w-[129px] w-[110px]  h-[45px] sm:h-[52px]" alt="" />
                    </div>
                </div>
            </div>
            <div className="absolute" ref={callz}>
                {/* <img src={calls} className="rounded-2xl" alt="" /> */}
                <div className="flex flex-col rounded-2xl">
                    
                       <div className="flex">
                       <div className="relative overflow-hidden rounded-tl-xl">
                        <img src={mic} className="absolute bottom-5 right-[40%] z-20 cursor-pointer" alt="" />
                         <img src={call1} className=" hover:scale-110 rounded-tl-xl z-10 transition-all .6s ease-out" alt="" />
                       </div>
                       <div className="relative overflow-hidden rounded-tr-xl">
                        <img src={mic} className="absolute bottom-5 right-[40%] z-20 cursor-pointer" alt="" />
                         <img src={call2} className=" hover:scale-110 rounded-tr-xl z-10 transition-all .6s ease-out" alt="" />
                       </div>
                       </div>
                      <div className="flex">
                      <div className="relative overflow-hidden rounded-bl-xl">
                        <img src={mic} className="absolute bottom-5 right-[40%] z-20 cursor-pointer" alt="" />
                         <img src={call3} className=" hover:scale-110 rounded-bl-xl z-10 transition-all .6s ease-out" alt="" />
                       </div>
                       <div className="relative overflow-hidden rounded-br-xl">
                         <img src={mic} className="absolute bottom-5 right-[40%] z-20 cursor-pointer" alt="" />
                         <img src={call4} className=" hover:scale-110 rounded-br-xl z-10 transition-all .6s ease-out" alt="" />
                       </div>
                      </div>
                </div>
            </div>
        </div>
    );
}

export default Clarity;
