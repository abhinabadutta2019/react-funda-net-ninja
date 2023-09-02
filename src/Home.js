import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //
  const [blogs, setBlogs] = useState(null);
  //

  //
  const deleteButtonFunc = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return blog.id != id;
    });
    setBlogs(newBlogs);
  };
  //
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  //
  return (
    <div className="home">
      <h2>Homepage</h2>

      {blogs && (
        <BlogList
          blogList={blogs}
          title="All blogs"
          deleteButtonFunc={deleteButtonFunc}
        />
      )}
    </div>
  );
};

export default Home;
