// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import App from './App'
import Home from './components/Home'
import Details from './components/Details'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/details',
        element: <Details />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
