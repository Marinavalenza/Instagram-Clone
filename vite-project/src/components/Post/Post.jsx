import { useState } from "react";
import "./Post.css";

import { LikeIcon, CommentIcon } from "../../icons";
import SendToIcon from "../../icons/SendToIcon";

const Post = ({ post }) => {
  const { isLike } = post;
  const { isComment } = post;
  const { isSend } = post;
  const [like, setLike] = useState(isLike);
  const [comment, setComment] = useState(isComment);
  const [send, setSend] = useState(isSend);

  const toggleLike = () => {
    setLike((prev) => !prev);
  };

  const toggleComment = () => {
    setComment((prev) => !prev);
  };

  return (
    <article className="Post">
      <div className="PostTop">
        <div className="PostTop__User">
          <div className="User__Image">
            <img
              src={post?.userImage ? post.userImage : ""}
              alt={post?.userName}
            />
          </div>
          <div className="User__Content">
            <p className="User__Username">{post?.userName}</p>
            <p className="User__Location">{post?.location}</p>
          </div>
        </div>
        <div className="PostTop__Actions"></div>
      </div>
      <div className="PostContent">
        {post?.media?.map((media) => (
          <img key={media?.id} src={media?.src} />
        ))}
      </div>
      <div className="PostActions">
        <div onClick={() => toggleLike()} className="PostActions__Like">
          <LikeIcon fill={like && like ? "#FD1D1D" : "#262626"} />
        </div>
        <div onClick={() => toggleComment()} className="PostActions__Comment">
          <CommentIcon {...CommentIcon} />
        </div>
        <div onClick={() => toggleSend()} className="PostActions__Send">
          <SendToIcon {...SendToIcon} />
        </div>
      </div>
    </article>
  );
};

export default Post;
