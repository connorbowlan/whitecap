import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/wheat-fields.jpg';
import './header.css';

const Header = () => (
  <div className="whitecap__header section__padding" id="home">
    <div className="whitecap__header-content">
    <h1 className="gradient__text">Unlock the Power of Natural Gas with Whitecap.</h1>
      <p>Discover the untapped potential of natural gas and its numerous benefits. From reliable energy supply to environmentally friendly solutions, Whitecap is here to help you harness the power of natural gas for your needs. Experience the seamless integration of clean energy and maximize your energy efficiency with our tailored solutions.</p>

      <div className="whitecap__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="whitecap__header-content__people">
        <img src={people} alt="People" />
        <p>1,600 people requested access a visit in the last 24 hours</p>
      </div>
    </div>

    <div className="whitecap__header-image">
      <img src={ai} alt="AI" />
    </div>
  </div>
);

export default Header;

