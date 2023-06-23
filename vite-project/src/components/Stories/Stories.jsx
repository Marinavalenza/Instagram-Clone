import { useEffect, useState } from "react";

import "./Stories.css";

import Story from "../Story";

const Stories = ({ user, stories }) => {
  return (
    <div className="Stories">
      <ul className="Stories__List">
        {stories &&
          stories.map((story, index) => (
            <li className="Stories__Item" key={story.index}>
              {story.name.first}
              <Story story={story} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Stories;
