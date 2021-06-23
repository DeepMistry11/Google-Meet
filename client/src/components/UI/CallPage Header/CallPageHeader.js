import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton } from "@material-ui/core";
import "./CallPageHeader.scss";

function CallPageHeader() {
  return (
    <div className="frame-header">
      <div className="header-items icon-block">
        <IconButton className="icon-bg">
          <MoreHorizIcon className="menu-icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default CallPageHeader;
