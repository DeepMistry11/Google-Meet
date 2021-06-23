import React from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SmsFailedOutlinedIcon from "@material-ui/icons/SmsFailedOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { IconButton } from "@material-ui/core";

import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          alt="logo"
          src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
        />
        <span className="help-text">Meet</span>
      </div>
      <div className="action-btn">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SmsFailedOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
