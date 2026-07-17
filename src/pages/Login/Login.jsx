import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";

import styles from "./Login.module.css";

import tataLogo from "../../assets/images/tata-lg.png";
import companyLogo from "../../assets/images/tata-logo.png";
import loginBg from "../../assets/images/login-bg.webp";


function Login() {
  const navigate = useNavigate();


  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    if (
      email === "admin@demo.com" &&
      password === "1111"
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <img
        src={tataLogo}
        alt="Tata Motors"
        className={styles.tataLogo}
      />

      <div
        className={styles.leftPanel}
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className={styles.overlay}>
          <h1>WORKFORCE NEXUS</h1>
          <h2>Intelligent Workforce Operations Platform</h2>

          <p>
            Monitor workforce operations, optimize staffing, and make data-driven decisions from a single intelligent platform
          </p>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.loginCard}>


          <h4>Welcome back</h4>

          <p className={styles.subtitle}>
            Sign in to continue to Workforce Nexus.
          </p>

          <form onSubmit={handleLogin}>

            <div className={styles.inputGroup}>
              <label>Email</label>

              <div className={styles.inputWrapper}>
                <FiMail className={styles.inputIcon} />

                <input
                  type="email"
                  placeholder="admin@demo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>

              <div className={styles.inputWrapper}>
                <FiLock className={styles.inputIcon} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>

              </div>
            </div>

            <div className={styles.options}>
              <label className={styles.checkbox}>
                <input type="checkbox" />

                Remember me
              </label>

              <button
                type="button"
                className={styles.forgot}
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className={styles.loginButton}
              disabled={loading}
            >
              {loading ? (
                "Signing In..."
              ) : (
                <>
                  Sign In
                  <FiArrowRight />
                </>
              )}
            </button>

            <div className={styles.demoBox}>
              <h5>Demo Credentials</h5>

              <div className={styles.demoRow}>
                <span>Email</span>
                <code>admin@demo.com</code>
              </div>

              <div className={styles.demoRow}>
                <span>Password</span>
                <code>1111</code>
              </div>
            </div>
          </form>


          <div className={styles.footer}>
            <p>
              Need access?
              <span> Contact your administrator</span>
            </p>

            <small>
              🔒 Secured with enterprise-grade encryption
            </small>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Login;