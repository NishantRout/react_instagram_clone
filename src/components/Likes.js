import React from "react";
import {
  BookmarkBorder,
  ChatBubbleOutline,
  Favorite,
  FavoriteBorder,
  Share,
} from "@material-ui/icons";
import { db } from "../config/firebase";

function Likes({ postId, user, liked, likeCount }) {
  const handleLike = () => {
    user
      ? db
          .collection("posts")
          .doc(postId)
          .set(
            {
              likeCount: likeCount + 1,
            },
            { merge: true }
          )
      : alert("Login to drop a like !!");
  };
  console.log("👉", likeCount);
  const handleDisLike = () => {
    user
      ? db
          .collection("posts")
          .doc(postId)
          .set(
            {
              likeCount: likeCount - 1,
            },
            { merge: true }
          )
      : alert("Login to continue !!");
  };

  return (
    <div>
      <div className="post__icons">
        <div className="post__iconsLeft">
          {liked ? (
            <Favorite
              className="post__iconsLike"
              onClick={handleDisLike}
              style={{ color: "#ED4956" }}
            />
          ) : (
            <FavoriteBorder className="post__iconsLike" onClick={handleLike} />
          )}
          <ChatBubbleOutline />
          <Share />
        </div>
        <div className="post__iconsCenter"></div>
        <div className="post__iconsRight">
          <BookmarkBorder />
        </div>
      </div>

      <h4 className="post__text">
        <strong>{likeCount} likes</strong>
      </h4>
    </div>
  );
}

export default Likes;
