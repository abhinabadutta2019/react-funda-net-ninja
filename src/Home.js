import { useState } from "react";
import MyArray from "./BlogList";

const Home = () => {
  //

  const [myArray, setMyArray] = useState([
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
  return (
    //
    <div className="Home">
      <MyArray myArray={myArray} title="All items title" />
      {/*  */}
      {/* <MyArray myArray={myArray} /> */}
      {/*  */}

      <MyArray
        myArray={myArray.filter((oneItem) => {
          return oneItem.author == "mario";
        })}
        title="Mario Title"
      />
    </div>
  );
};

export default Home;
