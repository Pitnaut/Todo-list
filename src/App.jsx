import React from 'react';
import TaskList from "./Components/TaskList";
import { AiOutlineEdit } from "react-icons/ai";
import './App.css';

function App() {

  return (
    <div className="todo-container">
      <header>
        <h1 className="title">To-Do-List</h1>
        <AiOutlineEdit className='pen-icon'/>
      </header>
      <div className="to-do-main" >
        <TaskList />
      </div>
    </div>
  );
}

export default App;



