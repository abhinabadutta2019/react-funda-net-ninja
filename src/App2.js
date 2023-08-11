const App2 = (props) => {
  //
  const myArray = props.myArr;
  //
  //
  return (
    //
    <div>
      <div>
        {myArray.map((oneItem) => {
          //

          return <p>{oneItem}</p>;
          // return oneItem;
        })}
      </div>
      <div>Hi</div>
    </div>
  );
};

//

export default App2;
