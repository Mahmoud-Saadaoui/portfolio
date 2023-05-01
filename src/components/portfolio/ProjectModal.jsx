import React from "react";

function ProjectModal({ title, description, demo, repo, setModal }) {
  return (
    <div className="project_modal">
      <div className="project_modal-info">
        <h2 className="project_modal-title">{title}</h2>
        <p className="project_modal-description">{description}</p>
        <div className="project_modal-links">
          <div className="demo">
            <i className="bx bx-link"></i>
          </div>
          <div className="repo">
            <i className="bx bx-code-alt"></i>
          </div>
        </div>
        <button className="button" onClick={() => setModal(false)}>
          close
        </button>
      </div>
    </div>
  );
}

export default ProjectModal;
