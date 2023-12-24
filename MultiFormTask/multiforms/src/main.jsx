import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import Layout from './components/Layout.jsx'
import Track from './components/Track.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    element: <Track />,
    children: [
      {
        path: '',
        element: <SignUp />,
      }, {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'profile',
        element: <Profile/>,
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
</Provider>,
)
