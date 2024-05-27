import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import title from "/title.png";
import app from "/app.png";
import google from "/google.png";
import radio from "/radio.png";
import lang from "/lang.png";
import design from "/design.png";
import ScrollTrigger from "gsap/ScrollTrigger";

const Hero = () => {
  const langs = useRef(null);
  const des = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the languages image
    gsap.from(langs.current, { rotate: 200, duration: 1 });
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
    <div className="relative px-12 w-full justify-between items-center flex">
      <div className="basis-1/2">
        <h1>
          <img src={title} className="xl:" alt="" />
        </h1>
        <p className="text-white text-sm pt-9">
          Lorem ipsum dolor sit amet consectetur. Aenean consectetu r egestas
          nec nunc pellentesque eget blandit. Mi pulvinar enim orci porttitor
          amet at amet fermentum cras.
        </p>
        <div className="flex  justify-start mt-8 items-center">
          <img src={app} alt="" />
          <img src={google} alt="" />
        </div>
        <div className="flex ">
          <img src={lang} ref={langs} className="w-[160px]" alt="" />
          <img src={radio} alt="" className="w-[150px]" />
        </div>
      </div>
      <div className="basis-1/2 justify-start items-end flex ">
        <img src={design} ref={des} alt="" className="mt-16 rotate-[30deg] w-[300px]" />
      </div>
    </div>
  );
};

export default Hero;
