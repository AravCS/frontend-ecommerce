import styles from "../styles/bodyStyles.module.css";
import heroImg from "../assets/hero_img-DOCOb6wn.png";

export default function Body() {
    return (
        <section className={styles.bodySection}>
            <div className={styles.textContainer}>
                <div className={styles.text1}>OUR BESTSELLERS</div>
                <div className={styles.text2}>Latest Arrivals</div>
                <div className={styles.text3}>SHOP NOW</div>
            </div>
            <div className={styles.imageContainer}>
                <img src={heroImg} alt="example picture" className={styles.img} />
            </div>
        </section>
    );
}
