import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
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

  const mariosBlogs = [];
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].author === "mario") {
      mariosBlogs.push(blogs[i]);
    }
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList blogs={mariosBlogs} title="Mario's Blogs" />
    </div>
  );
};

export default Home;
