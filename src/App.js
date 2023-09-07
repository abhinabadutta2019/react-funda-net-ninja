import Navbar from "./Navbar";
import Home from "./Home";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";

function App() {
  //

  //

  return (
    <Router>
      {/*  */}
      <div className="App">
        <h1>The app component</h1>
        {/* importing nav component */}
        <Navbar />
        <br />
        {/* <Switch> isused in older syntax*/}
        <Routes>
          <Route path="/" element={<Home />} />
          {/*  */}
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
