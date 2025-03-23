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
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

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
    e.preventDefault();
    if (editIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editIndex] = { title: newPost };
      setPosts(updatedPosts);
      setEditIndex(null);
      setIsEditing(false);
    } else {
      setPosts([...posts, { title: newPost }]);
    }
    setNewPost("");
  };

  const handleDelete = (index: number) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setNewPost(posts[index].title);
    setEditIndex(index);
    setIsEditing(true);
  };
  return (
    <div className="container">
      <h1>Lets learn Next.js</h1>
      <Input
        handleSubmit={handleSubmit}
        newPost={newPost}
        setNewPost={setNewPost}
      />
      <List
        isEditing={isEditing}
        posts={posts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
    </div>
  );
}
