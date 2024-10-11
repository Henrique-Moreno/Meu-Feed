import { useState, useEffect } from "react";
import postsData from "./api/data.json";
import PostCard from "./components/PostCard/PostCard";
import "./App.css";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      setPosts(postsData);
    } catch (error) {
      console.error("Error loading posts:", error);
    }
  }, []);

  return (
    <>
      <header className="app-header">
        <h1>Meu Feed</h1>
      </header>
      <main className="App">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>Loading posts...</p>
        )}
      </main>
      <Footer />
    </>
  );
}
