function BlogList({ blogList, title, deleteButtonFunc }) {
  //
  //

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/*  */}
      {blogList.map((oneItem) => (
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
      ))}
    </div>
  );
}

//
export default BlogList;
