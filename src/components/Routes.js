
import {createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import ErrorPage from './ErrorPage';
import Layout from './Layout';
import About from './About';
import Books from './Books';


const router = createBrowserRouter([

    {
      path: '/',
      element: <Layout></Layout>,
      errorElement: <ErrorPage>

      </ErrorPage>,
      children:[
        {
          path: '/',
          element:<Home></Home> ,
        
        },
        {
          path: '/home',
          element: <Home></Home>,
        
        },
        {
          path: '/about',
          element: <About></About>,
        
        },
        {
            path:'/books',
            loader: ()=> fetch('https://api.itbook.store/1.0/new'),
            element:<Books></Books>
        }
      ]
    
    },
  
  
  ])

  export default router;