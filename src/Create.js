import { useState } from "react";

const Create = () => {
  //
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  // this is for loading-- when adding a blog / making the post request
  //it is false-- as - page jokhon shurute render hocche tohon - eta asbenaa, jokhon form submit hobe tokhon asbe
  const [isPending, setIsPending] = useState(false);
  //

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    //
    setIsPending(true);
    //--writing for the post request-- of form data
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
    });
  };
  //
  return (
    <div>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        {/*  */}
        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        {/*  */}
        <label>Blog author :- </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <br />
        {!isPending && <button>Add Blog</button>}
        {!isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
