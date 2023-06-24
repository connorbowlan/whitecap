import {
  Benefits,
  Hero,
  News,
  Possibility,
  Welcome,
} from "../containers";

import { CTA } from "../components";

function Home() {
  return (
    <div>
      <Hero />
      {/* <Brand /> */}
      <Welcome />
      <News />
      <Benefits />
      <Possibility />
      <CTA />
    </div>
  );
}

export default Home;
