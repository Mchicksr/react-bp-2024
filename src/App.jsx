import { useState } from 'react'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Routes/Home'
import ErrorPage from './Components/ErrorPage'

import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Nav/>,
      error:<ErrorPage/>,
      children:[
        {
          path:"/",
          error:<ErrorPage/>,
          element:<Home/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
      <Navigate to="/"/>
    </RouterProvider>
  )
}

export default App
