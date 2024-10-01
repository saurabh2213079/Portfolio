import React from "react";
import pic1 from '../assets/Screenshot 2024-09-13 100027.png'
import pic2 from "../assets/Screenshot 2024-09-05 141053.png";
import pic3 from "../assets/Screenshot 2024-09-05 142642.png";
function Portfolio() {
    // handle movie website link
    const handleMovieLink1 = (movie) => {
        window.open(
          "https://66db02c7d9eea48a4e89f818--lucent-stardust-25f149.netlify.app//",
          "_blank"
        );
        };

      
    // handle movie website link
    const handleMovieLink2 = (movie) => {
        window.open("http://localhost:5177/", "_blank");
        };
  

    // handle movie website link
    const handleMovieLink3 = (movie) => {
        window.open(
          "https://66daf92bf9a7e5779bc26636--coruscating-brigadeiros-e8d823.netlify.app/",
          "_blank"
        );
        };
  return (
    <div id="portfolio" className="py-20 text-gray-400 mt-32">
      <div className="container mx-auto">
        <h1 className="sub-title text-5xl font-bold text-white">My Work</h1>
        <div className="work-list grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div onClick={handleMovieLink1} className="work">
            <img
              src={pic1}
              alt="work 1"
              className="rounded-lg h-[470px]"
            />
            <div className="layer">
              <h3 className="text-2xl font-bold text-white">Movie Website</h3>
            </div>
          </div>
          <div onClick={handleMovieLink2} className="work">
            <img
              src={pic2}
              alt="work 2"
              className="rounded-lg h-[470px]"
            />
            <div className="layer">
              <h3 className="text-2xl font-bold text-white">Blog</h3>
            </div>
          </div>
          <div onClick={handleMovieLink3} className="work">
            <img
              src={pic3}
              alt="work 3"
              className="rounded-lg h-[470px]"
            />
            <div className="layer">
              <h3 className="text-2xl font-bold text-white">
                Social Media website
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;