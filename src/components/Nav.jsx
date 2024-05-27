import React from "react";
import logo from '/logo.png'

const Nav = () => {
  return (
    <nav className="w-full bg-black flex justify-start gap-14 items-center py-6 sm:px-14 xs:px-6 px-2 z-20">
      <a href="" className="flex justify-start items-center nav-img ">
        <img className="md:w-full w-[140px]" src={logo} alt="" />
      </a>
      <div className="flex items-center justify-between w-full">
        <div className="hidden md:block">
          <div className="flex gap-10 items-center justify-center">
            <h1 className="lg:text-xl text-lg font-normal  cursor-pointer duration-500 ease-out hover:text-[#CFB8B8] text-white">
            Features
            </h1>
            <h1 className="lg:text-xl text-lg font-normal cursor-pointer duration-500 ease-out hover:text-[#CFB8B8] text-white">
              Store
            </h1>
            <h1 className="lg:text-xl text-lg font-normal cursor-pointer duration-500 ease-out hover:text-[#CFB8B8] text-white">
              Live
            </h1>
            <h1 className="lg:text-xl text-lg font-normal  cursor-pointer duration-500 ease-out hover:text-[#CFB8B8] text-white">
              Tour
            </h1>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <h1 className="lg-text-lg text-base cursor-pointer duration-500 ease-out text-[#CFB8B8] hover:text-white">
            Sign Up
          </h1>
          <h1 className="lg-text-lg text-base cursor-pointer duration-500 rounded-lg px-4 py-2 ease-out text-black bg-[#CFB8B8] hover:text-white">
            Sign In
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
