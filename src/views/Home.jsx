import { Benefits, Hero, News, Possibility, Welcome } from "../containers";

import { CTA } from "../components";

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
          solutions." showGetStarted="true"
      />
      {/* <Brand /> */}
      <Welcome />
      <News />
      <Benefits />
      <Possibility />
      {/* <CTA /> */}
    </div>
  );
}

export default Home;
