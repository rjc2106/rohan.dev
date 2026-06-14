import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'

// Import our routes
import { Route as rootRoute } from './routes/__root'
import { Route as indexRoute } from './routes/index'
import { Route as workRoute } from './routes/work'
import { Route as aboutRoute } from './routes/about'
import { Route as contactRoute } from './routes/contact'

// Build the route tree
const routeTree = rootRoute.addChildren([
  indexRoute, 
  workRoute, 
  aboutRoute, 
  contactRoute
])

// Create the router instance
const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)