
import React from "react";
// import "./Style.css";
import logo from '../assets/11 logo.png'
import experience from '../assets/experience.png'
import education from "../assets/education.png";
const About = () => {
  return (
    <section id="about" className="py-16 bg-black">
      {/* Container for main content */}
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        {/* Flexbox for layout alignment */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16">
          {/* Illustration on the left */}
          <div className="w-1/3">
            <img
              src={logo}
              alt="Illustration"
              className="w-full"
            />
          </div>

          {/* Information boxes on the right */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            {/* Experience section */}
            <div className="bg-gray-100 rounded-lg py-6 px-4 shadow-lg">
              <div className="flex justify-center pr-5">
                <span>
                  <img className="h-8" src={experience}alt="" />
                </span>{" "}
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <p className="text-gray-600 mt-2">
                1+ years frontend-development
              </p>
            </div>

            {/* Education section */}
            <div className="bg-gray-100 rounded-lg py-6 px-4 shadow-lg">
              <div className="flex justify-center pr-5">
                <span>
                  <img className="h-8" src={education} alt="" />
                </span>{" "}
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Becholer of technology and computer science engineering
              </p>
            </div>
          </div>
        </div>

        {/* <div className="relative mt-32 border py-4 px-20 rounded-[15px] mx-20 overflow-hidden"> */}
        {/* Animated background layer */}
       



      </div>
    </section>
  );
};

export default About;