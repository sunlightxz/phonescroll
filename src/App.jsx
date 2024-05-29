import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import phone from "/phone.png";
import phone2 from "/phone2.png";
import nemo from "/nemo.png";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Translat from "./components/Translat";
import Clarity from "./components/Clarity";
import Pricing from "./components/Pricing";
import Speaking from "./components/Speaking";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const heroImageRef = useRef(null);
  const mainRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const phone1Ref = useRef(null);
  const phone2Ref = useRef(null);


  useEffect(() => {
    // Pin the hero image
    ScrollTrigger.create({
      trigger: mainRef.current,
      pin: heroImageRef.current,
      // markers: true, // Uncomment for debugging
      pinSpacing: false,
      start: "top 10%",
      end: "bottom bottom",
    });

    // Scale and move phone1 when scrolling to Section 2
    gsap.to(phone1Ref.current, {
      scrollTrigger: {
        trigger: secondRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      scale: 0.01,
      borderRadius: "50%",
      y: -200,
      x: -120,
    });

    // Rotate hero image and change image when entering Section 3
    ScrollTrigger.create({
      trigger: thirdRef.current,
      start: "top 20%",
      end: "top top",
      onEnter: () => {
        gsap.to(heroImageRef.current, {
          rotateY: 180,
          duration: 1,
        });
        gsap.set(phone2Ref.current, { attr: { src: nemo } });

      },
      onLeaveBack: () => {
        gsap.to(heroImageRef.current, {
          rotateY: 0,
          duration: 1,
        });
         gsap.set(phone2Ref.current, { attr: { src: phone2 } });
      },
      //markers: true, // Uncomment for debugging
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Nav/>
      <div
        ref={heroImageRef}
        className="flex justify-center items-center p-4 bg-[#D2C6DC] w-[330px] absolute right-[10%] border-white border rounded-3xl"
      >
        <div className="relative">
          <img
            src={phone}
            ref={phone1Ref}
            alt="Phone"
            className="absolute inset-0"
          />
      
            <img src={phone2} ref={phone2Ref} alt="Phone2" />
    
        </div>
      </div>

      <div className="sections" ref={mainRef}>
        <div
          ref={firstRef}
          className="section bg-black min-h-screen w-full flex justify-start items-center"
        >
         <Hero />

        </div>

        <div
          ref={secondRef}
          className="section bg-[#E6CDFC] min-h-screen w-full flex justify-center items-center"
        >
         <About/>
        </div>

        <div
          ref={thirdRef}
          className="section bg-[#E6CDFC] min-h-screen w-full flex justify-center items-center"
        >
        <Translat/>
        </div>
      </div>

      <Clarity/>
      <Pricing/>
      <Speaking/>
      <Footer/>
    </div>
  );
};

export default App;
