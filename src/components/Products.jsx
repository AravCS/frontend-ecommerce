import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import useFetch from "../components/useFetch";
import { useState } from "react";
import styles from "../styles/productStyles.module.css"

export default function Products() {
    const { data: mockItems, loading, error } = useFetch("https://fakestoreapi.com/products");
    const [filter, setFilter] = useState("All");

    let filteredData = mockItems;
    if (filter !== "All") {
        filteredData = mockItems.filter(item => item.category === filter);
    }

    function handleChange(e) {
        setFilter(e.target.value);
    }

    return (
        <>
            <Header />
            <section className={styles.productsPageContainer}>
                <div className={styles.filterDropdown}>
                    <div className={styles.headerText}> FILTERS </div>
                    <div className={styles.radioGroup}>
                        <div className={styles.categoriesText}>Categories</div>
                        <label>
                            <input
                                type="radio"
                                name="filters"
                                value="All"
                                checked={filter === "All"}
                                onChange={handleChange}
                            />
                            All items
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="filters"
                                value="men's clothing"
                                checked={filter === "men's clothing"}
                                onChange={handleChange}
                            />
                            Men's Clothing
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="filters"
                                value="women's clothing"
                                checked={filter === "women's clothing"}
                                onChange={handleChange}
                            />
                            Women's Clothing
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="filters"
                                value="electronics"
                                checked={filter === "electronics"}
                                onChange={handleChange}
                            />
                            Electronics
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="filters"
                                value="jewelery"
                                checked={filter === "jewelery"}
                                onChange={handleChange}
                            />
                            Jewelery
                        </label>
                    </div>
                </div>

                <div className={styles.itemsContainer}>
                    {loading && <p>Loading . . .</p>}
                    {error && <p>{error}</p>}
                    {!loading && !error && filteredData.map(item => (
                        <Card key={item.id} item={item}/>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
