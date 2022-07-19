import styles from "./Sidebar.module.scss";
import celestImg from "../assets/png/celeste.png";
import { Link, useLocation } from "react-router-dom";

const sidebarNavLinks = [
  "dashboard",
  "gastos",
  "billetera",
  "resumen",
  "cuentas",
  "configuración",
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={celestImg} alt="celeste" />
              <p className={styles.notifications}>9</p>
            </div>
            <p className={styles.userName}>Celeste</p>
            <p className={styles.userEmail}>celeste@gmail.com</p>
          </div>
          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map(sidebarNavLink => 
                <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                  <Link
                    className={
                      location.pathname === `/${sidebarNavLink}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${sidebarNavLink}`}
                  >
                    {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
