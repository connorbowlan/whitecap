import React from 'react';
import Feature from '../../components/feature/Feature';
import './white.css';

const White = () => (
  <div className="whitecap__whitecap" id="whitecap">
    <div className="whitecap__whatgpt3-heading">
      <h1 className="gradient__text">Welcome to WhiteCap</h1>
      <p className="whitecap__explore-possibilities">Your gateway to the world of natural gas</p>
    </div>
    <div className="whitecap__whatgpt3-feature">
      <Feature
        title="Discover WhiteCap"
        text="Experience the power and potential of this abundant energy source. Join us on a journey of innovation and sustainability."
      />
    </div>
    <div className="whitecap__whatgpt3-container">
      <Feature
        title="Powering Industries"
        text="Enhance your operations with the reliability and efficiency of natural gas. Fuel your industrial processes and unlock greater productivity and profitability."
      />
      <Feature
        title="Clean Energy Solutions"
        text="Embrace a greener future with natural gas. Discover sustainable energy solutions that reduce emissions and contribute to a cleaner environment."
      />
      <Feature
        title="Transportation Fuel"
        text="Drive towards a more sustainable transportation sector. Experience the benefits of natural gas as a cleaner alternative for vehicles, buses, and more."
      />
    </div>
  </div>
);

export default White;




