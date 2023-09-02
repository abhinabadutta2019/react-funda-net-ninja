import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //
  const [blogs, setBlogs] = useState(null);
  //
  const [isPending, setIsPending] = useState(true);
  //
  useEffect(() => {
    //
    setTimeout(() => {
      //
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
    //
  }, []);

  //
  return (
    <div className="home">
      <h2>Homepage</h2>

      {isPending && <div>Loading ... </div>}

      {/*  */}

      {blogs && <BlogList blogList={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
