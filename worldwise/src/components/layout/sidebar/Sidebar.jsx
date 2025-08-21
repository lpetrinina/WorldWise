import AppNav from "../../AppNav";
import Logo from "../../logo/Logo";
import Footer from "../footer/Footer";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <Footer />
    </div>
  );
}

export default Sidebar;
