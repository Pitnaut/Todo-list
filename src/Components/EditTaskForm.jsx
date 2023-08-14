import React, { useState } from 'react';
import "../Stylesheets/EditTaskForm.css";
import { FaRegCircleXmark } from "react-icons/fa6";
import { GrUpgrade } from "react-icons/gr";

const EditTaskForm = ({ text, onUpdate, onCancel }) => {

  const [editText, setEditText] = useState(text)

  const handleCancelClick = (e) => {
    e.preventDefault();
    onCancel();
    console.log("edicion cancelada")
  };

  const handleUpdateClick = (e) => {
    e.preventDefault();
    onUpdate(editText);
    console.log("cambio realizado correctamente")
  };
 
  return (
    <form 
      className="edit-task-form">
      <input
        className="edit-task-input"
        type="text"
        name="text"  
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button className="update-task-button"
              onClick={handleUpdateClick} >
        <GrUpgrade className='update-icon'/>
      </button>
      <button className="cancel-update-button"
              onClick={handleCancelClick}>
        <FaRegCircleXmark className='cancel-icon'/>
      </button>
    </form>
  )
};

export default EditTaskForm;