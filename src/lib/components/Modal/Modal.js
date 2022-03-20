import React from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.css";

const Modal = ({ isOpen, onClose, children }) =>
    isOpen === true ? (
        <div className={styles.modal}>
            {children}
            <button className={styles.modalToggler} onClick={onClose}>
                CLICK ME
            </button>
        </div>
    ) : (
        <div className="modalNo"></div>
    );

Modal.Title = ({ children }) => <div className={styles.title}>{children}</div>;
Modal.Body = ({ children }) => <div className={styles.body}>{children}</div>;
Modal.Footer = ({ children }) => <div className={styles.footer}>{children}</div>;

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.node),
};

export default Modal;
