import styles from "../styles/footerStyles.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.headerText}>UrbanLeaf</div>
                <div className={styles.companyText}>
                    Our company is committed to delivering high-quality products and exceptional service to customers around the world. For over a decade, we have built our reputation on trust, reliability, and innovation. From humble beginnings, we have grown into a brand that values integrity, customer satisfaction, and continuous improvement in everything we do.
                </div>
            </div>

            <div className={styles.middleContainer}>
                <div className={styles.headerText}>COMPANY</div>
                <nav className={styles.footerNav}>
                    <ul className={styles.nav}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/delivery">Delivery</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </nav>
            </div>

            <div className={styles.endContainer}>
                <div className={styles.headerText}>GET IN TOUCH</div>
                <div className={styles.info}>
                    <div className={styles.number}><a href="tel:+10000000000">+1-0000-000-000</a></div>
                    <div className={styles.email}><a href="mailto:john.doe@mail.com">john.doe@mail.com</a></div>
                    <div className={styles.handle}>@YourBrandOfficial</div>
                </div>
            </div>
        </footer>
    );
}

