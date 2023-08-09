import { useState } from "react";

const Home = () => {
  //
  let name = "Akshay";
  //
  const clickEventFunc = function () {
    name = "Abir";
    //
    console.log(name, "name");
  };

  //
  return (
    //
    <div className="Home">
      {/*  */}
      <p>your name :{name}</p>

      {/*  */}
      <button onClick={clickEventFunc}>Click here</button>
    </div>
  );
};

export default Home;
