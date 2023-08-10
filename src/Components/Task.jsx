import React from "react";
import '../Stylesheets/Task.css';
import { AiOutlineCloseCircle, AiOutlineCheckCircle, AiOutlineEdit } from "react-icons/ai";
import { FaRegTrashAlt, FaRegCheckCircle, } from "react-icons/fa"
import { FaRegPenToSquare } from "react-icons/fa6"


const Task = ({ id, text, done, taskDone, taskDelete }) => {
  return (
    <div className={done ? "task-container done" : "task-container"}>
      <div className="task-text">
        {text}
      </div>
      <div className="task-icon-container"
           onClick={()=> taskDone(id)}>
        <FaRegCheckCircle className="done-icon" />
      </div>
      <div className="task-icon-container"
           onClick={()=> taskDelete(id)}>
        <FaRegPenToSquare className="edit-icon" />
      </div>
      <div className="task-icon-container"
           onClick={()=> taskDelete(id)}>
        <FaRegTrashAlt className="delete-icon" />
      </div>
    </div>
  );
};

export default Task;