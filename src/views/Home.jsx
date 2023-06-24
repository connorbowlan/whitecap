import {
  Benefits,
  Blog,
  Footer,
  Hero,
  Possibility,
  Welcome,
} from "../containers";
import { Brand, CTA, Navbar } from "../components";

function Home() {
  return (
    <div>
      <Hero />
      {/* <Brand /> */}
      <Welcome />
      <Blog />
      <Benefits />
      <Possibility />
      <CTA />
    </div>
  );
}

export default Home;
