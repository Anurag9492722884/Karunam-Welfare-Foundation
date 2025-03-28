import React from 'react'
import logo from '../assets/8.svg'
import thumb from '../assets/left-thumb.png'
import shield from '../assets/shield-logo.png'
import book from '../assets/book.png'
import { facebook, instagram, twitter, whatsapp, youtube } from '../assets'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <div className='bg-white py-2'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-10 text-gray-700 text-center'>
          {/* Support Message */}
          <div className='flex items-center'>
            <img
              src={thumb}
              alt='Support'
              className='w-[174px] h-[174px] z-10 -mr-12'
            />
            <p className='text-[15px] font-default font-medium max-w-[294px]'>
              Every Change We Create Is Because Of Your Unwavering Support.
            </p>
          </div>

          {/* Tax Benefits */}
          <div className='flex  items-center'>
            <img
              src={book}
              alt='Secure'
              className='w-[77px] h-[77px]'
            />
            <p className='text-[15px] font-default font-medium max-w-[294px]'>
              Your Contributions Qualify For Tax Benefits Under Section 80G Of
              The Indian Income Tax Act.
            </p>
          </div>

          {/* Secure Donations */}
          <div className='flex  items-center'>
            <img
              src={shield}
              alt='Secure'
              className='w-[91px] h-[82px] -mr-8 z-10'
            />
            <p className='text-[15px] font-default font-medium max-w-[294px]'>
              Your Donations Are Completely Secure And Protected.
            </p>
          </div>
        </div>
      </div>
      <footer
        className='text-white py-8'
        style={{
          background:
            'linear-gradient(180deg, rgba(136, 22, 136, 0.7) 0%, rgba(34, 6, 34, 0.7) 155.42%)',
        }}>
        <div className='container  flex flex-col md:flex-row justify-around space-x-7 items-center  px-6'>
          {/* Logo & Socials */}
          <div className='flex flex-col items-center text-center text-white py-2'>
            {/* Logo */}
            <img
              src={logo}
              alt='Karunam Logo'
              className='w-[277.51px] h-[277.51px]'
            />

            {/* Social Media Icons */}
            {/* Social Media Icons */}
            <div className='flex gap-3  justify-center'>
              {[
                { href: '#', icon: facebook },
                { href: '#', icon: twitter },
                { href: '#', icon: youtube },
                { href: '#', icon: instagram },
                { href: '#', icon: whatsapp },
              ].map(({ href, icon }) => (
                <a
                  key={icon}
                  href={href}
                  className='w-[40px] h-[41px] flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition'>
                  <img src={icon}></img>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className='text-left  w-[200.5px] h-[377.02px] py-8 pt-16 font-secondary'>
            <h3 className='font-normal text-2xl'>Navigation</h3>
            <ul className='mt-6 space-y-6'>
              <li className='text-[14px]'>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li className='text-[14px]'>
                <NavLink to={'/about'}>About Us</NavLink>
              </li>
              <li className='text-[14px]'>
                <NavLink to={'/activities'}>Our Activities</NavLink>
              </li>
              <li className='text-[14px]'>
                <NavLink to={'/get-involved'}>Get Involved</NavLink>
              </li>
              <li className='text-[14px]'>
                <NavLink to={'/contact'}>Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className='text-left w-[200.5px] h-[377.02px] py-8 pt-16'>
            <h3 className='font-normal text-2xl font-tertiary'>Address</h3>
            <p className=' mt-2 font-default text-[16px]'>Uttar Pradesh</p>
            <h3 className='font-normal text-2xl font-secondary mt-8'>Call us at</h3>
            <p className=' mt-2 font-secondary text-[16px]'>+91</p>
          </div>
        </div>

        {/* Bottom Copyright & Links */}
        <div className='border-t font-default border-white/30 mt-6 pt-4 px-24 text-gray-300 text-sm flex justify-between items-center'>
          {/* Copyright Text */}
          <p className=' text-[16px] font-normal'>
            © 2025{' '}
            <span className='text-[#83178B] font-bold'>
              Karunam Welfare Foundation
            </span>{' '}
            All Rights Reserved
          </p>

          {/* Privacy & Terms Links */}
          <div className='flex space-x-6 text-[16px] font-normal font-secondary'>
            <a
              href='#'
              className='hover:text-white transition'>
              Privacy Policy
            </a>
            <a
              href='#'
              className='hover:text-white transition'>
              Terms and Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
