//--sfc -- stateless functional component
import { Link } from "react-router-dom";
const Navbar = () => {
  //

  const Home = <Link to="/">Home</Link>;
  // link to is similar to anchor tag
  // const CreateBlog = <a href="/create">New Blog</a>;
  //
  const CreateBlog = <Link to="/create">New Blog</Link>;
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
