import React from "react";
import Task from "./Task";

import "./TrackerDay.css";

function TrackerDay() {
  return (
    <div>
      <div className="tracker__day">
        <div className="day__top">
          <div className="day__date">
            <span>Today</span>
          </div>
          <div className="day__totalHours">
            Day hours: <span className="timeTotal">12:00</span>
          </div>
        </div>
        <div className="day__tasks">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default TrackerDay;
