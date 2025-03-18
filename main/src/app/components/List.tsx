import React from "react";

interface Post {
  title: string;
}

interface ListProps {
  posts: Post[];
  handleDelete: (index: number) => void;
}

export default function List({ posts, handleDelete }: ListProps) {
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          {post.title}
          <button onClick={() => handleDelete(index)}>X</button>
        </li>
      ))}
    </ul>
  );
}
