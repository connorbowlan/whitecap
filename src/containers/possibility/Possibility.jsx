import "./possibility.css";

import possibilityImage from "../../assets/field.jpeg";

function Possibility() {
  return (
    <div id="Possibility" className="possibility section-padding">
      <div>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="content">
        <h1 className="gradient-text">Unleash the Potential of Natural Gas</h1>
        <h4>Start Exploring Today</h4>
        <p>
          Discover a world of possibilities with the power of natural gas.
          Whether it's powering industries, fueling transportation, or providing
          clean energy solutions, natural gas offers endless opportunities.
          Embrace the future of energy and unlock new horizons for your
          business.
        </p>
      </div>
    </div>
  );
}

export default Possibility;
