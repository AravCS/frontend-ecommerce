import { Link } from "react-router-dom"
import { CiShoppingCart } from "react-icons/ci";
import "../styles/headerStyles.css"

export default function Header() {
    return (
        <section className="header-container">
            <div className="brand-name">
                UrbanLeaf
            </div>
            <nav className="middle-container">
                <Link to="/" className="nav-link"> Home </Link>
                <Link to="/products" className="nav-link"> Products </Link>
                <Link to="/about" className="nav-link"> About </Link>
            </nav>
            <nav className="end-container">
                <Link to="/cart" className="nav-link" aria-label="cart">
                    <CiShoppingCart size={32}/>
                </Link>
            </nav>
        </section>
    )
}