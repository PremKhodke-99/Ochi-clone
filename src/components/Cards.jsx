import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center gap-5 px-20'>
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32' />
          <button className="absolute px-3 py-1 rounded-full border-2 left-10 bottom-10 border-[#CDEA68] text-[#CDEA68] text-[1.5vh]">&copy; 2019-2022</button>
        </div>
      </div>

      <div className="cardcontainer h-[50vh] flex gap-5 w-1/2">
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#004d438e]">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-32' />
          <button className="absolute px-3 py-1 rounded-full border-2 left-10 bottom-10 uppercase text-[1.5vh]">Rating 5.0 on clutch</button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#004d438e]">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-32' />
          <button className="absolute px-3 py-1 rounded-full border-2 left-10 bottom-10 uppercase text-[1.5vh]">Business Bootcamp alumini</button>
        </div>

      </div>
    </div>
  )
}

export default Cards