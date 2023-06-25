import "./news.css";

import NewsFeature from "../../components/newsFeature/NewsFeature";
import { articles } from "../../assets/content";

function News() {
  return (
    <div id="News" className="section-padding">
      {articles.map((item) => {
        return (
          <NewsFeature
            id={item.id}
            imgUrl={item.img}
            date={item.date}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
  );
}

export default News;
