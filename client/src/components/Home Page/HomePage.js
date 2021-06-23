import React from "react";
import Header from "../UI/Header/Header";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { useHistory } from "react-router-dom";

import shortid from "shortid";
import "./HomePage.scss";

function HomePage() {
  const history = useHistory();

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Premium video meetings Now free for everyone.</h2>
            <p>
              We re-engineered the service we built for secure business
              meetings, Google Meet, to make it free and available for all.
            </p>
            <div className="action-btn">
              <button className="btn blue-btn" onClick={startCall}>
                <VideoCallOutlinedIcon className="icon-block" />
                New meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <KeyboardIcon className="icon-block" />
                  <input placeholder="Enter a code or link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a>
              <b className="learn-More-link">Learn more</b> about google meet
            </a>
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img src="https://cdn.vox-cdn.com/thumbor/01PXfCQWCsQxBmJUaRZOTovWYDY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19917601/Google_Meet_1.max_2000x2000.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
