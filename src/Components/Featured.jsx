import React from 'react'

function Featured() {
    return (
        <div className='w-full  ' >
            <div >
                <h1 className='pt-20 w-full border-b-2 pb-12 border-zinc-500 text-7xl  pl-24 rounded-t-3xl bg-black text-white' >Featured projects</h1>
            </div>
            <div className='px-40' >
                <div className=' w-full flex gap-10 mt-20   cards overflow-hidden' >
                    <div className=' cardcontainer w-1/2  h-[70vh] hover:scale-95 duration-700 delay-75 overflow-hidden rounded-xl  border-2' >
                        <img src="fyde.png " className='bg-cover w-full h-full' alt="" />

                        {/* <div className='w-full h-full rounded-xl hover:scale-95 duration-700 delay-800 bg-green-600' ></div> */}
                    </div>
                    <div className='w-1/2 h-[70vh] rounded-xl hover:scale-95 duration-700 overflow-hidden delay-800   border-2'>
                        <img src="vise.jpg" className='bg-cover overflow-hidden  ' alt="" />
                        {/* <div className='w-full h-full rounded-xl hover:scale-95 duration-700 delay-800 bg-green-600' ></div> */}
                    </div>
                </div>
            </div>
            <button className='button w-full flex  gap-28 ' >
                <button className='flex gap-12 ml-40 mt-8  '  >
                    <button className='border-2 rounded-full w-20 hover:bg-white ' > AUDIT</button>
                    <button className='border-2 rounded-full w-40  ' >COPYWRITING</button>
                    <button className='border-2 rounded-full w-40'>SALES DECK</button>
                    <button className='border-2 rounded-full w-40'>SLIDES DESING</button>
                </button>
                <button className='flex gap-10 mt-8' >
                    <button className='border-2 rounded-full w-20' >AGENCY</button>
                    <button className='border-2 rounded-full w-28' >INVESTOR</button>
                    <button className='border-2 rounded-full w-28' >TEMPLATE</button>
                </button>
            </button>
            <div className='px-40' >
                <div className=' w-full flex gap-10 mt-20   cards overflow-hidden' >
                    <div className=' cardcontainer w-1/2  h-[70vh] hover:scale-95 duration-700 delay-800 overflow-hidden rounded-xl  border-2' >
                        <img src="trawa.jpg " className='bg-cover w-full h-full' alt="" />

                        {/* <div className='w-full h-full rounded-xl hover:scale-95 duration-700 delay-800 bg-green-600' ></div> */}
                    </div>
                    <div className='w-1/2 h-[70vh] rounded-xl hover:scale-95 duration-700 overflow-hidden delay-800   border-2'>
                        <img src="preminumblend.png" className='bg-cover overflow-hidden  ' alt="" />
                        {/* <div className='w-full h-full rounded-xl hover:scale-95 duration-700 delay-800 bg-green-600' ></div> */}
                    </div>
                </div>
            </div>
            <button className='button w-full flex  gap-28  mb-10 ' >
                <button className='flex gap-12 ml-40 mt-8  '  >
                    <button className='border-2 rounded-full w-20 hover:bg-white ' > AUDIT</button>
                    <button className='border-2 rounded-full w-40  ' >COPYWRITING</button>
                    <button className='border-2 rounded-full w-40'>SALES DECK</button>
                    <button className='border-2 rounded-full w-40'>SLIDES DESING</button>
                </button>
                <button className='flex gap-10 mt-8' >
                    <button className='border-2 rounded-full w-44' >BRANDED TEMPLATE</button>
                    
                </button>
            </button>
        </div>

    )
}

export default Featured
