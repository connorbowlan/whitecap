import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function HeroSlider() {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    pauseOnHover: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mb-8">
      <Slider {...sliderSettings}>
        <div className="text-white py-20 hero-1">
          <div className="container mx-auto px-4">
            <section>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Gas Facts</h1>
              <p className="text-lg mb-8">
                Natural gas is a versatile and clean-burning fossil fuel that is widely used for heating, cooking, and powering various industrial processes. It is composed mainly of methane and is odorless in its pure form.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </section>
          </div>
        </div>

        <div className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Benefits of Natural Gas</h1>
            <p className="text-lg mb-8">
              Natural gas is a clean and efficient energy source that helps reduce greenhouse gas emissions. It is used in power generation, transportation, and as a feedstock in the production of various materials. Switching to natural gas can have positive environmental and economic impacts.
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


