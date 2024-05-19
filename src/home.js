import { useEffect, useState } from "react";
import "./App.css";
import PostCard from "./components/postcard";
// import { useNavigate} from 'react-router-dom';


function Home() {
  // const navigator = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
// const postDetails= (id)=> {
//   navigator(`/blogdetails/${id}`)
// }
//   console.log(posts);
  return (
    <div>
          <div className="homePage">
            <h1>Blog Posts</h1>
            <div className="cards">
              {posts.map((item) => (
                <PostCard title={item.title} body={item.body} id={item.id} />
              ))}
            </div>
          </div>
    </div>
  );
}

export default Home;
