import React from "react";
import { FaUtensils, FaBookOpen, FaChalkboardTeacher, FaBrain, FaHeart, FaPrayingHands } from "react-icons/fa";

const programs = [
  {
    icon: <FaUtensils size={36} className="text-purple-600" />,
    title: "Feed Poor Initiative",
    description: "Providing meals to underprivileged individuals for a hunger-free society."
  },
  {
    icon: <FaBookOpen size={36} className="text-purple-600" />,
    title: "Education",
    description: "Empowering communities through accessible and quality educational programs."
  },
  {
    icon: <FaChalkboardTeacher size={36} className="text-purple-600" />,
    title: "Skill Training Centres",
    description: "Equipping individuals with vocational skills for employment opportunities."
  },
  {
    icon: <FaBrain size={36} className="text-purple-600" />,
    title: "Mental Wellness Programs",
    description: "Supporting mental health through workshops, therapy, and awareness programs."
  },
  {
    icon: <FaHeart size={36} className="text-purple-600" />,
    title: "Counselling",
    description: "Providing emotional and psychological support through guided counselling sessions."
  },
  {
    icon: <FaPrayingHands size={36} className="text-purple-600" />,
    title: "Mindfulness Retreats",
    description: "Encouraging relaxation and self-awareness through meditation and mindfulness."
  }
];

const ProgramSection = () => {
  return (
    <div className="bg-gradient-to-b from-purple-200 to-purple-50 min-h-screen py-12 px-4">
      {/* Header */}
      <div className="relative bg-purple-700 bg-opacity-70 text-white text-center py-16 rounded-b-3xl">
        <h1 className="text-4xl font-bold">Bringing smiles and spreading hopes</h1>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/your-image-path.jpg")' }}></div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4 flex justify-center">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;