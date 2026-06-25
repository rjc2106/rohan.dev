import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'

// Import root route
import { Route as rootRoute } from './routes/__root'

// Lazy load route components for better code splitting
const indexRoute = (await import('./routes/index')).Route
const workRoute = (await import('./routes/work')).Route
const aboutRoute = (await import('./routes/about')).Route
const contactRoute = (await import('./routes/contact')).Route

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
