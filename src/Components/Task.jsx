import React, {useState} from "react";
import '../Stylesheets/Task.css';
import { FaRegTrashAlt, FaRegCheckCircle, } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import EditTaskForm from "./EditTaskForm";

const Task = ({ id, text, done, taskDone, taskDelete }) => {

  const [showEditForm, setShowEditForm] = useState(false);
  const [editedText, setEditedText] = useState(text);


  const handleEditClick = () => {
    if (!done) {
      setShowEditForm(true);
    }
  };

  const handleUpdate = (updatedText) => {
    setEditedText(updatedText)
  }

  const handleCancelClick = () => {
    setShowEditForm(false)
  };

  return (
    <>
      <div className={done ? "task-container done" : "task-container"}>    
        <div className="task-text">
          {editedText}
        </div>
        <div className={`task-icon-container-done ${showEditForm ? "disabled" : ""}`}
            onClick={() => {
              if (!showEditForm) {
                taskDone(id);
              }
            }}>
          <FaRegCheckCircle 
            className="done-icon" />
        </div>
        <div className={`task-icon-container-edit ${done || showEditForm ? "disabled" : ""}`} onClick={handleEditClick}>
          <FaRegPenToSquare className="edit-icon" />
        </div>
        <div className="task-icon-container-delete"
            onClick={()=> taskDelete(id)}>
          <FaRegTrashAlt className="delete-icon" />
        </div>
      </div>
      <div>
        {showEditForm && (
          <EditTaskForm 
            text={editedText}
            onUpdate={handleUpdate} 
            onCancel={handleCancelClick} />)}
      </div>
    </> 
  );
};

export default Task;

