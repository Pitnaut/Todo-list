import React, { useState } from "react";
import "../Stylesheets/TaskSummary.css";


const TaskSummary = ({ activeTasks, completedTasks, totalTasks }) => {

  return (
    <div className="task-summary">
      <div className="header">
        <h1>Task Summary:</h1>
      </div>
      <div className="tasks-completed">
        <p>TotalTasks: {totalTasks}</p>
        <p>Active Tasks: {activeTasks}</p>
        <p>Completed: {completedTasks}</p>
        <p>Percent Completed: {totalTasks === 0 ? "0%" : ((completedTasks / totalTasks) * 100).toFixed(2) + "%"}</p>
      </div>
    </div>
  )
}

export default TaskSummary;