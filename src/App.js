// import Navbar from "./Navbar";
// import Home from "./Home";

function App() {
  //

  const studentName = "akshay";
  const studentAge = 5;
  const studentsMarksArr = [4, 5, 7];
  const link = "https://www.google.com/";

  //

  return (
    <div>
      <h3>Abhinaba Here</h3>
      <br />
      <p>{studentName}</p>
      <p>{studentAge}</p>
      <p>[4, 5, 7]</p>
      <p>{studentsMarksArr}</p>
      <p>
        <a href={link}>Click here</a>
      </p>
    </div>
  );
}

export default App;
