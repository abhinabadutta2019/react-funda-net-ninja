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
  const onClickDelete = function (id) {
    // console.log("Hi1");
    const finalArray = myArray.filter((oneItem) => {
      return oneItem.id != id;
    });
    //
    setMyArray(finalArray);
  };
  //
  return (
    //
    <div className="Home">
      <MyArray
        myArray={myArray}
        title="All items title"
        onClickDelete={onClickDelete}
      />
    </div>
  );
};

export default Home;
