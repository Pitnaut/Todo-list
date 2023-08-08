import React, { useState } from 'react'
import Task from './Components/Task';
import TaskForm from "./Components/TaskForm";
import { addTask, deleteTask, markDone, cancelUpdate, changeTask, updateTask } from './Helper/helper';
import './App.css'

function App() {

  return (
    <div className="todo-container">
      <header>
        <h1 className="title">To-Do-List</h1>
      </header>
      <div className="toDoPrincipal">
        
      </div>
    </div>
  )
}

export default App
