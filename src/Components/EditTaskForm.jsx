import React, { useState } from 'react';
import "../Stylesheets/EditTaskForm.css";
import { FaRegCircleXmark } from "react-icons/fa6";
import { GrUpgrade } from "react-icons/gr";

const EditTaskForm = () => {

 

  return (
    <form 
      className="edit-task-form">
      <input
        className="edit-task-input"
        type="text"
        name="text"  
      />
      <button className="update-task-button">
        <GrUpgrade className='update-icon'/>
      </button>
      <button className="cancel-update-button">
        <FaRegCircleXmark className='cancel-icon'/>
      </button>
    </form>
  )
};

export default EditTaskForm;