import { useEffect, useState } from "react";
import Homepage from "./components/Homepage.jsx";
import "./index.css";

export default function App() {
    const [mockItems, setMockItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (res.status >= 400) {
                    throw new Error("server error");
                }
                return res.json();
            })
            .then((data) => setMockItems(data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading Website ... </p>;
    if (error) return <p>An error occurred :( </p>;

    return <Homepage mockItems={mockItems} />;
}
