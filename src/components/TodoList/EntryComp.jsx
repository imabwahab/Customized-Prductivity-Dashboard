import React, { useState } from 'react'
import './EntryComp.css'

export const EntryComp = ({ onNewItem }) => {

  let [TodoName, setTodoName] = useState('');
  let [TodoDate, setTodoDate] = useState('');

  function HandleTodoName(event) {
    // console.log(event.target.value);
    setTodoName(event.target.value);
  }

  function HandleTodoDate(event) {
    // console.log(event.target.value);
    setTodoDate(event.target.value);
  }

  const handleAddButtonClicked = () => {
    onNewItem(TodoName, TodoDate);
    console.log(TodoName);
    setTodoName("");
    console.log(TodoDate);
    setTodoDate("");
  };

  return (
    <div className='container'>
      <div className="TodoTask">
        <input
          type="text"
          className=""
          placeholder="Enter your Todo task."
          aria-label="Todo Task"
          value={TodoName}
          onChange={HandleTodoName}
        />
      </div>

      <div className="TodoDate">
        <input
          type="date"
          className=""
          aria-label="Date"
          value={TodoDate}
          onChange={HandleTodoDate}
        />
      </div>

        <button
          type="button"
          className="button"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
    </div>
  );


}

export default EntryComp
