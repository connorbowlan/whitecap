import "./news.css";

import { Natgas1, Natgas2, Natgas3, Natgas4, Natgas5 } from "./imports";

import Article from "../../components/article/Article";
import React from "react";
import { articles } from "../../assets/content";

function News() {
  return (
    <div className="blog section-padding" id="blog">
      <div className="blog"></div>
      <div className="blog-container">
        <div className="blog-container_groupA">
          <Article
            id={articles[0].id}
            imgUrl={articles[0].img}
            date={articles[0].date}
            text={articles[0].title}
          />
        </div>
        <div className="blog-container_groupB">
          {articles.map((item) => {
            if (item.id !== 1)
              return (
                <Article id={item.id} imgUrl={item.img} date={item.date} text={item.title} />
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default News;
