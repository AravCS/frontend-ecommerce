import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Router from './components/routes.jsx'
import { CartProvider } from './context/CartContext.jsx' // import your provider

const routes = createBrowserRouter(Router);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartProvider>
            <RouterProvider router={routes} />
        </CartProvider>
    </StrictMode>,
)
