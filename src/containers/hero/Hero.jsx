import "./hero.css";

function Hero({ title, content, showGetStarted }) {
  return (
    <div className="hero section-padding" id="home">
      <div className="hero-content">
        <h1 className="gradient-text">{title}</h1>
        <p>{content}</p>

        {showGetStarted === "true" ? (
          <div className="hero-content-input">
            <input type="email" placeholder="Email Address" />
            <button type="button">Get Started</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Hero;
