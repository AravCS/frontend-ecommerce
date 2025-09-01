import Header from "./Header.jsx"
import App from "../App.jsx"
import Products from "./Products.jsx";
import ProductPage from "./ProductPage.jsx"
import Cart from "./Cart.jsx";

const router = [
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/products",
        element: <Products/>
    },
    {
        path: "/products/:id",
        element: <ProductPage/>
    },
]

export default router;