import { Hero } from "../containers";
import { articles } from "../assets/content";
import { useParams } from "react-router-dom";

function Articles() {
  const { id } = useParams();
  const article = articles.find((x) => x.id == id);

  return (
    <div>
      <Hero title={article.title} content={article.date} showGetStarted="false" />
      <div className="article">
      <div className="section-margin secton-padding" dangerouslySetInnerHTML={{__html: `${article.content}`} }/>
      </div>
    </div>
  );
}

export default Articles;
