import React from 'react';

const TodoItem = ({ todoDate, todoName, onDeleteClick, ID }) => {
  return (
    <div className=''>
        
        <div className="">
          <span className="">
            {todoName}
          </span>
        </div>

        <div className="">
          <span className="">
            {todoDate}
          </span>
        </div>

        <div className="">
          <button
            type="button"
            className=""
            onClick={() => onDeleteClick(ID)}
          >
            Delete
          </button>
        </div>

    </div>
  );
};

export default TodoItem;
