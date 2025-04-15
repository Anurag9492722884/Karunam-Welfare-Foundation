import React from 'react';
import HeroSection from '../components/HeroSection';
import { layer } from '../assets';

const Home = () => {
    return (
        <div className='min-h-screen bg-white'>
            <HeroSection />
            <div className='max-w-full h-[95px]'><img src={layer} className=' max-w-full md:w-[1550px] object-cover h-[90px] border-0' /></div>
        </div>
    );
}

export default Home;
