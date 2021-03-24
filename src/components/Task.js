import React from "react";

import "./Task.css";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Task() {
  return (
    <div className="day__task">
      <div className="day__taskName">
        <span className="taskName">Emails</span>
        <span className="taskProject">Amazon</span>
      </div>
      <div className="day__taskInfo">
        <span className="taskInfo__time">15:00 - 19:00</span>
        <span className="timeTotal">4:00</span>
        <PlayArrowIcon onClick="" />
        <MoreVertIcon onClick="" />
      </div>
    </div>
  );
}

export default Task;
