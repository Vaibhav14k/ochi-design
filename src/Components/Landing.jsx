import React from 'react'
import { WiDirectionUpRight } from "react-icons/wi";
function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 ' >
      <div  className='textstrutee  pt-60 pl-20 ' >
        <div className='masker' >
          <h1 className='leading-[4vw] font-medium text-9xl' >WE CREATE</h1>
        </div>
        <div className='masker' >
          <h1 className='leading-none font-medium text-9xl' >EYE-OPENING</h1>
        </div>
        <div className='masker' >
          <h1 className='leading-[5vw] font-medium text-9xl' >PRESENTATIONS</h1>
        </div>
      </div>
      <div className='text-2xl border-t-2 solid mt-20 flex justify-around  item-centre py-5  ' >
        {["For public and private companies",  "From the first pitch to IPO"].map((item,index)=>(
          <p className='font-light text-md ' > {item} </p>
        ))} 
        <div className='start flex gap-x-6 hover:bg-sky-700 ' >
          <div className='rounded-r-2xl rounded-l-2xl border-2 solid white w-68 px-3 uppercase  ' >Start The Project </div>
          <WiDirectionUpRight className='text-4xl rounded-full border-2 solid white' />  
        </div>
      </div>
    </div>
  )
}

export default Landing
