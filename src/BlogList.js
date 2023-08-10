const MyArray = ({ myArray, title, onClickDelete }) => {
  //
  // const myArray = props.myArray;
  // const title = props.title;
  //
  // console.log(myArray);

  //
  return (
    //
    <div className="myArray-list">
      <h1>{title}</h1>
      <ul>
        {myArray.map(function (oneItem) {
          return (
            <div key={oneItem.id}>
              {/*  */}
              <h4>{oneItem.title}</h4>
              <p>written by : {oneItem.author}</p>
              {/*  */}
              <button
                onClick={function () {
                  onClickDelete(oneItem.id);
                }}
              >
                Delete blog
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MyArray;
