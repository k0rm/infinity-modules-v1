import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./carousel.module.css";

const Carousel = ({ images, size }) => {
    let len = images.length - 1;
    const [index, setIndex] = useState(0);
    const [image, setImage] = useState(images[index]);

    const carouselToggler = (direction) => {
        direction
            ? index === len
                ? setIndex(0)
                : setIndex(index + 1)
            : index === 0
                ? setIndex(len)
                : setIndex(index - 1);

        setImage(images[index]);
    };

    return (
        <div className={styles.carousel}>
            <button
                className={styles[size]}
                onClick={() => carouselToggler(false)}
            >
                -
            </button>
            <div className={styles.carouselImageContainer}>
                <img src={image} alt="car imgoo" className={styles[size]} />
            </div>
            <button
                className={styles[size]}
                onClick={() => carouselToggler(true)}
            >
                +
            </button>
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Carousel;
