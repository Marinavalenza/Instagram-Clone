import { useState, useEffect } from "react";
import "./App.css";

import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";

// components
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Camera from "./components/Camera/Camera";

function App() {
  const [section, setSection] = useState("home");

  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);

  useEffect(() => {
    fetch("https://api.npoint.io/adc636d157eca6ea42e5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera />;
      case "tv":
        return <h1></h1>;
      case "messages":
        return <h1>MESSAGGI</h1>;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} />
      {onSectionRender()}
    </>
  );
}

export default App;
