import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import logo from "../images/logo.png";

const Header = () => {
    const navigate = useNavigate();
    // const menu = ['About', 'contact', 'sponsors']



    const handleClick = () => {
        const number = "919088598836";
        const link = `https://api.whatsapp.com/send/?phone=%2B${number}&text&type=phone_number&app_absent=0`
        window.open(link, "_blank");
    }
    return (
        <div className='cursor-pointer fixed  top-0 w-full z-10 backdrop-blur-lg   bg-opacity-50 border-b flex  justify-between items-center border-yellow-700  bg-yellow-950 '>
            <div onClick={() => {
                navigate("/")
            }} className='lg:h-20 h-16 ml-8  w-28  '>
                <img className='h-full w-full object-contain' src={logo} alt="" />
            </div>

            <div className='flex gap-2 mr-4'>
                <button onClick={handleClick} className='bg-yellow-800 text-sm  flex items-center justify-center lg:gap-4 gap-2  px-4 py-2 rounded-xl  font-lato font-bold text-yellow-300 border border-yellow-400 '> Play Now  <span>   <FaArrowRight />
                </span> </button>
            </div>

        </div>
    )
}

export default Header