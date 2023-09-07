import { Link } from "react-router-dom";

function BlogList({ blogList, title }) {
  //
  //

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/*  */}
      {blogList.map((oneItem) => (
        <div key={oneItem.id}>
          {/* this link tag creating <a></a> tag or hyperlink */}
          {/* ${oneItem.id}--- this is js - object literal */}
          <Link to={`/blogs/${oneItem.id}`}>
            <h4>{oneItem.title}</h4>
            <p>author : {oneItem.author}</p>
          </Link>

          {/*  */}
        </div>
      ))}
    </div>
  );
}

//
export default BlogList;
