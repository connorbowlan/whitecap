import { Article } from "../components";
import { useParams } from "react-router-dom";

function Articles() {
  const { id } = useParams();

  return (
    <div>
      <h1>Do you like sniffing butts?</h1>
      <p>My dog loves sniffing butts.</p>
    </div>
  );
}

export default Articles;
