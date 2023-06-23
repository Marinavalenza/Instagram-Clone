import React from "react";
import "./bottomBar.css";

// icons
import { HomeIcon, SearchIcon, ReelsIcon, FollowLikeIcon } from "../../icons";

function BottomBar() {
  return (
    <div className="BottomBar">
      <div className="BottomBar__Item">
        <HomeIcon />
      </div>
      <div className="BottomBar__Item">
        <SearchIcon />
      </div>
      <div className="BottomBar__Item">
        <ReelsIcon />
      </div>
      <div className="BottomBar__Item">
        <FollowLikeIcon />
      </div>
      <div className="BottomBar__Item">Profile</div>
    </div>
  );
}

export default BottomBar;
