const BlogList = ({ blogs, title, handleDelete }) => {
  // props destrucred vs props variable - video 11( end)

  // const blogs = props.blogs;

  // const title = props.title;
  // const handleDelete = props.handleDelete;
  return (
    //
    <div className="blog-list">
      <h2>{title}</h2>
      <br />
      {blogs.map(function (oneBlog) {
        return (
          <div className="blog-preview" key={oneBlog.id}>
            <h4>{oneBlog.title}</h4>
            <p>written by : {oneBlog.author}</p>
            {/*  */}
            <button
              onClick={
                //
                function () {
                  //
                  return handleDelete(oneBlog.id);
                }
              }
            >
              Delete blog
            </button>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
