import React from 'react';
import possibilityImage from '../../assets/field.jpeg';
import './possibility.css';

const Possibility = () => (
  <div className="whitecap__possibility section__padding" id="possibility">
    <div className="whitecap__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="whitecap__possibility-content">
  <h4>Start Exploring Today</h4>
  <h1 className="gradient__text">Unleash the Potential of Natural Gas</h1>
  <p>Discover a world of possibilities with the power of natural gas. Whether it's powering industries, fueling transportation, or providing clean energy solutions, natural gas offers endless opportunities. Embrace the future of energy and unlock new horizons for your business.</p>
  <h4>Request Early Access to Get Started</h4>
</div>

  </div>
);

export default Possibility;
