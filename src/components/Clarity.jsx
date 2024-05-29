import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import audio from '/audio.gif';
import micro from '/micro.gif';
import appc from '/appc.png';
import googlec from '/googlec.png';
import calls from '/calls.png';

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
                    markers:true,
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
                    markers:true,

                }
            }
        );
    }, []);

    return (
        <div className='section bg-[#130B38] py-[200px] w-full relative flex justify-center items-center'>
            <div className="flex flex-col" ref={clarityx}>
                <div className="flex justify-center items-center relative">
                    <div className=" flex justify-center items-center relative">
                        <img src={audio} className='h-[158px] w-[458px]' alt="" />
                        <img src={micro}  className="w-[189px] h-[158px] absolute" alt="" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className='text-white text-[90px] font-bold'>Instant Clarity</h1>
                    <p className='text-[#9F9F9F] text-center pt-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora nisi fuga ullam? 
                        Ab distinctio id veniam, <br /> sit repellat asperiores perspiciatis.
                    </p>
                    <div className="flex gap-4 pt-10">
                        <img src={appc} alt="" />
                        <img src={googlec} alt="" />
                    </div>
                </div>
            </div>
            <div className="absolute" ref={callz}>
                <img src={calls} className="rounded-2xl" alt="" />
            </div>
        </div>
    );
}

export default Clarity;
