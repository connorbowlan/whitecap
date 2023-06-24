import "./header.css";

function Header() {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          Unlock the Power of Natural Gas with WhiteCap
        </h1>
        <p>
          Discover the untapped potential of natural gas and its numerous
          benefits. From reliable energy supply to environmentally friendly
          solutions, WhiteCap is here to help you harness the power of natural
          gas for your needs. Experience the seamless integration of clean
          energy and maximize your energy efficiency with our tailored
          solutions.
        </p>

        <div className="header-content__input">
          <input type="email" placeholder="Email Address" />
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
