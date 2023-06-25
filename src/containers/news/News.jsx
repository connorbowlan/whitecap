import "./news.css";

import NewsFeature from "../../components/newsFeature/NewsFeature";
import { articles } from "../../assets/content";

function News() {
  return (
    <div id="News" className="news section-padding">
      <div className="news"></div>
      <div className="news-container">
        <div className="news-container_groupA">
          <NewsFeature
            id={articles[0].id}
            imgUrl={articles[0].img}
            date={articles[0].date}
            title={articles[0].title}
            content={articles[0].content}
          />
        </div>
        <div className="news-container_groupB">
          {articles.map((item) => {
            if (item.id !== 1)
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
      </div>
    </div>
  );
}

export default News;
