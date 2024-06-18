import React, { useEffect, useState } from 'react'
import { BsTranslate } from 'react-icons/bs';

function Eyes() {
    const [rotate,setRotate]=useState(0)

  useEffect(()=>{
    window.addEventListener( "mousemove" , (e)=>{
      let mouseX=e.clientX;
      let mouseY=e.clientY;

      let delatx=mouseX-window.innerWidth/2;
      let delaty=mouseY-window.innerHeight/2;

      var angle=Math.atan2(delaty,delatx)*(180/Math.PI); 
      setRotate(angle-180);
    })
  })
  return (
    <div className='eyes w-full h-screen oveflow-hidden  ' >
        <div data-scroll  data-scroll-speed="-0.2" className=' relative w-full h-full bf-red-200 bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover ' >  
          <div  className='absolute flex gap-10   top-1/4 left-1/3  border-1  ' > 
            <div className='w-[15vw] h-[15vw] rounded-full  bg-red-50 flex justify-center items-center ' >
                <div className='  w-[9vw] h-[9vw]  text-center relative justify-center items-center  rounded-full bg-black' >
                  <div  style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='  line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ' >
                    <div className='w-9  h-9 bg-white rounded-full'></div>
                  </div>
                </div> 
            </div>
            <div className='w-[15vw] h-[15vw] rounded-full  bg-red-50 flex justify-center items-center ' >
              <div className='w-[9vw] h-[9vw]  text-center relative justify-center items-center  rounded-full bg-black' >
                <div  style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='  line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ' >
                  <div className='w-9 h-9 bg-white rounded-full'></div>
                  </div>
                </div> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default Eyes
