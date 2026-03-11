import React from 'react'
import logo from '../assets/8.svg'
import thumb from '../assets/left-thumb.png'
import shield from '../assets/shield-logo.png'
import book from '../assets/book.png'
import { facebook,linkedin, whatsapp, youtube } from '../assets'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='bg-white py-1 mt-4 border-0 border-t-[1px] border-t-black'>
        <div className='container max-w-full mx-auto flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-8 items-center text-gray-700 text-center gap-6 md:gap-4 py-6 md:py-0'>
          {/* Support Message */}
          <div className='flex items-center justify-center md:justify-start gap-3 sm:gap-4'>
            <img
              src={thumb}
              alt='Support'
              className='shrink-0 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[174px] md:h-[174px] z-10 md:-mr-12'
            />
            <p className='text-xs sm:text-sm md:text-[15px] font-default font-medium max-w-[250px] sm:max-w-[280px] md:max-w-[294px]'>
              Every Change We Create Is Because Of Your Unwavering Support.
            </p>
          </div>

          {/* Tax Benefits */}
          <div className='flex items-center justify-center md:justify-start gap-3 sm:gap-4'>
            <img
              src={book}
              alt='Secure'
              className='shrink-0 w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] md:w-[77px] md:h-[77px]'
            />
            <p className='text-xs sm:text-sm md:text-[15px] font-default font-medium max-w-[250px] sm:max-w-[280px] md:max-w-[294px]'>
              Your Contributions Qualify For Tax Benefits Under Section 80G Of
              The Indian Income Tax Act.
            </p>
          </div>

          {/* Secure Donations */}
          <div className='flex items-center justify-center md:justify-start gap-3 sm:gap-4'>
            <img
              src={shield}
              alt='Secure'
              className='shrink-0 w-[56px] h-[52px] sm:w-[68px] sm:h-[62px] md:w-[91px] md:h-[82px] z-10 md:-mr-8'
            />
            <p className='text-xs sm:text-sm md:text-[15px] font-default font-medium max-w-[250px] sm:max-w-[280px] md:max-w-[294px]'>
              Your Donations Are Completely Secure And Protected.
            </p>
          </div>
        </div>
      </div>
      <footer
        className='text-white py-8'
        style={{
          background: 'linear-gradient(1.32deg, rgba(34, 6, 34, 0.9) -10.06%, rgba(136, 22, 136, 0.9) 102.07%)'
        }}>
        <div className='container flex flex-col md:flex-row justify-around md:space-x-7 items-center md:items-start px-4 sm:px-6 gap-8 md:gap-4'>
          {/* Logo & Socials */}
          <div className='flex flex-col items-center text-center text-white py-2'>
            {/* Logo */}
            <img
              src={logo}
              alt='Karunam Logo'
              className='w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[277.51px] md:h-[277.51px]'
            />

{/* Social Media Icons */}
<div className='flex gap-3 justify-center'>
  {[
    { href: 'https://www.facebook.com/profile.php?id=61575919524882', icon: facebook },
    { href: 'https://www.linkedin.com/company/karunamwelfarefoundation', icon: linkedin },
    { href: 'https://www.youtube.com/@KarunamWelfareFoundation', icon: youtube },
    { href: 'https://whatsapp.com/channel/0029Vb5SbbpHVvTU0rXlD01A', icon: whatsapp },
  ].map(({ href, icon }) => (
    <a
      key={icon}
      href={href}
      className='w-[36px] h-[37px] sm:w-[38px] sm:h-[39px] md:w-[40px] md:h-[41px] flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition'
    >
      <img src={icon} alt="" className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] object-contain" />
    </a>
  ))}
</div>
          </div>

          {/* Navigation Links */}
          <div className='text-left w-full sm:w-[180px] md:w-[200.5px] py-4 md:py-8 md:pt-16 font-secondary'>
            <h3 className='font-normal text-xl sm:text-2xl'>Navigation</h3>
            <ul className='mt-4 sm:mt-6 space-y-3 sm:space-y-4 md:space-y-6'>
              <li className='text-xs sm:text-sm md:text-[14px]'>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li className='text-xs sm:text-sm md:text-[14px]'>
                <NavLink to={'/about'}>About Us</NavLink>
              </li>
              <li className='text-xs sm:text-sm md:text-[14px]'>
                <NavLink to={'/activities'}>Our Activities</NavLink>
              </li>
              <li className='text-xs sm:text-sm md:text-[14px]'>
                <NavLink to={'/get-involved'}>Get Involved</NavLink>
              </li>
              <li className='text-xs sm:text-sm md:text-[14px]'>
                <NavLink to={'/contact'}>Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className='text-left w-full sm:w-[180px] md:w-[200.5px] py-4 md:py-8 md:pt-16'>
            <h3 className='font-normal text-xl sm:text-2xl font-tertiary'>Address</h3>
            <p className='mt-2 font-default text-xs sm:text-sm md:text-[16px] leading-relaxed'>
              Karunam Welfare Foundation<br />
              A No-403P No-49 B-50, Dallapurwa Hindupur,<br />
              Bithoor, Kanpur,<br />
              Uttar Pradesh 209217,<br />
              India
            </p>

            <h3 className='font-normal text-xl sm:text-2xl font-secondary mt-6 sm:mt-8'>Call us at</h3>
            <p className='mt-2 font-secondary text-xs sm:text-sm md:text-[16px]'>+91 7607770942</p>
          </div>
        </div>

        {/* Bottom Copyright & Links */}
        <div className='border-t font-default border-white/30 mt-6 pt-4 px-4 sm:px-8 md:px-16 lg:px-24 text-gray-300 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center gap-4'>
          {/* Copyright Text */}
          <p className='text-xs sm:text-sm md:text-[16px] font-normal text-center sm:text-left'>
            © 2025{' '}
            <span className='text-[#ffffff] font-bold'>
              Karunam Welfare Foundation
            </span>{' '}
            All Rights Reserved
          </p>

          {/* Privacy & Terms Links */}
          <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs sm:text-sm md:text-[16px] font-normal font-secondary text-center'>
            <a
              href='https://merchant.razorpay.com/policy/QYfj0fOAihm7A7/terms'
              className='hover:text-white transition'>
              Terms and Conditions
            </a>
             <a
              href='https://merchant.razorpay.com/policy/QYfj0fOAihm7A7/privacy'
              className='hover:text-white transition'>
              Privacy Policy
            </a>
             <a
              href='https://merchant.razorpay.com/policy/QYfj0fOAihm7A7/privacy'
              className='hover:text-white transition'>
              Cancellation and Refund Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
