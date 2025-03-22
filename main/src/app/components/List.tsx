import React from "react";

interface Post {
  title: string;
}

interface ListProps {
  posts: Post[];
  handleDelete: (index: number) => void;
  handleEdit: (index: number) => void;
  isEditing: boolean;
}

export default function List({
  posts,
  handleDelete,
  handleEdit,
  isEditing,
}: ListProps) {
  return (
    <ul>
      {posts
        .map((post, index) => (
          <li key={index}>
            {post.title}
            {isEditing ? (
              <input type="text" />
            ) : (
              <>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>X</button>
              </>
            )}
          </li>
        ))
        .reverse()}
    </ul>
  );
}
