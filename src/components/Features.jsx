import { motion } from 'framer-motion'
import React, { useState } from 'react'


function Features() {

    const [isHoveringOne, setHoveringOne] = useState(false)
    const [isHoveringTwo, setHoveringTwo] = useState(false)

    return (
        <div data-scroll data-scroll-speed="-.09" className='w-full py-20 bg-zinc-200 rounded-t-3xl'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-10'>
                <h1 className='text-6xl text-black'>Featured projects</h1>
            </div>
            <div className="px-10">
                <div className="cards w-full flex gap-10 mt-10">
                    <div onMouseEnter={() => setHoveringOne(true)} onMouseLeave={() => setHoveringOne(false)} className="cardcontainer relative w-1/2 h-[80vh]">
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-extrabold tracking-tighter leading-none'>
                            {
                                "FYDE".split("").map((item, index) => (
                                    <motion.span
                                        className='inline-block translate-y-full'
                                        initial={{ y: "100%" }}
                                        animate={isHoveringOne ? ({ y: "0" }) : ({ y: "100%" })}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    >{item}</motion.span>
                                ))
                            }
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" className='w-full h-full bg-contain hover:scale-110 transition duration-500 cursor-pointer' alt="img1" />
                        </div>
                    </div>

                    <div onMouseEnter={() => setHoveringTwo(true)} onMouseLeave={() => setHoveringTwo(false)} className="cardcontainer relative w-1/2 h-[80vh]">
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-extrabold tracking-tighter leading-none'>
                            {
                                "VISE".split("").map((item, index) => (
                                    <motion.span
                                        className='inline-block translate-y-full'
                                        initial={{ y: "100%" }}
                                        animate={isHoveringTwo ? ({ y: "0" }) : ({ y: "100%" })}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    >{item}</motion.span>
                                ))
                            }
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className='w-full h-full bg-contain hover:scale-110 transition duration-500 cursor-pointer' alt="img2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features