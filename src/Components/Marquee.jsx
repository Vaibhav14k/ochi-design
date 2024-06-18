import React from 'react'
import {motion} from "framer-motion";
import { ImLoop } from 'react-icons/im';
function Marquee() {
  return (
   <div data-scroll data-scroll-section data-scroll-speed="-0.1"  className='w-full py-20 bg-[#004D43] rounded-t-3xl  ' >
     <div className='text-white rounded-t-lg   flex align-top gap-10 border-t-2 border-b-2 whitespace-nowrap overflow-hidden '>
            <motion.h1  
            initial={{x:"0"}}
            animate={{x:"-100%"}}
            transition={{ repeat:Infinity ,ease:"linear",duration: 5}}
            className='text-[15vw] leading-none  ' >WE ARE OCHI </motion.h1>
            <motion.h1 
            initial={{x:"0"}}
            animate={{x:"-100%"}}
            transition={{ repeat:Infinity ,ease:"linear",duration: 5}}
            className='text-[15vw] leading-none ' >WE ARE OCHI</motion.h1>
    </div>
   </div> 
  )
} 

export default  Marquee
