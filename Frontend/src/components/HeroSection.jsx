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
        className={`w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[680px] object-cover transition-colors ease-in duration-2000`}
      />
      <div className='absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex space-x-2 sm:space-x-3 z-20'>
        {[0, 1, 2].map((val) => (
          <button
            key={val}
            className='w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[35px] md:h-[35px] rounded-full bg-white flex items-center justify-center cursor-pointer transition-transform hover:scale-110'
            onClick={() => handleImageChange(val)}>
            <div
              className={`w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[25px] md:h-[25px] rounded-full ${
                curr === val ? 'bg-[#83178B]' : 'bg-white'
              } border border-black transition-colors duration-300`}></div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default HeroSection
