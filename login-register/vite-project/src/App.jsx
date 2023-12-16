import { useState } from 'react'
import './App.css'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Register from './components/register/Register'
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({})

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
