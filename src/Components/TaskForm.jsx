import React from "react";
import '../Stylesheets/TaskForm.css'

const TaskForm = (props) => {
  return (
    <form className="task-form">
      <input
        className="task-input"
        type="text"
        placeholder="New task..."
        name="text"       
      />
      <button className="task-button">
        Add task
      </button>
    </form>
  )
}

export default TaskForm;