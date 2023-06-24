import './benefits.css';

import Feature from '../../components/feature/Feature';
import React from 'react';

const featuresData = [
  {
    title: 'Unlock Sustainable Energy Solutions',
    text: 'Discover how natural gas can revolutionize your energy production and contribute to a cleaner environment. Embrace a greener future with reliable and efficient natural gas solutions.',
  },
  {
    title: 'Enhance Industrial Operations',
    text: 'Fuel your industrial processes with the power of natural gas. Experience the reliability, efficiency, and cost-effectiveness of natural gas for increased productivity and profitability.',
  },
  {
    title: 'Drive Towards a Sustainable Transportation Sector',
    text: 'Explore the benefits of natural gas as a cleaner and more sustainable alternative for vehicles, buses, and other modes of transportation. Join the movement towards a greener and more efficient transportation system.',
  },
  {
    title: 'Tap into the Potential of Natural Gas',
    text: 'Unleash the potential of natural gas for a brighter future. With its abundance, versatility, and environmental benefits, natural gas offers boundless opportunities for a wide range of applications.',
  },
];

const Benefits = () => (
  <div className="features section-padding" id="features">
    <div className="features-heading">
      <h1 className="gradient-text">Embrace the Power of Natural Gas. Fuel Your Future Today.</h1>
      <p className="request-access">Request Early Access to Get Started</p>
    </div>

    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Benefits;