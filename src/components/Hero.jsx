import React from "react";
import heroImage from "../images/hero-image.png";
const Hero = () => {
  return (
    <div className=" flex   flex-col relative lg:flex-row   ">
      <div className="lg:w-1/2 p-8 opacity-20 lg:opacity-100 lg:blur-none blur-[2px] mt-4 lg:mt-0  ">
        <img src={heroImage} alt="" />
      </div>
      <div className="lg:w-1/2   lg:justify-center  flex flex-col   lg:relative absolute  inset-0 mt-32  items-center">
        <h1 className="text-neutral-100  lg:text-6xl text-4xl   font-kanit">Welcome to</h1>
        <h1 style={
          {
            fontFamily: "Kanit",

          }} className="text-neutral-100 text-8xl lg:text-10xl font-kanit">7xBet</h1>
      </div>
    </div>
  );
};

export default Hero;
