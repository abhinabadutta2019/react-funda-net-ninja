import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //
  const [blogs, setBlogs] = useState(null);
  //
  const [isPending, setIsPending] = useState(true);
  //
  const [error, setError] = useState(null);
  //
  useEffect(() => {
    //
    setTimeout(() => {
      //
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          // console.log(res);
          //
          if (!res.ok) {
            throw Error("could not fetch data for that resource");
          }
          //
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setBlogs(data);
          setIsPending(false);
          //
          setError(null);
        })
        .catch((err) => {
          // console.log(err.message);
          setIsPending(false);
          //
          setError(err.message);
        });
    }, 1000);
    //
  }, []);

  //
  return (
    <div className="home">
      <h2>Homepage</h2>

      {error && <div>{error}</div>}
      {/*  */}

      {isPending && <div>Loading ... </div>}

      {/*  */}

      {blogs && <BlogList blogList={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
