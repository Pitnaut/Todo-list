import React from "react";
import '../Stylesheets/Task.css';
import { AiOutlineCloseCircle, AiOutlineCheckCircle, AiOutlineEdit } from "react-icons/ai";


const Task = ({ id, text, done, taskDone, taskDelete }) => {
  return (
    <div className={done ? "task-container done" : "task-container"}>
      <div className="task-text"
           onClick={()=> taskDone(id)} >
        {text}
      </div>
      <div className="task-icon-container"
           onClick={()=> taskDelete(id)}>
        <AiOutlineEdit className="edit-icon" />
      </div>
      <div className="task-icon-container"
           onClick={()=> taskDelete(id)}>
        <AiOutlineCheckCircle className="done-icon" />
      </div>
      <div className="task-icon-container"
           onClick={()=> taskDelete(id)}>
        <AiOutlineCloseCircle className="delete-icon" />
      </div>
    </div>
  );
};

export default Task;