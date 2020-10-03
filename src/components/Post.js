import { Avatar } from "@material-ui/core";
import React from "react";
import "./css/Post.css";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="User Avatar"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="Post Image" />

      <h4 className="post__text">
        <strong>Perfect Shades </strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
