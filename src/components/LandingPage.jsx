import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    return (
        <div data-scroll data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className="textstructure mt-52 px-20">
                {
                    ["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                        return (
                            <div className="masker" key={index}>
                                <div className="w-fit flex items-center">
                                    {
                                        index === 1 && (
                                            <motion.div 
                                            initial={{width: 0}} 
                                            animate={{width: "9vw"}} 
                                            transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                                            
                                            className='flex items-center justify-center'>
                                                <img src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'
                                                    className='mr-[0.5vw] rounded-md w-[9vw] h-[6vw]' />
                                            </motion.div>
                                        )
                                    }
                                    <h1 className='flex items-center uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-bold'>{item}</h1>
                                </div>
                            </div>)
                    })
                }

            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
                {
                    ["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                        <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                    )
                }
                <div className="start flex items-center gap-5">
                    <div className='px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full cursor-pointer'>start the project</div>
                    <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-700 rounded-full cursor-pointer">
                        <span className='rotate-[45deg]'><FaArrowUpLong /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage