import './brand.css';

import { atlassian, dropbox, google, shopify, slack } from './imports';

import React from 'react';

const Brand = () => (
  <div className="brand section-padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;




