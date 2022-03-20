import React from "react";
import PropTypes from "prop-types";
import styles from "./col.module.css";

const Col = ({ size = 1 }) => {
    let item = `c${size}`;
    if (!size) {
        item = "c1";
    }

    return <div className={styles[item]}></div>;
};

Col.propTypes = {
    size: PropTypes.number,
};

export default Col;
