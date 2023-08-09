import React, { useState } from 'react'
import TaskList from "./Components/TaskList"
import './App.css'

function App() {

  return (
    <div className="todo-container">
      <header>
        <h1 className="title">To-Do-List</h1>
      </header>
      <div className="to-do-main">
        <TaskList />
      </div>
    </div>
  )
}

export default App
