import React, {useState} from "react";
import '../Stylesheets/Task.css';
import { FaRegTrashAlt, FaRegCheckCircle, } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import EditTaskForm from "./EditTaskForm";


const Task = ({ id, text, done, taskDone, taskDelete }) => {

  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm(true);
  };


  return (
    <>
      <div className={done ? "task-container done" : "task-container"}>    
        <div className="task-text">
          {text}
        </div>
        <div className="task-icon-container"
            onClick={()=> taskDone(id)}>
          <FaRegCheckCircle className="done-icon" />
        </div>
        <div className="task-icon-container"
              onClick={handleEditClick}>
          <FaRegPenToSquare className="edit-icon" />
        </div>
        <div className="task-icon-container"
            onClick={()=> taskDelete(id)}>
          <FaRegTrashAlt className="delete-icon" />
        </div>
      </div>
      <div>
        {showEditForm && <EditTaskForm />}
      </div>
    </> 
  );
};

export default Task;