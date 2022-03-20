import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./cartoonnetwork.module.css";

const CartoonNetworkSpinner = ({ interval }) => {
    const characters = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6sLS8XYMxKXulaxkhgtsqwlIiR0Oz4r_20Q&usqp=CAU",
        "https://m.media-amazon.com/images/M/MV5BZjQyNTZiYmItNmIwYi00MmY1LTgzMjItNGUyMjY1NzM1MmFmXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg",
        "https://w7.pngwing.com/pngs/130/417/png-transparent-eddy-current-cartoon-network-ed-edd-n-eddy-television-child-hand.png",
    ];
    const [character, setCharacter] = useState(characters[0]);

    useEffect(() => {
        let index = 0;
        let interv = interval * 1000;
        setInterval(() => {
            index += 1;
            setCharacter(characters[index]);
            if (index === 2) {
                index = -1;
            }
        }, interv);
    }, []);

    return (
        <div className={styles.CartoonNetworkSpinner}>
            <div className={styles.imageContainer}>
                <img src={character} alt="fjeiwjfiw" className={styles.cn} />
            </div>
        </div>
    );
};

CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number,
};

export default CartoonNetworkSpinner;
