import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import TaskSummary from "../Components/TaskSummary"
import { useAutoAnimate } from '@formkit/auto-animate/react';
import "../Stylesheets/TaskList.css";

const TaskList = () => {

  const [tasks, setTasks] = useState(
    !localStorage.getItem("tasks") ? [] : JSON.parse(localStorage.getItem("tasks"))
    );

  const [activeTasks, setActiveTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  const addTask = (task) => {
    if(task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [...tasks, task]
      setTasks(updatedTasks)
    };
    };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const markDone = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task
    });
    setTasks(updatedTasks);
  };

  const [parent] = useAutoAnimate();

  useEffect(() => {
    const activeTasksCount = tasks.filter(task => !task.done).length;
    const completedTasksCount = tasks.filter(task => task.done).length;
    const totalTasksCount = tasks.length;

    setActiveTasks(activeTasksCount);
    setCompletedTasks(completedTasksCount);
    setTotalTasks(totalTasksCount);
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  return (
    <div className="form-and-list">
      <TaskForm onSubmit={(task) => addTask(task)} />
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
      <div>
        <TaskSummary 
          activeTasks={activeTasks}
          completedTasks={completedTasks}
          totalTasks={totalTasks}
        />
      </div>
    </div>
  )
}

export default TaskList;



