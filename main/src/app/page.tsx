"use client";
import { useState, useEffect } from "react";
import List from "./components/List";
import Input from "./components/Input";

interface Post {
  title: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]); // Skapar en state för posts
  const [loading, setLoading] = useState<boolean>(true); // Skapar en state för loading
  const [newPost, setNewPost] = useState<string>("");
  const [newPosts, setNewPosts] = useState<Post[]>([]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Förhindrar att sidan laddas om när
    setNewPosts([...newPosts, { title: newPost }]); // Lägger till newPost i newPosts
    setNewPost(""); // Tömmer newPost
  };
  return (
    <div className="container">
      <h1>Let's learn Next.js</h1>
      <Input
        handleSubmit={handleSubmit}
        newPost={newPost}
        setNewPost={setNewPost}
      />{" "}
      {/*Skapar en input*/}
      <List posts={[...posts, ...newPosts]} />{" "}
      {/*Skickar med posts till List "..." menas med alla*/}
    </div>
  );
}
