import "./infoFeature.css";

function InfoFeature({ title, text }) {
  return (
    <div className="features-container-feature">
      <div className="features-container-feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default InfoFeature;
