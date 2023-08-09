import React, { useState } from 'react';
import '../Stylesheets/TaskForm.css'
import { v4 as uuidv4 } from 'uuid'

const TaskForm = ({ onSubmit }) => {

  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSend = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      done: false
    }
    onSubmit(newTask);
  };

  return (
    <form 
      className="task-form"
      onSubmit={handleSend}>
      <input
        className="task-input"
        type="text"
        placeholder="New task..."
        name="text"
        onChange={handleChange}       
      />
      <button className="task-button">
        Add task
      </button>
    </form>
  )
}

export default TaskForm;