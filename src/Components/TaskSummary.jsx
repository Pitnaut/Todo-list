import React from "react";
import "../Stylesheets/TaskSummary.css";


const TaskSummary = () => {

  return (
    <div className="task-summary">
      <div className="header">
        <h1>Task Summary:</h1>
      </div>
      <div className="tasks-completed">
        <p>Active Tasks:</p>
        <p>Completed:</p>
        <p>Percent Completed:</p>
      </div>
    </div>
  )
}

export default TaskSummary;