import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Comprar pan', completed: false },
    { id: 2, title: 'Comprar leche', completed: true },
    { id: 3, title: 'Comprar huevos', completed: true },
  ])
  return (
    <>
      <div classname = "app">
        <Header />
        <TaskList tasks = {tasks} />
      </div>
    </>
  )
}

export default App
