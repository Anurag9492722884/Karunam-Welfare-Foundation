import React from "react";
import {
    img2,
    homeImg1,
    homeImg2,
    homeImg3,
    homeImg4,
    homeImg5,
    homeImg6,
    homeImg7,
    homeImg8,
    homeImg9,
    homeImg10
} from '../assets'

const HomeAboutUsSection = () => {
    const images = [
        homeImg1, // Top-left large image
        homeImg2, // Top-right group image
        homeImg3, // Bottom-left kids eating
        homeImg4, // Bottom-right blood donation
        homeImg5, // Center logo (assuming homeImg5 is the logo/text image)
    ];
    return (
        <div className="bg-gradient-to-r from-pink-100 to-purple-200 min-h-screen py-32 px-6 md:px-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* About Us Section */}
                <div className="relative w-[400px] h-[400px] mb-28 ml-24">
                    {/* Central logo or square */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-18 h-18 bg-white shadow-md rounded-lg z-10 flex items-center justify-center">
                        <img src={homeImg7} alt="Center Logo" className="w-full h-full object-contain p-2" />
                    </div>
                    {/* Corner Images */}
                    <img src={homeImg4} alt="Top Left" className="absolute -top-6 -left-21 rounded-lg object-cover" />
                    <img src={homeImg5} alt="Top Right" className="absolute -top-24 -right-2 rounded-lg object-cover" />
                    <img src={homeImg8} alt="Bottom Left" className="absolute transform scale-x-[-1] -bottom-24 -left-2 rounded-lg object-cover" />
                    <img src={homeImg6} alt="Bottom Right" className="absolute transform scale-x-[-1] -bottom-7 -right-21 rounded-lg object-cover" />
                </div>

                {/* About Section */}
                <div>
                    <h2 className="text-pink-800 font-bold text-3xl mb-2 ">ABOUT US</h2>
                    <h3 className="italic text-xl font-medium mb-1">WE'RE ON A MISSION TO SOLVE THE PROBLEMS</h3>
                    <p className="text-pink-600 font-semibold mb-4">YOUR SUPPORT IS REALLY POWERFUL.</p>
                    <p className="text-gray-700 mb-4">
                        Founded by passionate alumni of IIT BHU (Varanasi) and MNNIT Allahabad, our organization was born out of a deep concern for the growing challenges faced by today's society—rising stress, depression among youth, alarming suicide rates, widespread poverty, and an increasing number of unskilled individuals struggling to find direction and purpose.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Our work is not just a service—it’s a movement to build a society where every individual is valued, skilled, and emotionally strong, capable of leading a life filled with purpose, dignity, and compassion.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-pink-800 text-white px-6 py-2 rounded mt-2">READ MORE</button>
                    </div>
                </div>


                {/* Vision and Mission Section */}
                <div>
                    <h2 className="text-blue-700 font-bold text-3xl mb-2">VISION AND MISSION</h2>
                    <h3 className="italic text-xl font-medium mb-1">WE'RE ON A MISSION TO SOLVE THE PROBLEMS</h3>
                    <p className="text-blue-500 font-semibold mb-4">YOUR SUPPORT IS REALLY POWERFUL.</p>
                    <p className="text-gray-700 mb-4">
                        We envision a world where no young soul is left unheard, unseen, or unsupported, recognizing the silent struggles of 1 in 5 young individuals facing depression, anxiety, or emotional distress. Our mission is to provide hope, healing, and empowerment by addressing mental, emotional, and physical well-being through safe accommodation, nutritious food, skill training centers, and career workshops.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Beyond mental wellness, we run initiatives like "Fight Hunger" and Winter Relief Drives, while also focusing on women empowerment in rural areas and value-based education for children and youth.
                    </p>
                    <p className="text-gray-700 mb-4">
                        We are here to fill the invisible gaps—those that are less spoken about but deeply felt—because real change begins where others often stop looking.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-blue-700 text-white px-6 py-2 rounded mt-2">READ MORE</button>
                    </div>
                </div>


                <div className="relative w-[400px] h-[400px] mb-28 ml-20 mt-20">
                    {/* Central logo or square */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-18 h-18 bg-white shadow-md rounded-lg z-10 flex items-center justify-center">
                        <img src={homeImg7} alt="Center Logo" className="w-full h-full object-contain p-2" />
                    </div>
                    {/* Corner Images */}
                    <img src={homeImg3} alt="Top Left" className="absolute -top-6 -left-21 rounded-lg object-cover" />
                    <img src={homeImg10} alt="Top Right" className="absolute -top-24 -right-2 rounded-lg object-cover" />
                    <img src={homeImg1} alt="Bottom Left" className="absolute transform scale-x-[-1] -bottom-24 -left-2 rounded-lg object-cover" />
                    <img src={homeImg2} alt="Bottom Right" className="absolute transform scale-x-[-1] -bottom-7 -right-21 rounded-lg object-cover" />
                </div>
            </div>
        </div>
    );
};

export default HomeAboutUsSection;
