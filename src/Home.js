const Home = () => {
  //

  const handleClick = (e) => {
    console.log("Hello from Abhinaba", e.target);
  };
  //
  //
  const handleClickClickAgain = (name, e) => {
    //
    console.log(`${name}, hello from Abhi..`, e.target);
  };
  return (
    <div className="Home">
      <h2>Homepage</h2>
      {/*  */}
      <button onClick={handleClick}>Click me</button>
      {/*  */}
      <button
        onClick={function (e) {
          //
          handleClickClickAgain("Harry👑", e);
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
