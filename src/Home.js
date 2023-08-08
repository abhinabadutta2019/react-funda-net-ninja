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
  //
  const handleDelete = function (id) {
    //
    const newBlogs = blogs.filter(
      //

      function (oneBlog) {
        //
        if (oneBlog.id !== id) {
          return oneBlog;
        }

        // return oneBlog.id !== id;
      }
      //
    );
    //
    console.log(newBlogs);
    //
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
