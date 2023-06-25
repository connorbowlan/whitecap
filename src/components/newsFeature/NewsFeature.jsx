import "./newsFeature.css";
import { Link } from "react-router-dom";

function NewsFeature({ id, imgUrl, date, title, content }) {
  return (
    <div className="news-container_article">
      <div className="news-container_article-image">
        <img src={imgUrl} alt="news_image" />
      </div>
      <div className="news-container_article-content">
        <div>
          <p className="date">{date}</p>
          <h3>{title}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: `${content.substring(0, 300)}...`,
            }}
          />
        </div>
        <p>
          <Link to={`articles/${id}`}>Read Full Article</Link>
        </p>
      </div>
    </div>
  );
}

export default NewsFeature;
