import React from 'react'
import image from "../images/hero-image.png"

const Services = () => {

    const services = [
        { name: "service1", image: image },
        { name: "service1", image: image },
        { name: "service1", image: image },
        { name: "service1", image: image },
        { name: "service1", image: image },
        { name: "service1", image: image },

    ]
    return (
        <div className='flex flex-col  bg-brand-900 items-center py-4  '>
            <h1 className='lg:text-4xl text-2xl  text-brand-50 font-kanit font-bold '>Our Services</h1>


            <div className='grid lg:grid-cols-5 grid-cols-3 gap-4   p-8 '>

                {
                    services.map((item) => (
                        <div className='flex flex-col   items-center'>
                            <div className='lg:h-60 lg:w-60 h-32 w-32  rounded-2xl bg-brand-400 '>
                                <img src={item.image} alt="" />
                            </div>
                            <h1 className='font-lato text-brand-50 lg:text-lg text-base  '>{item.name}</h1>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Services