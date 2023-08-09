//
import { useState } from "react";
import BlogList from "./BlogList";
//

const Home = () => {
  //
  const [blogs, setBlogs] = useState([
    //
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
  // for loop

  // const handleDelete = (id) => {
  //   const newBlogs = [];
  //   for (let i = 0; i < blogs.length; i++) {
  //     if (blogs[i].id !== id) {
  //       newBlogs.push(blogs[i]);
  //     }
  //   }
  //   setBlogs(newBlogs);
  // };
  //
  //
  //
  const handleDelete = (id) => {
    const newBlogs = [];
    blogs.forEach((blog) => {
      if (blog.id !== id) {
        newBlogs.push(blog);
      }
    });
    setBlogs(newBlogs);
  };

  //
  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All blogs .."
        handleDelete={handleDelete}
      ></BlogList>
    </div>
  );
};

//

export default Home;
