import React from 'react'
import sp1 from "../images/sp1.png"
import sp2 from "../images/sp2.png"
import sp3 from "../images/sp3.png"

const Sponsor = () => {

  const arr = [
    { name: "logo1", image: sp1, },
    { name: "logo2", image: sp2, },
    { name: "logo3", image: sp3, },
  ]
  return (
    <div className='flex flex-col bg-brand-900 py-8  items-center gap-4    '>

      <h1 className='text-brand-50 text-4xl font-lato'>Our Sponsors</h1>
      <div className='flex flex-col  lg:flex-row w-full  justify-around'>
        {
          arr.map((item) => (
            <div className='flex  justify-center flex-col items-center '>
              <div className='h-52 w-52 '>
                <img className='h-full w-full object-contain' src={item.image} alt="" />
              </div>
              <h1 className='text-2xl  text-brand-100 font-lato'>{item.name}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sponsor