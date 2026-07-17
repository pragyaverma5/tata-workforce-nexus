import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "./Sidebar.module.css";
import { sidebarMenu } from "../../../data/sidebarMenu";

import ConfirmModal from "../../common/ConfirmModal";

import logo from "../../../assets/images/tata-logo2.png";

function Sidebar() {
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    // Later we'll also clear auth/localStorage here
    navigate("/");
  };

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img src={logo} alt="Tata Motors" />

          <h2>WORKFORCE</h2>
          <h2>NEXUS</h2>

          <span>Powered by Tata Motors</span>
        </div>

        <nav className={styles.menu}>
          {sidebarMenu.map((item) => {
            const Icon = item.icon;

            // ---------------- LOGOUT ----------------

            if (item.action === "logout") {
              return (
                <button
                  key={item.label}
                  className={styles.menuButton}
                  onClick={() => setShowLogoutModal(true)}
                >
                  <Icon />

                  <span>{item.label}</span>
                </button>
              );
            }

            // ---------------- NORMAL LINKS ----------------

            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `${styles.menuItem} ${
                    isActive ? styles.active : ""
                  }`
                }
              >
                <Icon />

                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className={styles.profile}>
          <div className={styles.avatar}>
            PV
          </div>

          <div>
            <h4>Pragya Verma</h4>
            <p>Administrator</p>
          </div>
        </div>
      </aside>

      <ConfirmModal
        isOpen={showLogoutModal}
        title="Confirm Logout"
        message="Are you sure you want to logout from Workforce Nexus? Any unsaved changes may be lost."
        confirmText="Logout"
        cancelText="Cancel"
        onConfirm={handleLogout}
        onCancel={() => setShowLogoutModal(false)}
      />
    </>
  );
}

export default Sidebar;