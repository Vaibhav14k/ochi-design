import React from 'react'

function Footer() {
    return (
        <div className='w-full font-serif h-screen bg-black flex pt-40 gap-60 px-10 rounded-t-xl pl-20 ' >
            <div>
                <h1 className='text-9xl' >EYE-</h1>
                <h1 className='text-9xl' >OPENING</h1>
            </div>
            <div className='text-9xl' >
                PRESENTATIONS
                <div className='text-2xl  mt-12  ' >
                    <p>s:</p>
                    <p>Instgarm</p>
                    <p>Behance</p>
                    <p>Linkdin</p>
                </div>
                <div className='mt-12 text-2xl ' >
                    <p>L:</p>
                    <p>202-1965 W 4th Ave</p>
                    <p>Vancouver, Canada</p>
                    <p className='pt-20' >30 Chukarina St</p>
                    <p>Lviv, Ukraine</p>
                </div>
                <div className='text-2xl  mt-12  ' >
                    <p>E:</p>
                    <p className='mt-6'> hello@ochi.design</p>
                </div>
                
            </div>
            
        </div>
        
        
    )
}

export default Footer
