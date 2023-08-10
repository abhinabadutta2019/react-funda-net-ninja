const BlogList = ({ blogList, deleteButtonFunc }) => {
  return (
    <div>
      {blogList.map(function (oneItem) {
        return (
          <div key={oneItem.id}>
            <h4>{oneItem.title}</h4>
            <p>{oneItem.author}</p>
            {/*  eta korchilam -- error aschilo*/}
            {/* ----------------------------------------- */}
            {/* <button onClick={deleteButtonFunc}></button> */}
            {/* eta correct */}
            <button onClick={() => deleteButtonFunc(oneItem.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
