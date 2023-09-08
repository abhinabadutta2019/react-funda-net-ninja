import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  //

  const { id } = useParams(); //this is getting the id
  const { data, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  //
  //for redirection
  const navigate = useNavigate();
  //
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  //
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {/* <h2>Blog details - {id}</h2> */}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          {/* delete button */}
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
