import React from "react";
import checkmark from '../assets/checkmark.png'

const Service = () => {
  return (
    <section className="mt-20  experience-section text-center px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        Explore My <span className="text-yellow-500">Experience</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mt-12">
        {/* Frontend Developer Section */}
        <div className="p-6  border-x-4 border-y-4 border-black bg-white rounded-[30px] shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Frontend Developer
          </h2>
          <ul className="py-6 font-semibold text-lg sm:text-xl space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 sm:h-8 rounded-full"
                  src={checkmark}
                  alt=""
                />
                <span className="text-black">HTML</span>
              </div>
              <span className="text-green-600">Experienced</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 sm:h-8 rounded-full"
                  src={checkmark}
                  alt=""
                />
                <span className="text-black">CSS</span>
              </div>
              <span className="text-green-600">Experienced</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 sm:h-8 rounded-full"
                  src={checkmark}
                  alt=""
                />
                <span className="text-black">JavaScript</span>
              </div>
              <span className="text-yellow-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 sm:h-8 rounded-full"
                  src={checkmark}
                  alt=""
                />
                <span className="text-black">React.js</span>
              </div>
              <span className="text-yellow-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 sm:h-8 rounded-full"
                  src={checkmark}
                  alt=""
                />
                <span className="text-black">Tailwind CSS</span>
              </div>
              <span className="text-yellow-500">Intermediate</span>
            </li>
          </ul>
        </div>

        {/* Tools & Frameworks Section */}
        <div className="p-6 border-x-4 border-y-4 border-black bg-white rounded-[30px] shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Tools & Frameworks
          </h2>
          <ul className="py-6 font-semibold text-lg sm:text-xl space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 sm:h-8 rounded-full"
                  src={checkmark}
                  alt=""
                />
                <span className="text-black">Git & GitHub</span>
              </div>
              <span className="text-yellow-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 sm:h-8 rounded-full"
                  src={checkmark}
                  alt=""
                />
                <span className="text-black">Material-UI</span>
              </div>
              <span className="text-yellow-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 sm:h-8 rounded-full"
                  src={checkmark}
                  alt=""
                />
                <span className="text-black">Express</span>
              </div>
              <span className="text-yellow-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 sm:h-8 rounded-full"
                  src={checkmark}
                  alt=""
                />
                <span className="text-black">Vs Code</span>
              </div>
              <span className="text-yellow-500">Intermediate</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 sm:h-8 rounded-full"
                  src={checkmark}
                  alt=""
                />
                <span className="text-black">Node.js</span>
              </div>
              <span className="text-yellow-500">Intermediate</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;