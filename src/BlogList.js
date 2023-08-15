function BlogList({ blogList, deleteButtonFunc }) {
  //
  //

  return blogList.map((oneItem) => (
    //
    <div key={oneItem.id}>
      <h4>{oneItem.title}</h4>
      <p>author : {oneItem.author}</p>
      {/*  */}
      <button
        onClick={() => {
          deleteButtonFunc(oneItem.id);
        }}
      >
        Delete
      </button>
    </div>
  ));
}

export default BlogList;
