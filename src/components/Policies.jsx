import img2 from "../assets/download-2.png";
import img1 from "../assets/download-1.png";
import img0 from "../assets/download.png";

import styles from "../styles/policyStyles.module.css";

export default function Policies() {
    return (
        <section className={styles.policies}>
            <div className={styles.policyContainer}>
                <img src={img2} className={styles.policyImg} alt="policy picture" />
                <div className={styles.primaryText}>Easy Exchange Policy</div>
                <div className={styles.secondaryText}>We offer hassle free exchange policy</div>
            </div>
            <div className={styles.policyContainer}>
                <img src={img1} className={styles.policyImg} alt="policy picture" />
                <div className={styles.primaryText}>7 Days Return Policy</div>
                <div className={styles.secondaryText}>We provide 7 days free return policy</div>
            </div>
            <div className={styles.policyContainer}>
                <img src={img0} className={styles.policyImg} alt="policy picture" />
                <div className={styles.primaryText}>Best Customer Support</div>
                <div className={styles.secondaryText}>We provide 24/7 customer support</div>
            </div>
        </section>
    );
}
