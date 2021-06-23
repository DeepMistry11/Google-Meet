import React, { useState, useEffect } from "react";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import ClosedCaptionOutlinedIcon from "@material-ui/icons/ClosedCaptionOutlined";
import PresentToAllOutlinedIcon from "@material-ui/icons/PresentToAllOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import CallEndIcon from "@material-ui/icons/CallEnd";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamOffOutlinedIcon from "@material-ui/icons/VideocamOffOutlined";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import formatDate from "./../../../utils/helper";
import "./CallPageFooter.scss";

const CallPageFooter = ({
  isPresenting,
  stopScreenShare,
  screenShare,
  isAudio,
  toggleAudio,
  disconnectCall,
  isMessenger,
  setIsMessenger,
  messageAlert,
  setMessageAlert,
}) => {
  let interval = null;
  const [currentTime, setCurrentTime] = useState(() => {
    return formatDate();
  });

  useEffect(() => {
    interval = setInterval(() => setCurrentTime(formatDate()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="footer-item">
      <div className="left-item">
        <div className="item-block">
          <span>
            <div className="time">
              <span>{currentTime}</span>
            </div>
            <div className="separator"></div>
          </span>
          <div className="meet-id">
            <div className="meet-id-div">
              <div className="meet-id-text">izs-ugep-apz</div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-item">
        <div className="centered-content">
          <IconButton className={`${!isAudio ? "red-bg" : "control-icon-bg"}`}>
            <Tooltip
              title={`${
                !isAudio ? "Turn on microphone" : "Turn off microphone"
              }`}
              placement="top"
            >
              {!isAudio ? (
                <MicOffIcon
                  onClick={() => toggleAudio(!isAudio)}
                  className="control-icons"
                />
              ) : (
                <MicOutlinedIcon
                  onClick={() => toggleAudio(!isAudio)}
                  className="control-icons"
                />
              )}
            </Tooltip>
          </IconButton>

          <IconButton className="control-icon-bg">
            <Tooltip title="Turn off camera" placement="top">
              <VideocamOutlinedIcon className="control-icons" />
            </Tooltip>
          </IconButton>

          <IconButton className="control-icon-bg">
            <Tooltip title="Turn on captions" placement="top">
              <ClosedCaptionOutlinedIcon className="control-icons" />
            </Tooltip>
          </IconButton>

          {isPresenting ? (
            <div onClick={stopScreenShare}>
              <IconButton
                className="control-icon-bg"
                style={{ backgroundColor: "#8AB4F8" }}
              >
                <Tooltip title="Present now" placement="top">
                  <PresentToAllOutlinedIcon
                    className="control-icons"
                    style={{ color: "black" }}
                  />
                </Tooltip>
              </IconButton>
            </div>
          ) : (
            <div onClick={screenShare}>
              <IconButton className="control-icon-bg">
                <Tooltip title="Present now" placement="top">
                  <PresentToAllOutlinedIcon className="control-icons" />
                </Tooltip>
              </IconButton>
            </div>
          )}

          <IconButton className="control-icon-bg">
            <Tooltip title="More options" placement="top">
              <MoreVertOutlinedIcon className="control-icons" />
            </Tooltip>
          </IconButton>

          <IconButton
            className="control-icon-bg call-icon"
            style={{ backgroundColor: "#EA4335" }}
          >
            <Tooltip title="Leave call" placement="top">
              <CallEndIcon onClick={disconnectCall} className="control-icons" />
            </Tooltip>
          </IconButton>
        </div>
      </div>
      <div className="right-item">
        <div className="right-centered-content">
          <div className="icon-block">
            <IconButton className="right-icon-bg">
              <Tooltip title="Meeting details" placement="top">
                <InfoOutlinedIcon className="control-icons" />
              </Tooltip>
            </IconButton>
            <IconButton className="right-icon-bg">
              <Tooltip title="Show everyone" placement="top">
                <PeopleAltOutlinedIcon className="control-icons" />
              </Tooltip>
            </IconButton>
            <IconButton className="right-icon-bg">
              <Tooltip title="Chat with everyone" placement="top">
                <ChatOutlinedIcon
                  className="control-icons"
                  onClick={() => {
                    setIsMessenger(!isMessenger);
                    setMessageAlert({});
                  }}
                />
              </Tooltip>
              {!isMessenger && messageAlert.alert && (
                <span className="alert-circle-icon"></span>
              )}
            </IconButton>
            <IconButton className="right-icon-bg">
              <Tooltip title="Activities" placement="top">
                <CategoryOutlinedIcon className="control-icons" />
              </Tooltip>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallPageFooter;
