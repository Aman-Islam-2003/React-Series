import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/SignUp'
import Topnav from './components/Topnav'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignUp /> */}
      {/* <Login/> */}
      <Topnav/>
    </>
  )
}

export default App