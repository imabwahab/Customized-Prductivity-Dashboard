import React from "react";
import TodoItem from "./TodoItem";
function TodoList({ listItem, onDeleteClick }) {
  return (

    <div className="itemsContainer">

      {listItem.length > 0 ? (
        listItem.map((item) => (
          <TodoItem
            key={item.id} // Ensuring uniqueness
            todoDate={item.TodoDate}
            todoName={item.TodoName}
            onDeleteClick={onDeleteClick}
            ID={item.id}
          />
        ))
      ) : (
        <h3 className="emptyMsg">No task to display.</h3>
      )}

    </div>
  );

}

export default TodoList