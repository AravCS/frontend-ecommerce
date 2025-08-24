import Header from "./Header.jsx"
import App from "../App.jsx"
import Products from "./Products.jsx";

const router = [
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/products",
        element: <Products />

    }
]

export default router;