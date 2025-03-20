import React from 'react';
import adult from "../images/adult.png";

const Warning = () => {
    return (
        <div className='flex  flex-col items-center py-8 gap-8   '>

            <h1 className='font-kanit text-purple-100 text-2xl font-bold lg:text-4xl'>Disclaimer</h1>

            <div className='flex flex-col lg:flex-row  lg:p-8     '>

                <div className='lg:w-1/4  flex justify-center items-center  '>
                    <div className=' h-52 w-52  '>
                        <img className='h-full w-full  object-contain' src={adult} alt="" />
                    </div>
                </div>
                <div className='lg:w-3/4 p-8  flex items-center '>
                    <p className='font-lato  text-purple-50 text-lg lg:text-2xl text-justify'>Betting involves financial risk and may be addictive. Please play responsibly and within your limits. Only bet what you can afford to lose. <br />
                        This app is intended for users aged 18 and above. If you feel gambling is becoming a problem, seek help immediately through support organizations. Always comply with your local laws and regulations</p>
                </div>

            </div>
        </div>
    )
}

export default Warning;