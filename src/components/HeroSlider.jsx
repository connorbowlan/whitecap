import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function HeroSlider() {
  const sliderSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    pauseOnHover: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="mb-8">
      <Slider {...sliderSettings}>
        <div className="text-dark py-20 hero-1 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-opacity-75 py-3 px-6 rounded-lg text-white  ">
              Reliable Natural Gas Supply
            </h1>
            <p className="text-lg mb-8 font-bold py-4 px-6 rounded">
              
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>

        <div className="text-dark py-20 hero-2 bg-gray-800 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-900 to-green-700 bg-opacity-75 py-3 px-6 rounded-lg text-white  ">
              Sustainable Energy Solution
            </h1>
            <p className="text-lg mb-8 font-bold py-4 px-6 rounded">
              
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>

        <div className="text-dark py-20 hero-3 bg-gray-800 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-opacity-75 py-3 px-6 rounded-lg text-white">
              Cost-Effective Energy Source
            </h1>
            <p className="text-lg mb-8 font-bold py-4 px-6 rounded">
              
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>

        <div className="text-dark py-20 hero-4 bg-gray-800 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-500 to-green-100 bg-opacity-75 py-3 px-6 rounded-lg text-white">
              Expert Support and Services
            </h1>
            <p className="text-lg mb-8 font-bold py-4 px-6 rounded">
              
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HeroSlider;

