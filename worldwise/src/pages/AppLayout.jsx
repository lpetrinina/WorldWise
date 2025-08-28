import Map from "../components/layout/map/Map";
import Sidebar from "../components/layout/sidebar/Sidebar";
import User from "../components/user/User";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <User />
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
