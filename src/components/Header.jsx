import React from "react";
import { motion } from "framer-motion";
// import sangram from '../assets/sangram-high-resolution-logo-white.png';
import whatsapp from '../assets/rajdhani me ghar.jpeg'
function Header() {
  return (
    <div
      id="header"
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url('')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto p-4 relative z-10">
        <nav className="flex items-center justify-between flex-wrap">
          <img
            // src={sangram}
            src=''
            alt="logo"
            className="w-24 sm:w-36 transition-transform transform hover:scale-110"
          />
          <ul className="hidden sm:flex space-x-6 text-white">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative after:content-[''] after:w-0 after:h-[3px] after:bg-pink-500 after:absolute after:left-0 after:bottom-[-6px] hover:after:w-full after:transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Centering the content vertically */}
        <div className="flex flex-col mt-32 lg:flex-row items-center justify-center h-full">
          <div className="header-text text-center mt-[-10px] lg:text-left">
            <motion.p
              className="text-white text-lg sm:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Frontend Developer
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-5xl mt-3 sm:mt-5 text-pink-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              Hi, I'm Saurabh<br />
              Singh From India
            </motion.h1>
          </div>
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 lg:ml-10">
            <img
              className="rounded-full h-48 w-48 sm:h-60 sm:w-60 lg:h-80 lg:w-80"
              src={whatsapp}
              // src='src/assets/rajdhani me ghar.jpeg'
              alt="Sangram's Portfolio"
            />
          </div>
        </div>

        <div className="text-center mt-10">
          {/* Optional button */}
          {/* <a
            href="#portfolio"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
          >
            View My Work
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Header;


