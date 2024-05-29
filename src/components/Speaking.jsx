import React from 'react'
import app from "/app.png";
import google from "/google.png";
import speak from "/speak.png";

const Speaking = () => {
  return (
    <div className='section bg-black min-h-screen w-full relative flex justify-center items-center'>
            <div className="relative px-12 w-full justify-between items-center flex">
      <div className="basis-1/2">
        <h1 className='text-[96px] text-white font-bold'> Speak any  <br />
language
        </h1>
        <p className="text-white text-sm pt-9">
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
      <div className="basis-1/2 justify-start items-end flex ">
        <img src={speak}  alt="" className="rotate-[30deg]" />
      </div>
    </div>
    </div>
  )
}

export default Speaking