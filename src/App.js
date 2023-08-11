import App2 from "./App2";

const App = () => {
  //
  // const myText = "India";
  const myArr = [5, 6, 9, 7];
  //
  // const endArr = () => {
  //
  // const mapValue = myArr.map((oneItem) => {
  //   //
  //   const endValue = oneItem * 2;
  //   return <div> {endValue}</div>;
  // });
  //
  //   return mapValue;
  // };
  //
  return (
    <div>
      <p>India</p>
      {/*  */}

      {/* {myArr.map((oneItem) => {
        //

        return <p>{oneItem}</p>;
        // return oneItem;
      })} */}

      {/*  */}

      <App2 myArr={myArr} myArr3={myArr} />
      {/*  */}
    </div>
  );
};

export default App;
