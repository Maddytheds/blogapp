import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(blog) 
    })
    .then(() => {
        console.log('new blog added');
        history.push('/')
    });
  };

  return (
    <div className="createBlog">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Blog Content</label>
        <textarea
          id="body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}
