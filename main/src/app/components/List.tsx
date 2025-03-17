import React from "react";

interface Post {
  title: string;
}

interface ListProps {
  posts: Post[];
}

export default function List({ posts }: ListProps) {
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  );
}
