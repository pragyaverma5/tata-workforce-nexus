import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";

import styles from "./Settings.module.css";

import {
  FiUser,
  FiMail,
  FiBriefcase,
  FiBell,
  FiLock,
  FiLogOut,
  FiMapPin,
  FiSave,
  FiShield,
} from "react-icons/fi";

function Settings() {
  const [profile, setProfile] = useState({
    name: "Pragya Verma",
    email: "admin@tatamotors.com",
    department: "Human Resources",
    designation: "System Administrator",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    attendance: true,
    leave: true,
    reports: false,
  });

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const toggleNotification = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });
  };

  const handleSave = () => {
    alert("Profile saved successfully!");
  };

  const handlePassword = () => {
    alert("Password updated successfully!");
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      window.location.href = "/";
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.pageHeader}>
        <div>
          <h1>Settings</h1>
          <p>
            Manage your profile, organization preferences and
            account security.
          </p>
        </div>

        <button
          className={styles.saveButton}
          onClick={handleSave}
        >
          <FiSave />
          Save Profile
        </button>
      </div>

      {/* ACCOUNT CARD */}

      <div className={styles.accountCard}>
        <div className={styles.avatar}>
          PV
        </div>

        <div>
          <h2>Pragya Verma</h2>

          <span>System Administrator</span>

          <p>admin@tatamotors.com</p>
        </div>

        <div className={styles.lastLogin}>
          <small>Last Login</small>

          <strong>Today • 09:14 AM</strong>
        </div>
      </div>

      <div className={styles.grid}>

        {/* PROFILE */}

        <div className={styles.card}>

          <h3>
            <FiUser />
            Profile
          </h3>

          <div className={styles.inputGroup}>
            <label>
              <FiUser />
              Full Name
            </label>

            <input
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              <FiMail />
              Email
            </label>

            <input
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              <FiBriefcase />
              Department
            </label>

            <input
              name="department"
              value={profile.department}
              onChange={handleProfileChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              <FiShield />
              Designation
            </label>

            <input
              name="designation"
              value={profile.designation}
              onChange={handleProfileChange}
            />
          </div>

        </div>

        {/* ORGANIZATION */}

        <div className={styles.card}>

          <h3>
            <FiMapPin />
            Organization
          </h3>

          <div className={styles.info}>
            <span>Company</span>

            <strong>Tata Motors</strong>
          </div>

          <div className={styles.info}>
            <span>Plant</span>

            <strong>Pune Manufacturing</strong>
          </div>

          <div className={styles.info}>
            <span>Platform</span>

            <strong>Workforce Nexus</strong>
          </div>

          <div className={styles.info}>
            <span>Total Employees</span>

            <strong>30</strong>
          </div>

        </div>

        {/* NOTIFICATIONS */}

        <div className={styles.card}>

          <h3>
            <FiBell />
            Notifications
          </h3>

          {Object.entries(notifications).map(([key, value]) => (

            <div
              key={key}
              className={styles.switchRow}
            >
              <span>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>

              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => toggleNotification(key)}
                />

                <span className={styles.slider}></span>

              </label>

            </div>

          ))}

        </div>

        {/* SECURITY */}

        <div className={styles.card}>

          <h3>
            <FiLock />
            Security
          </h3>

          <div className={styles.inputGroup}>
            <label>Current Password</label>

            <input
              type="password"
              placeholder="********"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>New Password</label>

            <input
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <button
            className={styles.passwordButton}
            onClick={handlePassword}
          >
            Update Password
          </button>

        </div>

      </div>

      {/* DANGER ZONE */}

      <div className={styles.dangerCard}>

        <div>

          <h3>Danger Zone</h3>

          <p>
            Logging out will end your current administrator
            session.
          </p>

        </div>

        <button
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          <FiLogOut />

          Logout

        </button>

      </div>

    </DashboardLayout>
  );
}

export default Settings;