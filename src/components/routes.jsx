import Header from "./Header.jsx"
import App from "../App.jsx"
import Products from "./Products.jsx";
import Footer from "./Footer.jsx";

const router = [
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/products",
        element: <Products/>
    }
]

export default router;