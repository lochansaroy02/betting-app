import React from 'react'
import adult from "../images/adult.png"

const Warning = () => {
    return (
        <div className='flex  flex-col items-center py-8 gap-8   '>

            <h1 className='font-kanit text-brand-100 text-2xl font-bold lg:text-4xl'>Disclaimer</h1>

            <div className='flex flex-col lg:flex-row  lg:p-8     '>

                <div className='lg:w-1/4  flex justify-center items-center  '>
                    <div className=' h-52 w-52  '>
                        <img className='h-full w-full  object-contain' src={adult} alt="" />
                    </div>
                </div>
                <div className='lg:w-3/4 p-8  flex items-center '>
                    <p className='font-lato text-brand-50 text-lg lg:text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus animi ea odit reiciendis cumque in ipsa eum aliquid quis et aspernatur excepturi, debitis rerum. In esse vero sequi expedita facilis.</p>
                </div>

            </div>
        </div>
    )
}

export default Warning;