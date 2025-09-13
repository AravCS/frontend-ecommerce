import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import styles from "../styles/headerStyles.module.css";

export default function Header() {
    return (
        <section className={styles.headerContainer}>
            <div className={styles.brandName}>
                UrbanLeaf
            </div>

            <nav className={styles.middleContainer}>
                <Link to="/" className={styles.navLink}> Home </Link>
                <Link to="/products" className={styles.navLink}> Products </Link>
            </nav>

            <nav className={styles.endContainer}>
                <Link to="/cart" className={styles.navLink} aria-label="cart">
                    <CiShoppingCart size={32}/>
                </Link>
            </nav>
        </section>
    )
}
