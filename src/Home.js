import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //

  const [blogList, setBlogList] = useState([
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

  // eta likte giye onnekbar error // problem holo
  ////////////////////////////////////////

  const deleteButtonFunc = function (id) {
    const remainingBlogs = blogList.filter(function (oneItem) {
      return oneItem.id != id;
    });
    //
    setBlogList(remainingBlogs);
  };

  //
  return (
    //
    <div>
      <div className="Home">Hi</div>
      {/* passing props to child component */}

      <h2>All items</h2>
      <BlogList blogList={blogList} deleteButtonFunc={deleteButtonFunc} />
    </div>
  );
};

export default Home;
