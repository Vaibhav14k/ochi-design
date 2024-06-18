import React from 'react'

function Cards() {
  return (
    <div className='cards w-full h-screen bg-red-100 flex px-32  py-20 gap-10 ' >     
                <div className='w-1/2  '>
                <div  className=' relative  w-full h-[50vh] rounded-xl flex justify-center items-center     bg-[#004D43] ' >
                    <img  className='w-32 bg-cover ' src="logocard1.svg" alt="" />
                    <button className=' absolute left-10 bottom-3 border-2 rounded-full  py-2 px-10' >©2019–2022</button>
                </div>
                </div>
                <div  className='  w-1/2 flex gap-12  ' >
                <div className='w-1/2 h-[50vh] rounded-xl flex justify-center items-center relative  border-2 bg-[#192826] '  >
                <img  className='w-32 bg-cover ' src="logocard2.svg" alt="" />
                    <button className=' absolute left-10 bottom-3 border-2 rounded-full  py-2 px-10 ' >©2019–2022</button>
                </div>
                <div className='w-1/2 h-[50vh] rounded-xl flex justify-center items-center  relative border-2  bg-[#192826]'  >
                <img  className='w-32 bg-cover ' src="logocard1.svg" alt="" />
                    <button className=' absolute left-10 bottom-3 border-2 rounded-full  py-2 px-10' >©2019–2022</button>
                </div>
                </div> 
    </div>
  )
}

export default Cards
