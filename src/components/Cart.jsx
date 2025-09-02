import { useContext } from "react";
import CartContext from "../context/CartContext";
import styles from "../styles/cartStyles.module.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Cart() {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    // Group items by id
    const groupedItems = cart.reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = { ...item, quantity: 1 };
        } else {
            acc[item.id].quantity += 1;
        }
        return acc;
    }, {});

    const items = Object.values(groupedItems);

    // Cart total
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleIncrease = (id) => {
        const item = cart.find((i) => i.id === id);
        if (item) addToCart(item);
    };

    const handleDecrease = (id) => {
        removeFromCart(id);
    };

    return (
        <>
            <Header/>
            <section className={styles.cartContainer}>
                <div className={styles.cartWrapper}>
                    {items.length === 0 ? (
                        <p className={styles.emptyText}>Your cart is empty</p>
                    ) : (
                        <>
                            {items.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <img src={item.image} alt={item.title} className={styles.cartImg} />
                                    <div className={styles.cartInfo}>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                        <p className={styles.itemPrice}>Price: ${item.price}</p>
                                        <p className={styles.itemSubtotal}>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                                        <div className={styles.quantityContainer}>
                                            <button className={styles.qtyBtn} onClick={() => handleDecrease(item.id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button className={styles.qtyBtn} onClick={() => handleIncrease(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className={styles.cartTotal}>
                                <h2>Total: ${total.toFixed(2)}</h2>
                                <button className={styles.checkoutBtn}>Checkout</button>
                            </div>
                        </>
                    )}
                </div>
            </section>
            <Footer/>
        </>
    );
}
