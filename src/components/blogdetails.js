// // import { useState } from "react";
// import { useEffect, useState } from "react";
// import PostCard from "./components/postcard";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// export default function BlogDetails() {
//   const { id } = useParams();
//   const [post, setPost] = useState([])
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((res) => res.json())
//       .then((data) => setPost(data));
//   }, []);
  
//   return (
//     <div>
//       <h1>Blog Details:{id}</h1>
//       <br />
//       {post.map((item)=>{
//         <p>{item.title}</p>
//       })}
//       <p>body</p>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null); 
  const handleDelete=()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{

    method: "DELETE"
    })  }


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="detailPost">
      <h1>{post.title}</h1>
      <br />
      {/* <h2>{post.title}</h2> */}
      <p>{post.body}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
