import { useState } from "react";

const Home = () => {
  //

  const [name, setName] = useState("Akshay");
  //
  const clickEventFunc = function () {
    //
    setName("Abir");
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
