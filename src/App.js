import React, { useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Perfect Shades",
      caption: "We are making instagram clone using react js",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
    {
      username: "Perfect Shades",
      caption: "We are making instagram clone using react js",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
  ]);

  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
