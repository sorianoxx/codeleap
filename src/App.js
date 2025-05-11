import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import PostForm from "./components/PostForm";
import Post from "./components/Post";
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://dev.codeleap.co.uk/careers/");
      const data = await response.json();
      setPosts(data.results || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const createPost = async (newPost) => {
    try {
      const response = await fetch("https://dev.codeleap.co.uk/careers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: newPost.username,
          title: newPost.title,
          content: newPost.content,
        }),
      });
      const data = await response.json();
      setPosts([data, ...posts]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const updatePost = async (postId, updatedPost) => {
    try {
      const response = await fetch(
        `https://dev.codeleap.co.uk/careers/${postId}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPost),
        }
      );
      const data = await response.json();
      setPosts(posts.map((post) => (post.id === postId ? data : post)));
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await fetch(`https://dev.codeleap.co.uk/careers/${postId}/`, {
        method: "DELETE",
      });
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("codeleapUser");
    if (savedUser) {
      setUser(savedUser);
    }
    fetchPosts();
  }, []);

  const handleCreatePost = (post) => {
    createPost(post);
  };

  return user ? (
    <div className="container">
      <div className="header">
        <h2>Hello, {user}!</h2>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("codeleapUser");
            setUser(null);
          }}
        >
          Logout
        </button>
      </div>

      <PostForm username={user} onCreatePost={handleCreatePost} />

      <div className="feed">
        {Array.isArray(posts) &&
          posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              currentUser={user}
              onUpdatePost={updatePost}
              onDeletePost={deletePost}
            />
          ))}
      </div>
    </div>
  ) : (
    <Login
      onLogin={(username) => {
        localStorage.setItem("codeleapUser", username);
        setUser(username);
      }}
    />
  );
}

export default App;
