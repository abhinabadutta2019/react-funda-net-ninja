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
  const deleteItemFunc = function (id) {
    //
    const afterDeletedList = blogList.filter((oneItem) => {
      //
      return oneItem.id != id;
    });

    //
    setBlogList(afterDeletedList);
    //
  };

  //
  return (
    //
    <div>
      <h3>All blogs</h3>
      {/* <div>BlogList{(blogList = "blogList")}</div> */}
      {/*  */}
      <BlogList allLists={blogList} deleteItemFunc={deleteItemFunc} />
      {/* <h3>Mario</h3>
      <div>{marioList}</div> */}
    </div>
  );
};

export default Home;
