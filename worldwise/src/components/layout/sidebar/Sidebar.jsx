import { Outlet } from "react-router";
import AppNav from "../../AppNav";
import Logo from "../../logo/Logo";
import Footer from "../footer/Footer";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
