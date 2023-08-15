import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { addTask, deleteTask, markDone} from "../Helper/helper";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import "../Stylesheets/TaskList.css";

const TaskList = () => {

  const [tasks, setTasks] = useState(
    !localStorage.getItem("tasks") ? [] : JSON.parse(localStorage.getItem("tasks"))
    );

  const [parent] = useAutoAnimate();

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  return (
    <div className="form-and-list">
      <TaskForm onSubmit={(task) => addTask(task, tasks, setTasks)} />
      <div className="Edit-task-form-container">
      </div>
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

