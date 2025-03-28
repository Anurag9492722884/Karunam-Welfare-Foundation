import React from 'react'

const Donate = ({onClick}) => {
    const buttonTextStyle = "font-display text-[21px] leading-[23.29px] capitalize font-normal";
  return (
    <a
        onClick={onClick}
      href='https://www.google.com/'
      target='blank'
      className={`rounded-[43.85px] pt-3.5 pb-4 pr-[26px] pl-[29px] text-white ${buttonTextStyle} hover:bg-[#9a289a] transition-colors flex items-center justify-center flex-row gap-1`}
      style={{ background: 'linear-gradient(90deg, #85168B 0%, #136FAF 88%)' }}>
      🤍 Donate
    </a>
  )
}

export default Donate
