import React from 'react'

function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>
            <div className="flex w-full border-t-[1px] mt-20 pt-4 border-[#A1B562]">
                <div className='w-1/2'>
                    <h1 className='text-6xl'>Our Approach:</h1>
                    <button className='flex gap-10 items-center px-7 py-4 mt-10 uppercase bg-zinc-900 rounded-full text-white'>Read More
                        <div className='w-2.5 h-2.5 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className="h-[75vh] rounded-xl" />
            </div>
        </div>
    )
}

export default About