import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Router from './components/routes.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const routes = createBrowserRouter(Router);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
