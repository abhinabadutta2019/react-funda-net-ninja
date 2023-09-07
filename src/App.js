import Navbar from "./Navbar";
import Home from "./Home";
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
        {/* <Switch> is older syntax*/}
        <Routes>
          <Route path="/" element={<Home />} />
          {/*  */}
          <Route path="/create" element={<Create />} />
        </Routes>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
