import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/global.css'
import { Habit } from './components/Habits'

export function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
    </div>
  )
}

