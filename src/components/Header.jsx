import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import logo from "../images/logoOrange-removebg-preview.png";


const Header = () => {

    // const menu = ['About', 'contact', 'sponsors']



    const handleClick = () => {
        const number = "917017308109";
        const link = `https://api.whatsapp.com/send/?phone=%2B${number}&text&type=phone_number&app_absent=0`
        window.open(link, "_blank");

    }
    return (
        <div className=' fixed  w-full z-10 backdrop-blur-lg   bg-opacity-50 border-b flex  justify-between items-center border-orange-700  bg-orange-950 '>
            <div className='lg:h-20 h-16    ml-8  w-28  '>
                <img className='h-full w-full object-contain' src={logo} alt="" />
            </div>
            {/*  */}

            <div className='flex gap-2 mr-4'>
                <button onClick={handleClick} className='bg-orange-800 text-sm  flex items-center justify-center lg:gap-4 gap-2  px-4 py-2 rounded-xl  font-lato font-bold text-orange-300 border border-orange-400 '> Play Now  <span>   <FaArrowRight />
                </span> </button>
            </div>

        </div>
    )
}

export default Header