import { useParams } from "react-router-dom";
import { useContext } from "react";
import useFetch from "./useFetch.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { CartContext } from "../context/CartContext";
import styles from "../styles/productPage.module.css";

export default function ProductPage() {
    const { id } = useParams();

    const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

    const { addToCart } = useContext(CartContext);

    if (loading) return <p>Loading . . .</p>;
    if (error) return <p>{error}</p>;

    return (
        <section>
            <Header />
            <div className={styles.productInfoContainer}>
                <div className={styles.productImgContainer}>
                    <img src={product.image} alt={product.title} className={styles.productImg} />
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.productTitle}>{product.title}</div>
                    <div className={styles.productRating}>
                        {product.rating.rate + " " + "(" + product.rating.count + ")"}
                    </div>
                    <div className={styles.productPrice}>{"$" + product.price}</div>
                    <div className={styles.productDescription}>{product.description}</div>
                    {product.category.includes("clothing") && (
                        <div className={styles.sizeContainer}>
                            <div className={styles.text}> Select Size</div>
                            <button className={styles.sizeBtn}>S</button>
                            <button className={styles.sizeBtn}>M</button>
                            <button className={styles.sizeBtn}>L</button>
                            <button className={styles.sizeBtn}>XL</button>
                            <button className={styles.sizeBtn}>XXL</button>
                        </div>
                    )}
                    <div className={styles.btnContainer}>
                        <button
                            className={styles.cartBtn}
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                    <div className={styles.policyContainer}>
                        <div className={styles.policyItem}>100% Original product.</div>
                        <div className={styles.policyItem}>Cash on delivery is available on this product.</div>
                        <div className={styles.policyItem}>Easy return and exchange policy within 7 days.</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
}

