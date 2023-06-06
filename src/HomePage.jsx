import React from 'react';
import { aboutSection, introSection } from './assets/constants.jsx';
import Feature from './components/subcomponents/Feature.jsx';

function Home() {
  return (
    <div>
      <section>
        <h2>{introSection.title}</h2>
        <p>{introSection.content}</p>
      </section>

      <section>
        <h2>{aboutSection.title}</h2>
        <p>{aboutSection.content}</p>
      </section>

      <section>
        <Feature title="Cleaner Energy" content="Some content about cleaner energy." />
        <Feature title="Saving Money" content="Some content about saving money." />
        <Feature title="Better Environmentally" content="Some content about better environment." />
      </section>
    </div>
  );
}

export default Home;


