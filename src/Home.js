import { useState } from "react";
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
      {blogs.map(function (oneblog) {
        //--return --ei return statement chara fronend e dekhabe na
        return (
          <div className="blog-preview" key={oneblog.id}>
            <h2>{oneblog.title}</h2>
            <p>{oneblog.author}</p>

            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
