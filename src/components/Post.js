import React, { useState } from "react";
import "./Post.css";

const Post = ({ post, currentUser, onUpdatePost, onDeletePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({
    title: post.title,
    content: post.content,
  });
  const [likes, setLikes] = useState(post.likes || 0);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdatePost = () => {
    onUpdatePost(post.id, updatedPost);
    setIsEditing(false);
  };

  const handleDeletePost = () => {
    onDeletePost(post.id);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <h3>{post.title}</h3>
        <div>
          <button onClick={handleEditToggle} className="edit-btn">
            Edit
          </button>
          <button onClick={handleDeletePost} className="delete-btn">
            Delete
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className="edit-post-form">
          <input
            type="text"
            value={updatedPost.title}
            onChange={(e) =>
              setUpdatedPost({ ...updatedPost, title: e.target.value })
            }
            className="edit-input"
          />
          <textarea
            value={updatedPost.content}
            onChange={(e) =>
              setUpdatedPost({ ...updatedPost, content: e.target.value })
            }
            className="edit-textarea"
          ></textarea>
          <button onClick={handleUpdatePost} className="update-btn">
            Update
          </button>
        </div>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="like-container">
        <button onClick={handleLike} className="like-btn">
          Like {likes}
        </button>
      </div>
    </div>
  );
};

export default Post;
