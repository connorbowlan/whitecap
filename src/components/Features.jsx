import { features } from "../assets/constants";
import Feature from "./subcomponents/Feature";

function Features() {
  return (
    <div className="container mx-auto flex flex-row space-x-4">
      {features.map((feature) => (
        <Feature title={feature.title} content={feature.content} />
      ))}
    </div>
  );
}

export default Features;
