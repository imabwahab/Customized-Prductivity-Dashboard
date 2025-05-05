import React from 'react'
import './Dashboard.css' // or use Tailwind / styled-components
import Header from './Header/Header'
import Quotes from './Quotes/Quotes'
function Dashboard() {
  return (
    <div className='Dashboard'>
      <Header />
      <Quotes />
    </div>
  )
}

export default Dashboard