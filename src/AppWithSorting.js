import React, { useEffect, useState } from "react";
import App from "./App";
import SortBar from "./components/SortBar";
import { sortPosts } from "./utils/sortPosts";
import "./App.css";

function AppWithSorting() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [sortType, setSortType] = useState("newest");

  
  const fetchPosts = async () => {
    try {
      const response = await fetch("https://dev.codeleap.co.uk/careers/");
      const data = await response.json();
      setPosts(data.results || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const sortedPosts = sortPosts(posts, sortType);

  return (
    <div className="container">
      {!user ? (
        <App user={user} setUser={setUser} />
      ) : (
        <>
          <h2>Hello, {user}!</h2>
          <SortBar sortType={sortType} setSortType={setSortType} />
          <App
            user={user}
            setUser={setUser}
            posts={sortedPosts}
            setPosts={setPosts}
          />
        </>
      )}
    </div>
  );
}

export default AppWithSorting;
