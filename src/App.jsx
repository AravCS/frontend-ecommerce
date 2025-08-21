import { useEffect, useState } from "react";
import "./index.css";
import Homepage from "./components/Homepage.jsx";

export default function App() {
    const [mockItems, setMockItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // fetch mock items from FakeStore API on component mount
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (res.status >= 400) {
                    throw new Error("server error");
                }
                return res.json();
            })
            .then((data) => {
                setMockItems(data);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    // if fetching is not ready
    if (loading) return <p>Loading Website ... </p>;
    // if error occurs
    if (error) return <p>An error happen :( . . . </p>;

    return (
        <>
           <Homepage mockItems={mockItems} />
        </>
    );
}
