import React, { useState, useEffect } from 'react'
import { home1, home2, home3 } from '../assets'

const HeroSection = () => {
  const [curr, setCurr] = useState(0)
  const images = [home1, home2, home3]
  const handleImageChange = (index) => {
    if (curr === index) return 
    setCurr(index)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = (curr + 1) % images.length
      handleImageChange(nextImage)
    }, 5000)
    return () => clearInterval(interval)
  }, [curr, images.length])

  return (
    <div className='relative overflow-hidden'>
      <div className='absolute inset-0 bg-[#83178B29] z-10'></div>
      <img
        src={images[curr]}
        alt='home'
        className={`w-full h-[720px] object-cover transition-colors ease-in duration-2000 `}
      />
      <div className='absolute bottom-8 right-8 flex space-x-3 z-20'>
        {[0, 1, 2].map((val) => (
          <button
            key={val}
            className='w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer transition-transform'
            onClick={() => handleImageChange(val)}>
            <div
              className={`w-[25px] h-[25px] rounded-full ${
                curr === val ? 'bg-[#83178B]' : 'bg-white'
              } border border-black transition-colors duration-300`}></div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default HeroSection
