import React from 'react';
import HeroSection from '../components/HeroSection';
import { layer } from '../assets';

const Home = () => {
    return (
        <div className='min-h-screen '>
            <HeroSection />
            <img src={layer} className='w-full h-[90px]' />
        </div>
    );
}

export default Home;
