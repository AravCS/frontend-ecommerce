import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";

export default function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    return <Homepage products={products} />;
}
