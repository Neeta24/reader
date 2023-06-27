import React from 'react'

import Home from './components/Home'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      
      },
      {
        path: '/home',
        element: <Home></Home>,
      
      },
      {
        path: '/about',
        element: <About></About>,
      
      }
    ]
  
  },


])

function App() {
  return(
<div>
    
    <RouterProvider router ={router}></RouterProvider>
  </div>
  )
}

export default App
