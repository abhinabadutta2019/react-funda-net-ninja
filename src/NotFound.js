import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-Found">
      <h2>Sorry</h2>
      <p>That page not found</p>
      {/* link to homepage */}
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;
