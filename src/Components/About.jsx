import React from 'react'
function About() {
    return (
        <div  className='border-2 rounded-t-3xl w-full min-h-min py-40 bg-[#CDEA68] text-black ' >
            <h1 className='text-6xl pr-80  pl-28  border-black pb-20 ' >Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div  className='w-full border-t-2 mt-40 bg-[#CDEA68] flex ' >
                <div className='w-1/2 pt-10 pl-20' >
                <h1 className='text-6xl' >Our Approch </h1>
                <button className='text-white hover:bg-black border-2 bg-amber-800 hover:delay-200 rounded-full mt-8 w-60 h-10 text-2xl ' >Read More  </button>
                </div>
                <div className='mt-20 rounded-t-lg' >
                    <img src="coupleimg.jpg" alt="" className='rounded-3xl h-7/6'  />
                </div>
            </div>
        </div>
    )
}
export default About
