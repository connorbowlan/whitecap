import { useEffect } from "react"; // Add useEffect hook to scroll to top of page on render
import { Hero } from "../containers";
import { articles } from "../assets/content";
import { useParams } from "react-router-dom";

function Articles() {
  const { id } = useParams();
  const article = articles.find((x) => x.id == id);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <Hero
        title={article.title}
        content={article.date}
        showGetStarted={false} // Update "false" to false
      />
      <div className="article">
        <div
          className="section-margin section-padding"
          dangerouslySetInnerHTML={{ __html: `${article.content}` }}
        />
      </div>
    </div>
  );
}

export default Articles;





