import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gray-500 bg-opacity-50 py-2 px-4 rounded text-blue-800">
              Reliable Natural Gas Supply
            </h1>
            <p className="text-lg mb-8 font-bold bg-white bg-opacity-80 py-4 px-6 rounded">
              At Whitecap, we pride ourselves on delivering a reliable and consistent supply of natural gas. Our extensive network ensures that businesses and households can depend on us to meet their energy needs.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>

        <div className="text-dark py-20 hero-2 bg-gray-800 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gray-500 bg-opacity-50 py-2 px-4 rounded text-green-900">
              Sustainable Energy Solution
            </h1>
            <p className="text-lg mb-8 font-bold bg-white bg-opacity-80 py-4 px-6 rounded">
              As a leading provider of natural gas, we are committed to promoting sustainable energy solutions. Natural gas is a cleaner alternative to other fossil fuels, reducing carbon emissions and contributing to a greener future.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>

        <div className="text-dark py-20 hero-3 bg-gray-800 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gray-500 bg-opacity-50 py-2 px-4 rounded text-yellow-400">
              Cost-Effective Energy Source
            </h1>
            <p className="text-lg mb-8 font-bold bg-white bg-opacity-80 py-4 px-6 rounded">
              Choosing natural gas as your energy source offers cost savings and efficiency. With our competitive pricing and efficient distribution, we help businesses and households optimize their energy expenses without compromising quality.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>

        <div className="text-dark py-20 hero-4 bg-gray-800 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gray-500 bg-opacity-50 py-2 px-4 rounded text-green-200">
              Expert Support and Services
            </h1>
            <p className="text-lg mb-8 font-bold bg-white bg-opacity-80 py-4 px-6 rounded">
              Our team of experts is dedicated to providing exceptional customer support and services. From personalized energy consultations to timely maintenance, we ensure a seamless experience for our valued customers.
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
