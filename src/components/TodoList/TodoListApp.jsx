import { useState } from 'react';
import React from 'react'
import EntryComp from './EntryComp';
import TodoList from './TodoList';


function TodoListApp() {

  let [listItem, setListItem] = useState([{ TodoName: 'Do Exercise', TodoDate: '2025/03/31' }]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...listItem,
      { id: Date.now(), TodoName: itemName, TodoDate: itemDueDate },
    ];
    setListItem(newTodoItems);
  };

  const handleDeleteItem = (todoId) => {
    const newTodoItems = listItem.filter((item) => item.id !== todoId);
    setListItem(newTodoItems);
    // console.log('delete clicked', newTodoItems)

  };

  return (
    <>
      <h2 className='TodoListTitle'>TodoListApp</h2>
      <div >
          <EntryComp onNewItem={handleNewItem} />
          <TodoList listItem={listItem} onDeleteClick={handleDeleteItem} />
        </div>
    </>
  )
}

export default TodoListApp