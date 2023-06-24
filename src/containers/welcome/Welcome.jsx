import "./welcome.css";

import Feature from "../../components/feature/Feature";

function Welcome() {
  return (
    <div className="whitecap" id="whitecap">
      <div className="what-heading">
        <h1 className="gradient-text">Welcome to WhiteCap</h1>
        <p className="explore-possibilities">
          Your gateway to the world of natural gas
        </p>
      </div>
      <div className="what-feature">
        <Feature
          title="Discover WhiteCap"
          text="Experience the power and potential of this abundant energy source. Join us on a journey of innovation and sustainability."
        />
      </div>
      <div className="what-container">
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
}

export default Welcome;
