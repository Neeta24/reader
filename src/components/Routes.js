import Home from './components/Home'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import {createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'


export const router = createBrowserRouter([

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