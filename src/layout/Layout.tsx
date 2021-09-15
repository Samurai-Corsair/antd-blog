import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.appWrapper}>
      <Header />
        <div className={styles.pageWrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
