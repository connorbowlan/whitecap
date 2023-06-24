import "./header.css";

function Header() {
  return (
    <div className="whitecap__header section__padding" id="home">
      <div className="whitecap__header-content">
        <h1 className="gradient__text">
          Unlock the Power of Natural Gas with Whitecap.
        </h1>
        <p>
          Discover the untapped potential of natural gas and its numerous
          benefits. From reliable energy supply to environmentally friendly
          solutions, Whitecap is here to help you harness the power of natural
          gas for your needs. Experience the seamless integration of clean
          energy and maximize your energy efficiency with our tailored
          solutions.
        </p>

        <div className="whitecap__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="whitecap__header-content__people"></div>
      </div>
    </div>
  );
}

export default Header;
