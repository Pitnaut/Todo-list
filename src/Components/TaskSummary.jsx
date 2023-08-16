import React from "react";
import "../Stylesheets/TaskSummary.css";
import { useAutoAnimate } from '@formkit/auto-animate/react';


const TaskSummary = ({ activeTasks, completedTasks, totalTasks }) => {

  const percentCompleted = (completedTasks / totalTasks) * 100;

  const [parent] = useAutoAnimate();

  return (
    <div className="task-summary">
      <div className="header">
        <h1>Task Summary:</h1>
      </div>
      <div className="tasks-completed" ref={parent}>
        <p>Total Tasks: {totalTasks}</p>
        <p>Active Tasks: {activeTasks}</p>
        <p>Completed: {completedTasks}</p>
        <p>Percent Completed: {totalTasks === 0 ? "0%" : ((completedTasks / totalTasks) * 100).toFixed(0) + "%"}</p>
          {percentCompleted === 100 && (
        <p className="conglats">Congratulations! You've completed all tasks!</p>
        )}
      </div>
    </div>
  )
}

export default TaskSummary;