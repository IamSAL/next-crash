import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
