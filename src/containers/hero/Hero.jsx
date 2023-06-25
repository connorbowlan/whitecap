import "./hero.css";

import { useState } from "react";

function Hero({ title, content, showGetStarted }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleClick() {
    setIsSubmitted(true);
  }

  return (
    <div className="hero section-padding" id="home">
      <div className="hero-content">
        <h1 className="gradient-text">{title}</h1>
        <p>{content}</p>

        {showGetStarted === "true" ? (
          <div className="hero-content-input">
            <input type="email" placeholder="Email Address" />
            <button onClick={handleClick}>Get Started</button>
          </div>
        ) : null}

        {isSubmitted ? (
          <p>Thanks for reaching out! We'll be in contact soon.</p>
        ) : null}
      </div>
    </div>
  );
}

export default Hero;
