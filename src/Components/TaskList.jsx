import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { addTask, deleteTask, markDone } from "../Helper/helper";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import "../Stylesheets/TaskList.css";

const TaskList = () => {

  const [tasks, setTasks] = useState([]);
  const [parent] = useAutoAnimate();

  return (
    <div>
      <TaskForm onSubmit={(task) => addTask(task, tasks, setTasks)} />
      <div className="task-list-container" ref={parent}>
        {
          tasks.map((task) => 
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              taskDelete={(id) => deleteTask(id, tasks, setTasks)}
              taskDone={(id) => markDone(id, tasks, setTasks)}
            />
          )
        }
      </div>
    </div>
  )
}

export default TaskList;