import { useState } from "react";
// import BlogList from "./BlogList";

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

  const myList = blogList.map(function (oneItem) {
    //
    return (
      <div key={oneItem.id}>
        <h4>{oneItem.title}</h4>
        <p>{oneItem.author}</p>
      </div>
    );
  });

  //
  // const marioList = blogList.map(function (oneItem) {
  //   //

  //   if (oneItem.author == "mario") {
  //     //
  //     return (
  //       <div key={oneItem.id}>
  //         <h4>{oneItem.title}</h4>
  //         <p>{oneItem.author}</p>
  //       </div>
  //     );
  //   }
  // });

  //
  return (
    //
    <div>
      <h3>All blogs</h3>
      <div>{myList}</div>
      {/*  */}

      {/* <h3>Mario</h3>
      <div>{marioList}</div> */}
    </div>
  );
};

export default Home;
