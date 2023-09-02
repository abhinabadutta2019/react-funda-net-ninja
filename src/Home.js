import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  //

  //
  return (
    <div className="home">
      <h2>Homepage</h2>

      {error && <div>{error}</div>}
      {/*  */}

      {isPending && <div>Loading ... </div>}

      {/*  */}

      {data && <BlogList blogList={data} title="All blogs" />}
    </div>
  );
};

export default Home;
