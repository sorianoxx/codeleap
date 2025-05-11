import React, { useState } from "react";

const PostForm = ({ username, onCreatePost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      username,
      title,
      content,
    };

    onCreatePost(newPost);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
