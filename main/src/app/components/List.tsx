import React from "react";

interface Post {
  title: string;
}

export default function List({ posts }: Post) {
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  );
}
