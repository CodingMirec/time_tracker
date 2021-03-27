import React from "react";
import "./Chat.css";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="header__left">
          <h4>
            # Your Room
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="header__right">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">Messages</div>
    </div>
  );
}

export default Chat;
