import styles from "./Navbar.module.css";

import {
  FiBell,
  FiSearch,
} from "react-icons/fi";

function Navbar() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (

    <header className={styles.navbar}>

      <div>

        <h1>{greeting}! Pragya,</h1>

        <p>Here's today's workforce overview.</p>

      </div>

      <div className={styles.actions}>

        

        <button className={styles.notification}>

          <FiBell />

          <span className={styles.badge}></span>

        </button>

        <div className={styles.avatar}>
          PV
        </div>

      </div>

    </header>

  );
}

export default Navbar;