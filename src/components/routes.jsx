import Header from "./Header.jsx"
import App from "../App.jsx"

const router = [
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/header",
        element: <Header/>
    }
]

export default router;