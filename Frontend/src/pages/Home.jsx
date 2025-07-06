import React from 'react';
import HeroSection from '../components/HeroSection';
import HomeAboutUsSection from '../components/HomeAboutUsSection';
import ProgramSection from '../components/ProgramSection';
import { layer } from '../assets';

const Home = () => {
    return (
        <div className='min-h-screen bg-white'>
            <HeroSection />
            <div className='max-w-full h-[95px]'><img src={layer} className='bg-gradient-to-r from-pink-100 to-purple-200 max-w-full md:w-[1550px] object-cover h-[90px] border-0' /></div>
            <HomeAboutUsSection />
            <ProgramSection />

        </div>
    );
}

export default Home;
