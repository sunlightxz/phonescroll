import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import title from "/title.png";
import app from "/app.png";
import google from "/google.png";
import radio from "/audio.gif";
import lang from "/lang.png";
import design from "/design.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import phone from "/phone.png";

const Hero = () => {
  const langs = useRef(null);
  const des = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the languages image
    gsap.from(langs.current, { rotate: 180,duration: 1 });
    gsap.from(des.current, { scale :0.9 ,y:100, duration: 1 });

    gsap.to(des.current, {
      scrollTrigger: {
        trigger: des.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Add scrubbing effect
      },
      duration: 1,
      rotate: 0,
    });
  }, []);

  return (
    <div className="relative sm:px-12 px-4 w-full justify-between  sm:flex-row flex-col sm:py-0 py-4 items-center flex">
      <div className="basis-1/2">
        <h1>
          <img src={title} className="sm:max-w-[80%]" alt="" />
        </h1>
        <p className="text-white md:text-sm pt-2">
          Lorem ipsum dolor sit amet consectetur. Aenean consectetu r egestas
          nec nunc pellentesque eget blandit. Mi pulvinar enim orci porttitor
          amet at amet fermentum cras.
        </p>
        <div className="flex gap-4 justify-start sm:mt-8 mt-4 sm:mb-2 mb-8 items-center">
          <img src={app} alt="" />
          <img src={google} alt="" />
        </div>
        <div className="flex gap-6">
          <img src={lang} ref={langs} className="lg:w-[160px] md:w-[140px] w-[120px] hidden sm:flex" alt="" />
          <img src={radio} alt="" className="lg:w-[120px] md:w-[100px] w-[90px] hidden sm:flex" />
        </div>
      </div>
      <div className="basis-1/2 sm:justify-start justify-center items-end flex ">
       
        <img src={design} ref={des} alt="" className="mt-16 rotate-[30deg] hidden sm:flex lg:w-[300px] w-[230px] md:w-[260px]" />
        <div className="bg-violet-300 rounded-3xl p-2 sm:hidden">
           <img src={phone} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
