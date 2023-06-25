import { Hero, Info, News, Possibility, Welcome } from "../containers";
import { benefitsData, welcomeData } from "../assets/content";

function Home() {
  return (
    <div>
      <Hero
        title="Unlock the Power of Natural Gas with WhiteCap"
        content="Discover the untapped potential of natural gas and its numerous
          benefits. From reliable energy supply to environmentally friendly
          solutions, WhiteCap is here to help you harness the power of natural
          gas for your needs. Experience the seamless integration of clean
          energy and maximize your energy efficiency with our tailored
          solutions."
        showGetStarted="true"
      />
      {/* <Brand /> */}
      <Info
        id="About"
        data={welcomeData}
        header="Welcome to WhiteCap"
        subHeader="Your gateway to the world of natural gas"
        className="welcome"
      />{" "}
      <News />
      <Info
        id="Benefits"
        data={benefitsData}
        header="Embrace the Power of Natural Gas. Fuel Your Future Today."
        subHeader=""
        className=""
      />
      <Possibility />
      {/* <CTA /> */}
    </div>
  );
}

export default Home;
