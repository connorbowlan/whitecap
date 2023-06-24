import "./information.css";

import Feature from "../../components/feature/Feature";
import React from "react";

function Benefits({ id, header, subHeader, data, className }) {
  return (
    <div id={id} className={`info section-padding ${className}`}>
      <div className="heading">
        <h1 className="gradient-text">{header}</h1>
        <span className="sub-heading">{subHeader}</span>
      </div>

      <div className="container-x">
        {data.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}

export default Benefits;
