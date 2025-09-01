import styles from "../styles/cardStyles.module.css";
import { Link } from "react-router-dom";

export default function Card({ item }) {
    return (
        <Link to={`/products/${item.id}`}>
            <section className={styles.card}>
                <div className={styles.imgContainer}>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.productTitle}>{item.title}</div>
                    <div className={styles.productPrice}>{"$" + item.price}</div>
                </div>
            </section>
        </Link>
    );
}
