import React from "react";
import heroImage from "../images/hero-image.png";
const Hero = ({ scrollToServices }) => {



  return (
    <div className=" flex py-8    flex-col relative lg:flex-row   ">


      <div className="lg:w-1/2 p-8 opacity-20 lg:opacity-100 lg:blur-none blur-[2px] mt-4 lg:mt-0  ">
        <img src={heroImage} alt="" />
      </div>
      <div className="lg:w-1/2        flex flex-col    lg:relative absolute  inset-0 justify-center items-center">

        <h1 className="text-neutral-100  lg:text-6xl  text-2xl   top-2   font-semibold font-kanit">Welcome to</h1>
        <h1 className="text-[6rem] italic  leading-none  top-20  text-brand-50 font-serif font-bold lg:text-10xl ">7x
          <span className="text-purple-400  font-serif ">
            BET
          </span>
        </h1>
        <p className="font-kanit text-xl lg:text-2xl text-brand-100   ">India's most trusted betting site</p>
        <div className="mt-8  ">
          <button onClick={scrollToServices} className="bg-purple-800  hover:bg-purple-900 lg:px-6 px-4 py-2 mt-2    lg:py-2 lg:text-2xl text-lg font-semibold rounded-full border border-purple-200  text-purple-400 font-lato ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
