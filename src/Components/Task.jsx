import React from "react";
import '../Stylesheets/Task.css';
import { AiFillCloseCircle } from "react-icons/ai";


const Task = ({ text, done }) => {
  return (
    <div className={done ? "task-container done" : "task-container"}>
      <div className="task-text">
        {text}
      </div>
      <div className="task-icon-container">
        <AiFillCloseCircle className="delete-icon" />
      </div>
    </div>
  );
}

export default Task;