import React from "react";
import {
  BookmarkBorder,
  ChatBubbleOutline,
  Favorite,
  FavoriteBorder,
  Share,
} from "@material-ui/icons";
import { db } from "../config/firebase";

function Likes({ postId, liked, likeCount }) {
  const handleLike = () => {
    db.collection("posts")
      .doc(postId)
      .set(
        {
          liked: true,
          likeCount: likeCount + 1,
        },
        { merge: true }
      );
  };
  console.log("👉", likeCount);
  const handleDisLike = () => {
    db.collection("posts")
      .doc(postId)
      .set(
        {
          liked: false,
          likeCount: likeCount - 1,
        },
        { merge: true }
      );
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
