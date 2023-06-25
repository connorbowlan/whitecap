import "./newsFeature.css";
import { Link } from "react-router-dom";

function NewsFeature({ id, imgUrl, date, title, content }) {
  return (
    <div className="news-feature">
      <Link to={`articles/${id}`}>
        <img src={imgUrl} alt="news_image" />
      </Link>
      <div className="content">
        <div>
          <span className="bold">{date}</span>
          <h3>
            <Link to={`articles/${id}`}>{title}</Link>
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: `${content.substring(0, 200)}...`,
            }}
          />
        </div>
        <span className="read-full">
          <Link to={`articles/${id}`}>Read Full Article</Link>
        </span>
      </div>
    </div>
  );
}

export default NewsFeature;
