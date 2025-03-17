"use client";
import { useState, useEffect } from "react";
import List from "./components/List";

interface Post {
  title: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]); // Skapar en state för posts
  const [loading, setLoading] = useState<boolean>(true); // Skapar en state för loading

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/posts"); // Hämtar data från filden app/api/posts/route.ts
      const data = await response.json(); // Gör om data till json
      setPosts(data); // Lägger in data i setPosts
      setLoading(false); // Gör om loading till false
    }
    fetchPosts(); // kör functionen fetchPosts när sidan laddas
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Displayar Loading... om loading är true
  }
  return (
    <div className="container">
      <h1>Let's learn Next.js</h1>
      <List posts={posts} /> {/*Skickar med posts till List*/}
    </div>
  );
}
