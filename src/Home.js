import { useState } from "react";
import BlogList from "./BlogList";
//

const Home = () => {
  //
  const [blogs, setBlogs] = useState([
    { title: "My new site", body: "lorem ipsum..1", author: "mario", id: 1 },
    {
      title: "welcome to south",
      body: "lorem ipsum..2",
      author: "yoshi",
      id: 2,
    },
    { title: "Sun is shining", body: "lorem ipsum..3", author: "mario", id: 3 },
  ]);

  return (
    <div className="home">
      {/* props */}
      <BlogList blogs={blogs} title="All Blogs"></BlogList>

      <hr />
      {/*  */}
      <BlogList
        blogs={blogs.filter(function (oneblog) {
          return oneblog.author == "mario";
        })}
        title="Mario's own Blogs"
      ></BlogList>
    </div>
  );
};

export default Home;
