import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {

    const handleClick = () => {
        const link = "https://t.me/t7xbet"
        window.open(link, "_blank");
    }
    return (
        <div className='bg-black-900 gap-10 lg:gap-0  p-4 border-t flex lg:flex-row flex-col items-center justify-between px-8  border-orange-500 '>
            <div className='flex flex-col items-center gap-2  lg:items-start '>
                <h1 className='text-orange-50 text-lg    lg:text-lg'>Customer Support </h1>
                <div className='flex    gap-2 cursor-none  '>
                    <button className='flex  gap-2  items-center justify-center' >
                        <span className='text-orange-50 text-xl '><FaPhoneAlt /></span>
                        <h1 className='text-orange-50 lg:text-base text-sm '>+91 9088598836 </h1>
                    </button>

                    <h1 className='text-orange-50'>|</h1>

                    <button onClick={handleClick} className='flex  gap-2  items-center  '>
                        <span className='text-orange-50 text-xl '><FaTelegram /></span>
                        <h1 className='text-orange-50 lg:text-base text-sm'> Telegram</h1>
                    </button>
                </div>
            </div>

            <div className='flex flex-col items-center lg:items-end '>

                <p className='text-sm  text-orange-50 '>Copyright © 2024 7xBET - All Rights Reserved.</p>
                <p className='text-orange-50'>powered by <span onClick={() => {
                    //go to this link
                    window.open("https://www.godaddy.com", "_blank");

                }}
                    className='text-orange-500 text-sm cursor-pointer'>GoDaddy</span></p>
            </div>
        </div>
    )
}

export default Footer