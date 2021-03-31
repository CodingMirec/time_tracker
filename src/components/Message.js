import React from "react";

import "./Message.css";

function Message() {
  return (
    <div className="message">
      <img src="" alt="avatar" />
      <div className="message__info">
        <h4>
          username
          <span>Sat, 06 Mar 2021 23:00:47 GMT</span>
        </h4>
        <p>message stuff here</p>
      </div>
    </div>
  );
}

export default Message;
