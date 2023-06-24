import './blog.css';

import { Natgas1, Natgas2, Natgas3, Natgas4, Natgas5 } from './imports';

import Article from '../../components/article/Article';
import React from 'react';

const Blog = () => (
  <div className="blog section__padding" id="blog">
    <div className="blog">
  
</div>
<div className="blog-container">
  <div className="blog-container_groupA">
    <Article imgUrl={Natgas1} date="Mar 26, 2023" text="Discover the Latest Trends in Natural Gas Industry" />
  </div>
  <div className="blog-container_groupB">
    <Article imgUrl={Natgas2} date="Jan 26, 2023" text="How Natural Gas Revolutionizes Energy Production" />
    <Article imgUrl={Natgas3} date="Feb 26, 2023" text="The Importance of Natural Gas in Sustainable Development" />
    <Article imgUrl={Natgas4} date="Apr 26, 2023" text="The Future of Natural Gas: Innovations and Opportunities" />
    <Article imgUrl={Natgas5} date="May 26, 2023" text="Unlocking the Potential of Natural Gas for a Greener Future" />
  </div>
</div>
  </div>
);

export default Blog;

