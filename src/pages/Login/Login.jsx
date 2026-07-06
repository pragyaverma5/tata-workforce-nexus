import loginBg from "../../assets/images/login-bg.webp";
import logo from "../../assets/images/tata-logo.png";
import "./Login.css";

function Login() {
    return (
        <div className="login-container">
            
            <div className="left-panel" style={{ backgroundImage: `url(${loginBg})` }}>
                <div className="overlay">
                    <h1>TATA </h1>
                        <h1>WORKFORCE NEXUS</h1>
                        <h3>Connecting Aspirations</h3>
                    <p>Manage employees, attendance, and reports efficiently.</p>
                </div>
            </div>
            
            <div className="right-panel">
                <div className="login-card">
                    <img src={logo} alt="Tata Motors Logo" className="logo" />
                    <h2>Connecting Aspirations</h2>
                    <p>Welcome</p>
                    <p>Sign in to continue to workforce Nexus</p>

                    <form>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="admin@tatamotors.com" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;