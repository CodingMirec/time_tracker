import React from "react";
import "./Projects.css";

import Sidebar from "../components/Sidebar";

function Projects() {
  return (
    <div className="projects">
      <Sidebar />
      <div className="projects__layout">
        <h1 className="projects__title">Project Chat</h1>
        <div className="projects__container">
          <h2>fun strats now</h2>
        </div>
      </div>
    </div>
  );
}

export default Projects;
