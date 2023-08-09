import React from "react";
import '../Stylesheets/Task.css';
import { AiFillCloseCircle } from "react-icons/ai";


const Task = ({ id, text, done, taskDone, taskDelete }) => {
  return (
    <div className={done ? "task-container done" : "task-container"}>
      <div className="task-text"
           onClick={()=> taskDone(id)} >
        {text}
      </div>
      <div className="task-icon-container"
           onClick={()=> taskDelete(id)}>
        <AiFillCloseCircle className="delete-icon" />
      </div>
    </div>
  );
};

export default Task;