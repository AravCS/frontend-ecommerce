import useFetch from "./components/useFetch.jsx"
import "./index.css";
import Homepage from "./components/Homepage.jsx";

export default function App() {
    const {data: mockItems, loading, error } = useFetch("https://fakestoreapi.com/products");
    if (loading) return <p> Loading . . . </p>
    if (error) return <p> {error} </p>;

    return (
        <>
           <Homepage mockItems={mockItems} />
        </>
    );
}
