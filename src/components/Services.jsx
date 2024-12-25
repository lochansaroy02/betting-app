import React from 'react'
import card from "../images/cards.png"
import cricket from "../images/cricket.png"
import football from "../images/football.png"


const Services = () => {

    const services = [
        { name: "cricket", image: cricket },
        { name: "football", image: football },
        { name: "card", image: card },

    ]
    return (
        <div className='flex flex-col  bg-orange-950 items-center py-4  '>
            <h1 className='lg:text-4xl text-2xl  text-orange-50 font-kanit font-bold '>Our Services</h1>


            <div className='grid lg:grid-cols-5 grid-cols-3 gap-4   p-8 '>

                {
                    services.map((item) => (
                        <div className='flex flex-col   items-center'>
                            <div className='lg:h-60 lg:w-60 h-32 w-32  relative  outline-orange-900  rounded-2xl group  '>
                                <img className='h-full w-full rounded-2xl object-contain' src={item.image} alt="" />
                                <div className='flex absolute opacity-0  inset-0 justify-center  items-center group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className=' bg-orange-400 py-2 px-4   rounded-xl text-lg '>Play Now </button>
                                </div>
                            </div>
                            <h1 className='font-lato text-orange-50 lg:text-lg text-base  '>{item.name}</h1>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Services