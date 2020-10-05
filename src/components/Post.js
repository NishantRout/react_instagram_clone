import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import firebase from "firebase";
import "./css/Post.css";
import Likes from "./Likes";

function Post({ postId, user, username, caption, imageUrl, liked, likeCount }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  // for posts
  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="User Avatar"
          src="/static/images/avatar/1.jpg"
        />
        <h4>{username}</h4>
      </div>

      <img className="post__image" src={imageUrl} alt="Post Image" />

      <Likes postId={postId} liked={liked} likeCount={likeCount} />

      <h4 className="post__text">
        <strong>{username} </strong>
        {caption}
      </h4>

      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username} </strong>
            {comment.text}
          </p>
        ))}
      </div>

      {user && (
        <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            <strong>Post</strong>
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
