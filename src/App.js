import Navbar from "./Navbar";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

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
        <Switch>
          <Route path="/">
            {/* component below */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
