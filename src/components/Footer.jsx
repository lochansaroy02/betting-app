import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black-900  p-4 border-t flex lg:flex-row flex-col items-center justify-between px-8  border-orange-500 '>
            <p className='text-sm  text-orange-50 '>Copyright © 2024 7xBET - All Rights Reserved.</p>
            <p className='text-orange-50'>powered by <span onClick={() => {
                //go to this link
                window.open("https://www.godaddy.com", "_blank");

            }}
                className='text-orange-500 text-sm cursor-pointer'>GoDaddy</span></p>
        </div>
    )
}

export default Footer