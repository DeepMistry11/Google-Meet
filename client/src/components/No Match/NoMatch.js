import React from "react";
import { Link } from "react-router-dom";
import Header from "../UI/Header/Header";
import "./NoMatch.scss";

function NoMatch() {
  return (
    <div className="no-match">
      <Header />
      <div className="no-match__content">
        <h2>Invalid video call name</h2>
        <div className="action-btn">
          <Link className="return-btn blue-btn" to="/">
            Return to home screen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;