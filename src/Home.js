import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  //
  const deleteButtonFunc = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return blog.id != id;
    });
    setBlogs(newBlogs);
  };

  //
  return (
    <div className="home">
      <h2>Homepage</h2>

      <BlogList
        blogList={blogs}
        title="All blogs"
        deleteButtonFunc={deleteButtonFunc}
      />
      {/* <br />
      <BlogList
        blogList={blogs.filter((blog) => {
          return blog.author == "mario";
        })}
        title="mario's blogs"
      /> */}
    </div>
  );
};

export default Home;
