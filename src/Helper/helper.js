//Add Task
const addTask = (task, tasks, setTasks) => {
  if(task.text.trim()) {
    task.text = task.text.trim();
    const updatedTasks = [...tasks, task]
    setTasks(updatedTasks)
  };
};

//Delete Task
const deleteTask = (id, tasks, setTasks) => {
  const updatedTasks = tasks.filter(task => task.id !== id);
  setTasks(updatedTasks);
};

//Mark task as completed
const markDone = (id, tasks, setTasks) => {
  const updatedTasks = tasks.map(task => {
    if (task.id === id) {
      task.done = !task.done;
    }
    return task
  });
  setTasks(updatedTasks);
};


export { addTask, deleteTask, markDone }