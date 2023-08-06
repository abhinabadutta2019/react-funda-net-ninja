const BlogList = (props) => {
  //
  const blogs = props.blogs;
  const title = props.title;
  //
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      <br />
      {/*  */}
      {blogs.map(function (oneblog) {
        //--return --ei return statement chara fronend e dekhabe na
        return (
          <div className="blog-preview" key={oneblog.id}>
            <h2>{oneblog.title}</h2>
            <p>{oneblog.author}</p>

            <br />
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
