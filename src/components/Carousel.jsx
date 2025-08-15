import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Card from "./Card.jsx";
import styles from "../styles/carouselStyles.module.css";

export default function Carousel({ mockItems }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slicedItems = mockItems.slice(currentIndex, currentIndex + 5);

    function moveForward() {
        if (currentIndex + 5 < mockItems.length) {
            setCurrentIndex(currentIndex + 5);
        }
    }

    function moveBack() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 5);
        }
    }

    return (
        <section className={styles.carousel}>
            <div className={styles.text}>
                <div className={styles.headerText}>
                    LATEST COLLECTIONS
                </div>
                <div className={styles.dummyText}>
                    Explore our curated collections featuring the latest trends and timeless classics. Each piece is crafted for style and comfort, making it easy to refresh your wardrobe with just a few clicks.
                </div>
            </div>
            <div className={styles.imgCarousel}>
                <button className={styles.backwardBtn} onClick={moveBack}> <FaArrowLeft/> </button>
                {slicedItems.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
                <button className={styles.forwardBtn} onClick={moveForward}> <FaArrowRight/> </button>
            </div>
        </section>
    );
}
