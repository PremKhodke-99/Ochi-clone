import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div className='w-full py-20 rounded-t-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
            <h1 className='text-[17vw] leading-none uppercase mb-[2vw] pt-[2vw] tracking-tighter font-semibold font-["Neue_Montreal"]'>We are ochi</h1>
            <h1 className='text-[17vw] leading-none uppercase mb-[2vw] pt-[2vw] tracking-tighter font-semibold font-["Neue_Montreal"]'>We are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee