//--sfc -- stateless functional component

const Navbar = () => {
  //

  const Home = <a href="/">Home</a>;
  const CreateBlog = <a href="/create">New Blog</a>;
  //

  //
  return (
    <div className="Navbar">
      {Home}
      <br />
      {CreateBlog}
    </div>
  );
};

export default Navbar;
