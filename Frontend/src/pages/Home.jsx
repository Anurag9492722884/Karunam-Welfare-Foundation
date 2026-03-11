import React from 'react';
import HeroSection from '../components/HeroSection';
import HomeAboutUsSection from '../components/HomeAboutUsSection';
import ProgramSection from '../components/ProgramSection';
import { layer } from '../assets';

const Home = () => {
    return (
        <div className='min-h-screen bg-white'>
            <HeroSection />
            <div className='w-full h-[60px] sm:h-[70px] md:h-[90px]'><img src={layer} className='bg-gradient-to-r from-pink-100 to-purple-200 w-full object-cover h-full border-0' /></div>
            <HomeAboutUsSection />
            <ProgramSection />

        </div>
    );
}

export default Home;
