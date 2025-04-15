import React from 'react';
import HeroSection from '../components/HeroSection';
import { layer } from '../assets';

const Home = () => {
    return (
        <div className='min-h-screen bg-white'>
            <HeroSection />
            <div className='max-w-full'><img src={layer} width={1600} className=' max-w-full object-cover h-[90px] border-0' /></div>
        </div>
    );
}

export default Home;
