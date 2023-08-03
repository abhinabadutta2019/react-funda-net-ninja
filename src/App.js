import "./App.css";

function App() {
  //

  const title = "welcome to blog created by Abhinaba";
  const likesCount = 50;
  // const personDetails = { name: "Abhinaba", age: 30 };
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likesCount} times</p>
        {/* <p>{personDetails}</p> */}
        <p>{10}</p>
        <p>{"hello, trekkers"}</p>
        <p>{[1, 3, 4, 7]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google site link</a>
      </div>
    </div>
  );
}

export default App;
