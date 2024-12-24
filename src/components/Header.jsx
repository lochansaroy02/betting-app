import React from 'react'
import logo from "../images/logo.png"
const Header = () => {

    const menu = ['About', 'contact', 'sponsors']
    return (
        <div className=' fixed  w-full z-10 backdrop-blur-lg   bg-opacity-50 border-b flex  justify-between items-center border-brand-700  bg-brand-950 '>
            <div className='lg:h-20 h-16    ml-8  w-28  '>
                <img className='h-full w-full object-contain  ' src={logo} alt="" />
            </div>
            <div className='flex gap-2 mr-4    '>
                {
                    menu.map((item) => (
                        <ul>
                            <li className='lg:text-lg  font-semibold  text-brand-50 cursor-pointer '>{item}</li>
                        </ul>
                    ))
                }
            </div>

        </div>
    )
}

export default Header