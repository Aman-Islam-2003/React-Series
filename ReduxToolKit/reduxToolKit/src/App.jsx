import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddToDo from './components/addToDo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddToDo/>
    <Todos/>
    </>
  )
}

export default App
