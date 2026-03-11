import React from "react";
import {
    homeImg1,
    homeImg2,
    homeImg3,
    homeImg4,
    homeImg5,
    homeImg6,
    homeImg7,
    homeImg8,
    homeImg10
} from '../assets'

const HomeAboutUsSection = () => {
    return (
        <div className="bg-gradient-to-r from-pink-100 to-purple-200 min-h-screen py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                {/* About Us Section */}
                <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-28 order-2 lg:order-1">
                    {/* Central logo or square */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white shadow-xl rounded-xl z-10 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                        <img src={homeImg7} alt="Center Logo" className="w-full h-full object-contain p-2" />
                    </div>
                    {/* Corner Images - Responsive positioning with improved shadows */}
                    <img
                        src={homeImg4}
                        alt="Top Left"
                        loading="lazy"
                        className="absolute -top-4 sm:-top-6 md:-top-8 -left-8 sm:-left-12 md:-left-14 w-32 h-24 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-40 rounded-2xl shadow-lg ring-1 ring-black/5 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src={homeImg5}
                        alt="Top Right"
                        loading="lazy"
                        className="absolute -top-10 sm:-top-12 md:-top-14 -right-2 sm:-right-4 md:-right-6 w-32 h-24 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-40 rounded-2xl shadow-lg ring-1 ring-black/5 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src={homeImg8}
                        alt="Bottom Left"
                        loading="lazy"
                        className="absolute transform scale-x-[-1] -bottom-10 sm:-bottom-12 md:-bottom-14 -left-2 sm:-left-4 md:-left-6 w-32 h-24 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-40 rounded-2xl shadow-lg ring-1 ring-black/5 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src={homeImg6}
                        alt="Bottom Right"
                        loading="lazy"
                        className="absolute transform scale-x-[-1] -bottom-4 sm:-bottom-6 md:-bottom-8 -right-8 sm:-right-12 md:-right-14 w-32 h-24 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-40 rounded-2xl shadow-lg ring-1 ring-black/5 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* About Section */}
                <div className="order-1 lg:order-2 space-y-4">
                    <h2 className="text-pink-800 font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 tracking-tight">ABOUT US</h2>
                    <h3 className="italic text-lg sm:text-xl font-medium mb-2 text-gray-800 leading-relaxed">WE'RE ON A MISSION TO SOLVE THE PROBLEMS</h3>
                    <p className="text-pink-600 font-semibold mb-4 text-sm sm:text-base uppercase tracking-wide">YOUR SUPPORT IS REALLY POWERFUL.</p>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                        Founded by passionate alumni of IIT BHU (Varanasi) and MNNIT Allahabad, our organization was born out of a deep concern for the growing challenges faced by today's society—rising stress, depression among youth, alarming suicide rates, widespread poverty, and an increasing number of unskilled individuals struggling to find direction and purpose.
                    </p>
                    <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                        Our work is not just a service—it's a movement to build a society where every individual is valued, skilled, and emotionally strong, capable of leading a life filled with purpose, dignity, and compassion.
                    </p>
                    <div className="flex justify-center md:justify-start pt-2">
                        <button className="bg-pink-800 text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-pink-900 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            READ MORE
                        </button>
                    </div>
                </div>


                {/* Vision and Mission Section */}
                <div className="order-3 space-y-4">
                    <h2 className="text-blue-700 font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 tracking-tight">VISION AND MISSION</h2>
                    <h3 className="italic text-lg sm:text-xl font-medium mb-2 text-gray-800 leading-relaxed">WE'RE ON A MISSION TO SOLVE THE PROBLEMS</h3>
                    <p className="text-blue-500 font-semibold mb-4 text-sm sm:text-base uppercase tracking-wide">YOUR SUPPORT IS REALLY POWERFUL.</p>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                        We envision a world where no young soul is left unheard, unseen, or unsupported, recognizing the silent struggles of 1 in 5 young individuals facing depression, anxiety, or emotional distress. Our mission is to provide hope, healing, and empowerment by addressing mental, emotional, and physical well-being through safe accommodation, nutritious food, skill training centers, and career workshops.
                    </p>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                        Beyond mental wellness, we run initiatives like "Fight Hunger" and Winter Relief Drives, while also focusing on women empowerment in rural areas and value-based education for children and youth.
                    </p>
                    <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                        We are here to fill the invisible gaps—those that are less spoken about but deeply felt—because real change begins where others often stop looking.
                    </p>
                    <div className="flex justify-center md:justify-start pt-2">
                        <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-blue-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            READ MORE
                        </button>
                    </div>
                </div>


                <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-28 mt-8 sm:mt-12 md:mt-20 order-4">
                    {/* Central logo or square */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white shadow-xl rounded-xl z-10 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                        <img src={homeImg7} alt="Center Logo" className="w-full h-full object-contain p-2" />
                    </div>
                    {/* Corner Images - Responsive positioning with improved shadows */}
                    <img
                        src={homeImg3}
                        alt="Top Left"
                        loading="lazy"
                        className="absolute -top-4 sm:-top-6 md:-top-8 -left-8 sm:-left-12 md:-left-14 w-32 h-24 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-40 rounded-2xl shadow-lg ring-1 ring-black/5 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src={homeImg10}
                        alt="Top Right"
                        loading="lazy"
                        className="absolute -top-10 sm:-top-12 md:-top-14 -right-2 sm:-right-4 md:-right-6 w-32 h-24 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-40 rounded-2xl shadow-lg ring-1 ring-black/5 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src={homeImg1}
                        alt="Bottom Left"
                        loading="lazy"
                        className="absolute transform scale-x-[-1] -bottom-10 sm:-bottom-12 md:-bottom-14 -left-2 sm:-left-4 md:-left-6 w-32 h-24 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-40 rounded-2xl shadow-lg ring-1 ring-black/5 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src={homeImg2}
                        alt="Bottom Right"
                        loading="lazy"
                        className="absolute transform scale-x-[-1] -bottom-4 sm:-bottom-6 md:-bottom-8 -right-8 sm:-right-12 md:-right-14 w-32 h-24 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-40 rounded-2xl shadow-lg ring-1 ring-black/5 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeAboutUsSection;
