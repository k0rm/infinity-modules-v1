import React from "react";
import PropTypes from "prop-types";
import styles from "./row.module.css";

import Col from "../Col/Col";

const Row = ({ children }) => (
    <div className={styles.Row}>
        {children.map((item) => {
            return <Col
                key={item._source.lineNumber}
                size={item.props.size} 
            />;
        })}
    </div>
);

Row.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
};

export default Row;
