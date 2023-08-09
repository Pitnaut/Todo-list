//Add Task
const addTask = (task, tasks, setTasks) => {
  console.log(task)
  if(task.text.trim()) {
    task.text = task.text.trim();
    const updatedTasks = [task, ...tasks]
    setTasks(updatedTasks)
  }
}

//Delete Task
const deleteTask = (id) => {

}

//Mark task as completed
const markDone = (id) => {

}

//Cancel update
const cancelUpdate = () => {

}

//Change task for Update
const changeTask = (e) => {

}

//Update task
const updateTask = () => {

}

export { addTask, deleteTask, markDone, cancelUpdate, changeTask, updateTask }