const BlogList = ({ blogs, title, handleDelete }) => {
  //

  //
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      <br />
      {blogs.map((oneblog) => (
        <div className="blog-preview" key={oneblog.id}>
          <h2>{oneblog.title}</h2>

          <p>Written by {oneblog.author}</p>

          {/*delete button   */}
          <button
            onClick={function () {
              handleDelete(oneblog.id);
            }}
          >
            delete blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
