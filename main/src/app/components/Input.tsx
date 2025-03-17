import React from "react";
interface InputProps {
  handleSubmit: () => void;
  newPost: string;
  setNewPost: (newPost: string) => void;
}

export default function Input({
  handleSubmit,
  newPost,
  setNewPost,
}: InputProps) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newPost">Add new post</label>
      <input
        type="text"
        placeholder="Add new"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
