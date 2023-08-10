const Bloglist = ({ allLists, deleteItemFunc }) => {
  //
  const myList = allLists.map(function (oneItem) {
    //
    return (
      <div key={oneItem.id}>
        <h4>{oneItem.title}</h4>
        <p>{oneItem.author}</p>
        <button
          onClick={() => {
            deleteItemFunc(oneItem.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  //
  return myList;
};

export default Bloglist;
