import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import formatDate from "./../../../utils/helper";
import "./Messenger.scss";

const Messenger = ({ setIsMessenger, sendMsg, messageList }) => {
  const [msg, setMsg] = useState("");

  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMsg(msg);
      setMsg("");
    }
  };

  const handleSendMsg = () => {
    sendMsg(msg);
    setMsg("");
  };
  return (
    <div className="messenger-container">
      <div className="messenger-header">
        <h3>Meeting Details</h3>
        <IconButton
          onClick={() => {
            setIsMessenger(false);
          }}
        >
          <CloseIcon className="icon-new" />
        </IconButton>
      </div>
      <div className="messenger-header-tabs">
        <div className="tab">
          <IconButton>
            <CloseIcon className="icon-new" />
          </IconButton>
        </div>
        <div className="tab active">
          <IconButton>
            <CloseIcon className="icon-new" />
          </IconButton>
        </div>
      </div>
      <div className="chat-section">
        {messageList.map((item) => (
          <div key={item.time} className="chat-block">
            <div className="sender">
              {item.user} <small>{formatDate(item.time)}</small>
            </div>
            <p className="msg">{item.msg}</p>
          </div>
        ))}
      </div>
      <div className="send-msg-section">
        <input
          placeholder="Send message to everyone"
          value={msg}
          onChange={(e) => handleChangeMsg(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <IconButton onClick={handleSendMsg}>
          <CloseIcon className="icon-new" />
        </IconButton>
      </div>
    </div>
  );
};

export default Messenger;
