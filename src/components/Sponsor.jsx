import React from 'react'
import { useNavigate } from 'react-router-dom'
import sp1 from "../images/sp1.png"
import sp2 from "../images/sp2.png"

const Sponsor = () => {


  const navigate = useNavigate();
  const arr = [
    { name: "logo1", image: sp1, navigateUrl: "/go-exchange" },
    { name: "logo2", image: sp2, navigateUrl: "/laser" },

  ]



  return (

    <div className='flex flex-col bg-orange-950 py-8   items-center gap-4    '>

      <h1 className='text-orange-50 lg:text-4xl text-2xl font-bold font-kanit'>Our Partners</h1>
      <div className='grid grid-cols-1 gap-4  p-8   lg:grid-cols-2 w-full  justify-around'>
        {
          arr.map((item) => (
            <div className='flex  justify-center gap-2  flex-col items-center '>
              <div className='lg:h-52 lg:w-52 h-40 w-40 rounded-xl bg-black p-2'>
                <button onClick={() => {
                  navigate(item.navigateUrl)
                }}>

                  <img className='h-full w-full object-contain' src={item.image} alt="" />
                </button>
              </div>
              {/* <button className='lg:text-2xl text-xl  text-orange-100 font-lato'>Tutorial</button> */}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sponsor