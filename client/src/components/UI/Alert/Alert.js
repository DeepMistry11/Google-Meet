import React from "react";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import "./Alert.scss";

const Alert = ({ messageAlert }) => {
  return (
    <div className="message-alert-popup">
      <div className="alert-header">
        <ChatBubbleOutlineOutlinedIcon className="comment-icon" />
        <h3>{messageAlert.payload.user}</h3>
      </div>
      <p className="alert-msg">{messageAlert.payload.msg}</p>
    </div>
  );
};
export default Alert;
