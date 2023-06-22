import { useState, useEffect } from "react";
import { GET } from "../../utils/http";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [chatName, setChatName] = useState("");

  useEffect(() => {
    GET("https://api.npoint.io/11b4d9588fea47dbbde6").then((res) => {
      setChats(res.chatsList);
      console.log(res.chatsList);
    });
  }, []);
  const onSetChatName = (value) => setChatName(value);

  const onChatRendering = () => {
    switch (chatName) {
      case "":
        return chats?.map((chat, i) => (
          <div
            className="Chats__chat"
            onClick={() => onSetChatName(chat.mittente[1].username)}
            key={i}
          >
            <img
              src={chat.mittente[1].immagine_profilo}
              alt={chat.mittente[1].username}
            />
            <div className="Chats__chat--text">
              <p> {chat.mittente[1].username}</p>
              <p> {chat.chats[chat.chats.length - 1].content} </p>
            </div>
          </div>
        ));
      case "joshua_l":
        return (
          <div className="singleChat">
            <p onClick={() => onSetChatName("")}>{"<"} </p>
            {chats[0].chats.map((chat) => (
              <p className="singleChat__msg">{chat.content} </p>
            ))}
          </div>
        );
    }
  };

  return <div className="Chats"> {onChatRendering()} </div>;
};

export default Chats;
