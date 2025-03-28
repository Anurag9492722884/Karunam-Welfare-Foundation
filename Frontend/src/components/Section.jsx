import React from 'react'
import Donate from './Donate'

const Section = (props) => {
    console.log(props.textColor)
    const bgStyle = props.bgStyle
  return (
    <div
      className={`md:flex ${
        props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center justify-evenly md:px-8 bg-[${props.bgColor}]`}
      style={
        bgStyle && bgStyle
      }
      >
      <div className='pt-10 md:py-24 flex flex-col space-y-12 w-fit'>
        <div className='flex flex-col w-fit'>
          <div className='md:flex md:flex-row space-x-3 text-center'>
            <div className='font-tertiary font-normal text-5xl'>{props.texta} </div>
            <div className={`font-default font-normal text-5xl text-[${props.textColor}]`}>
              {props.textb}
            </div>
          </div>
          <div className='text-end italic font-tertiary font-normal text-base text-gray-500'>{`(${props.tag})`}</div>
        </div>
        <div className='font-default font-normal max-w-[620.18px] text-[16.2px]'>{props.content}</div>
        <div className='w-[191px]'>
            <Donate />
        </div>
      </div>
      <div className={`max-h-[${props.size}px] max-w-[${props.size}px]`}><img
        src={props.image}
        alt='Section Image'
        className={`h-[${props.size}px] w-[${props.size}px]`}
      /></div>
    </div>
  )
}

export default Section
