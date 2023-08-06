import { useState } from "react";
//

const Home = () => {
  //
  //   let name = "mario";
  //
  const [name, setName] = useState("mario");
  //
  const [age, setAge] = useState(100);

  const handleClick = () => {
    //
    setName("lungi");
    //
    setAge(55);
    //
    console.log(name, "name");
  };
  //
  //

  return (
    <div className="Home">
      <h2>Homepage</h2>
      {/*  */}
      <p>{name}</p>
      <p>{age}</p>
      {/*  */}
      <button onClick={handleClick}>Click me</button>
      {/*  */}
    </div>
  );
};

export default Home;
