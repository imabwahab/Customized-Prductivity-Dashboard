import React from 'react'
import './Dashboard.css' // or use Tailwind / styled-components
import Header from '../Header/Header'
import Quotes from '../Quotes/Quotes'
import WeatherWidget from '../WeatherWidget/WeatherWidget'
import TodoListApp from '../TodoList/TodoListApp'
function Dashboard() {
  return (
    <div className='Dashboard'>
      <Header />
      <Quotes />
      <WeatherWidget city="Bahawalpur" /> {/* You can change the city here */}
      <TodoListApp />
    </div>
  )
}

export default Dashboard