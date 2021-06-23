import React from "react";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import "./MeetingInfo.scss";

function MeetingInfo({ setMeetingInfo, url }) {
  return (
    <div className="meetingInfo-block">
      <div className="meeting-header">
        <h3>Your meeting's ready</h3>
        <IconButton
          onClick={() => {
            setMeetingInfo(false);
          }}
        >
          <CloseIcon className="icon-new" />
        </IconButton>
      </div>
      <div className="meeting-info">
        <button className="add-people-btn">
          <PersonAddOutlinedIcon className="add-icon" />
          Add others
        </button>
        <p className="info-text">
          Or share this meeting link with others you want in the meeting
        </p>
        <div className="meet-link">
          <span>{url}</span>
          <IconButton onClick={() => navigator.clipboard.writeText(url)}>
            <FileCopyOutlinedIcon className="icon-new" />
          </IconButton>
        </div>
        <div className="permission-text">
          <img src="https://www.gstatic.com/meet/security_shield_with_background_2f8144e462c57b3e56354926e0cda615.svg" />
          <p className="small-text">
            People who use this meeting link must get your permission before
            they can join.
          </p>
        </div>
        <p className="small-text">Joined as deepmistry753@gmail.com</p>
      </div>
    </div>
  );
}

export default MeetingInfo;
