import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "../styles/cartStyles.module.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    // Calculate total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <section>
            <Header/>
            <div className={styles.cartContainer}>
                <h2>Your Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul className={styles.cartList}>
                            {cart.map((item) => (
                                <li key={item.id} className={styles.cartItem}>
                                    <img src={item.image} alt={item.title} className={styles.cartImg} />
                                    <div className={styles.itemInfo}>
                                        <span className={styles.itemTitle}>{item.title}</span>
                                        <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
                                    </div>
                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.cartFooter}>
                            <span className={styles.total}>Total: ${total.toFixed(2)}</span>
                            <button className={styles.clearBtn} onClick={clearCart}>
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
                </div>
                <Footer/>
            </section>
    );
}
