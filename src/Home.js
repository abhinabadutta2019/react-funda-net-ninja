import { useState } from "react";
import BlogList from "./BlogList";

function Home() {
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
  const deleteButtonFunc = (id) => {
    //
    const afterDeleteArray = blogList.filter((oneItem) => oneItem.id != id);
    //
    setBlogList(afterDeleteArray);
    //
    return setBlogList;
  };

  // console.log(blogList, "blogList");

  return <BlogList blogList={blogList} deleteButtonFunc={deleteButtonFunc} />;
}

export default Home;
