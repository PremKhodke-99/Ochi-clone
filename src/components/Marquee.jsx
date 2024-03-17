import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-20 rounded-t-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className='text-[17vw] leading-none uppercase mb-[2vw] pt-[2vw] tracking-tighter font-semibold font-["Neue_Montreal"] pr-10'>We are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className='text-[17vw] leading-none uppercase mb-[2vw] pt-[2vw] tracking-tighter font-semibold font-["Neue_Montreal"] pr-10'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee