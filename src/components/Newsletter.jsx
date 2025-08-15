import styles from "../styles/newsletterStyles.module.css";

export default function Newsletter() {
    return (
        <section className={styles.newsletterContainer}>
            <div className={styles.headerText}>Subscribe now and get 20% off</div>
            <div className={styles.secondaryText}>
                Stay updated with the latest offers, product launches, and exclusive member deals every week.
            </div>
            <form className={styles.newsletterForm}>
                <input
                    type="email"
                    className={styles.formControl}
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <button type="submit" className={styles.submitBtn}>Submit</button>
            </form>
        </section>
    );
}
