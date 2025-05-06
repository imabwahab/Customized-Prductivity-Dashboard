import React from 'react';
import './TodoItem.css'; // Make sure this CSS file exists

const TodoItem = ({ todoDate, todoName, onDeleteClick, ID }) => {
  return (
    <div className='todo-card'>
      <div className="todo-info">
        <span className="todo-name">{todoName}</span>
        <span className="todo-date">{todoDate}</span>
      </div>
      <div className="todo-actions">
        <button
          type="button"
          className="delete-btn"
          onClick={() => onDeleteClick(ID)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
