import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>{new Date().getFullYear()} - Corsair</div>
  );
};

export default Footer;
