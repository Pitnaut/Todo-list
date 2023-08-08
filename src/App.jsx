import { useState } from 'react'
import { addTask, deleteTask, markDone, cancelUpdate, changeTask, updateTask } from './Helper/helper';
import './App.css'

function App() {

  const {toDo, setToDo} = useState([
    {id: 1, title: "Task 1", status: false},
    {id: 2, title: "Task 2", status: false}
  ]);

  const {newTask, setnewTask} = useState('');

  const {updateData, setUpdateData} = useState('');

  return (
    <>
      <header>
        <h1 className="title">To-Do-List</h1>
      </header>
    </>
  )
}

export default App
