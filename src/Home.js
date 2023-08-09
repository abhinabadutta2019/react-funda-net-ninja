const Home = () => {
  //

  // const homeTitle = "Coming from home component";
  //
  const clickEventFunc = function () {
    //
    console.log("Hello in console");
  };
  //
  const clicktWithParaFunc = function (name) {
    //
    console.log(`Hi ${name}`);
  };
  //
  const clickWithReactEvent = function (e) {
    //
    console.log("this is", e.target);
  };

  //
  return (
    //
    <div className="Home">
      {/*  */}
      {/* <h3>{homeTitle}</h3> */}
      <button onClick={clickEventFunc}>click here</button>
      {/*  */}
      <button
        onClick={() => {
          return clicktWithParaFunc("Rahul bhai");
        }}
      >
        with parameter
      </button>
      {/*  */}
      <button
        onClick={(e) => {
          return clickWithReactEvent(e);
        }}
      >
        with react event
      </button>
    </div>
  );
};

export default Home;
