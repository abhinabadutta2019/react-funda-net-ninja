import { useState, useEffect } from "react";
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
  const [name, setName] = useState("mario");
  //
  const deleteButtonFunc = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return blog.id != id;
    });
    setBlogs(newBlogs);
  };
  //
  useEffect(() => {
    // console.log("use effect ran");
    // console.log(name);
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
    //
  }, []);

  //
  return (
    <div className="home">
      <h2>Homepage</h2>

      <BlogList
        blogList={blogs}
        title="All blogs"
        deleteButtonFunc={deleteButtonFunc}
      />
      {/*  */}
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
