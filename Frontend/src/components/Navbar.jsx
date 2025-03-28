import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { Plus, Menu, X } from 'lucide-react';
import Donate from './Donate';

const Navbar = () => {
    // State to control mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const commonTextStyles = "font-display text-[21px] leading-[33.28px] capitalize font-normal";
    const getLinkClass = ({isActive, isPlusIcon = false}) => {
        const baseStyle = isActive 
            ? `${commonTextStyles} rounded-2xl py-2 px-4 bg-[#881688] text-white` 
            : `${commonTextStyles} py-2`;
            
        return isPlusIcon 
            ? `${baseStyle} flex items-center gap-1` 
            : baseStyle;
    };

    return (
        <div className='w-full h-auto md:h-[111px] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-12 top-0 z-10'
             style={{ background: 'linear-gradient(89.85deg, #FFFFFF -30.52%, #D4B2D9 163.84%)' }}>
            
            {/* Mobile Header */}
            <div className='w-full flex items-center justify-between py-4 md:hidden'>
                {/* Logo */}
                <Link to={'/'}>
                    <img src={logo} alt="logo" className='h-16 object-contain' />
                </Link>
                
                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-[#881688] focus:outline-none"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            
            {/* Desktop Logo */}
            <div className='hidden md:flex items-center'>
                <Link to={'/'}>
                    <img src={logo} alt="logo" className='object-contain' />
                </Link>
            </div>
            
            {/* Navigation Links - Mobile & Desktop */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto items-center justify-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 xl:space-x-14 py-4 md:py-0`}>
                <NavLink 
                    to={'/'} 
                    className={getLinkClass}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </NavLink>
                
                <NavLink 
                    to={'/about'} 
                    className={({isActive}) => getLinkClass({isActive, isPlusIcon: true})}
                    onClick={() => setIsMenuOpen(false)}
                >
                    About Us
                    <Plus size={20} strokeWidth={4} className="inline-block" />
                </NavLink>
                
                <NavLink 
                    to={'/activities'} 
                    className={getLinkClass}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Our Activities
                </NavLink>
                
                <NavLink 
                    to={'/get-involved'} 
                    className={({isActive}) => getLinkClass({isActive, isPlusIcon: true})}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Get Involved
                    <Plus size={20} strokeWidth={4} className="inline-block" />
                </NavLink>
                
                <NavLink 
                    to={'/contact'} 
                    className={getLinkClass}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact
                </NavLink>
                
                {/* Mobile Donate Button */}
                <div className="md:hidden mt-4">
                    <Donate onClick={() => setIsMenuOpen(false)} />
                </div>
            </div>
            
            {/* Desktop Donate Button */}
            <div className="hidden md:block">
                <Donate />
            </div>
        </div>
    );
}

export default Navbar;