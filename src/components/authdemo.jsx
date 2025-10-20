import React, { createContext, useContext, useState, useEffect } from "react";
import Calendar from "./calendar"; // aapka real Calendar component
import "./auth.css";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// ----------------- AuthProvider -----------------
function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("authUser")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("authUser", JSON.stringify(user));
    else localStorage.removeItem("authUser");
  }, [user]);

  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, setUser, logout }}>{children}</AuthContext.Provider>;
}

// ----------------- Fake Hash & LocalStorage Helpers -----------------
const fakeHash = (s) => btoa(s).slice(0, 20);
const getUsers = () => JSON.parse(localStorage.getItem("demo_users") || "[]");
const saveUsers = (arr) => localStorage.setItem("demo_users", JSON.stringify(arr));

// ----------------- Auth Functions -----------------
function registerUser(email, password) {
  const users = getUsers();
  if (users.find((u) => u.email.toLowerCase() === email.toLowerCase()))
    throw new Error("User already exists");
  users.push({ email, passwordHash: fakeHash(password) });
  saveUsers(users);
  return { email };
}

function loginWithPassword(email, password) {
  const users = getUsers();
  const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!found) throw new Error("No user with that email");
  if (found.passwordHash !== fakeHash(password)) throw new Error("Incorrect password");
  return { email };
}

function generateOtpForEmail(email) {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000;
  localStorage.setItem(`otp_${email.toLowerCase()}`, JSON.stringify({ code, expiresAt }));
  console.log("Mock OTP for", email, "=", code); // demo
  return code;
}

function verifyOtpForEmail(email, code) {
  const raw = localStorage.getItem(`otp_${email.toLowerCase()}`);
  if (!raw) throw new Error("No OTP requested for this email");
  const { code: real, expiresAt } = JSON.parse(raw);
  if (Date.now() > expiresAt) {
    localStorage.removeItem(`otp_${email.toLowerCase()}`);
    throw new Error("OTP expired");
  }
  if (real !== code) throw new Error("Invalid OTP");
  localStorage.removeItem(`otp_${email.toLowerCase()}`);
  const users = getUsers();
  let user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    users.push({ email, passwordHash: fakeHash("") });
    saveUsers(users);
  }
  return { email };
}

// ----------------- Auth Buttons -----------------
function AuthButtons() {
  const { user, setUser, logout } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("login");

  const open = (m) => { setMode(m); setModalOpen(true); };
  const close = () => setModalOpen(false);

  return (
    <div className="auth-area">
      {user ? (
        <>
          <span className="greeting">Hi, {user.email}</span>
          <button className="auth-btn logout" onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button className="auth-btn login" onClick={() => open("login")}>Login👤🔐</button>
          <button className="auth-btn register" onClick={() => open("register")}>Register🔗</button>
          <button className="auth-btn otp" onClick={() => open("otp")}>Sign in (OTP)</button>
        </>
      )}

      {modalOpen && (
        <AuthModal
          mode={mode}
          onClose={close}
          switchMode={(m) => setMode(m)}
          onSuccess={(u) => { setUser(u); close(); }}
        />
      )}
    </div>
  );
}

// ----------------- Auth Modal -----------------
function AuthModal({ mode, onClose, switchMode, onSuccess }) {
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="auth-modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h3>{mode === "register" ? "Create account" : mode === "login" ? "Login" : "Sign in with OTP"}</h3>
        <div>
          {mode === "register" && <RegisterForm switchMode={switchMode} onSuccess={onSuccess} />}
          {mode === "login" && <LoginForm switchMode={switchMode} onSuccess={onSuccess} />}
          {mode === "otp" && <OtpSignInForm switchMode={switchMode} onSuccess={onSuccess} />}
        </div>
      </div>
    </div>
  );
}

// ----------------- Register Form -----------------
function RegisterForm({ switchMode, onSuccess }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setErr("");
    if (!email || !pass || !pass2) return setErr("Please fill all fields");
    if (pass !== pass2) return setErr("Passwords do not match");
    setLoading(true);
    try {
      const user = registerUser(email.trim().toLowerCase(), pass);
      setTimeout(() => { setLoading(false); onSuccess(user); }, 400);
    } catch (err) { setLoading(false); setErr(err.message); }
  };

  return (
    <form className="auth-form" onSubmit={submit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
      <input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" type="password" />
      <input value={pass2} onChange={(e) => setPass2(e.target.value)} placeholder="Confirm Password" type="password" />
      {err && <div className="error">{err}</div>}
      <button className="auth-submit" type="submit" disabled={loading}>{loading ? "Creating..." : "Register"}</button>
      <div className="auth-foot">
        Already have an account? <button type="button" className="link-btn" onClick={() => switchMode("login")}>Login</button>
      </div>
    </form>
  );
}

// ----------------- Login Form -----------------
function LoginForm({ switchMode, onSuccess }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      const user = loginWithPassword(email.trim().toLowerCase(), pass);
      setTimeout(() => { setLoading(false); onSuccess(user); }, 350);
    } catch (err) { setLoading(false); setErr(err.message); }
  };

  return (
    <form className="auth-form" onSubmit={submit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
      <input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" type="password" />
      {err && <div className="error">{err}</div>}
      <button className="auth-submit" type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
      <div className="auth-foot">
        Or try <button type="button" className="link-btn" onClick={() => switchMode("otp")}>Sign in with OTP</button>
      </div>
    </form>
  );
}

// ----------------- OTP Form -----------------
function OtpSignInForm({ switchMode, onSuccess }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [mockOtp, setMockOtp] = useState(null);

  const requestOtp = (e) => {
    e.preventDefault();
    setError("");
    if (!email) return setError("Enter your email");
    const code = generateOtpForEmail(email.trim().toLowerCase());
    setMockOtp(code);
    setStatus("sent");
  };

  const verify = (e) => {
    e.preventDefault();
    setError("");
    setStatus("verifying");
    try {
      const user = verifyOtpForEmail(email.trim().toLowerCase(), otpInput.trim());
      setTimeout(() => { setStatus("idle"); onSuccess(user); }, 300);
    } catch (err) { setStatus("sent"); setError(err.message); }
  };

  return (
    <div>
      {status !== "sent" && (
        <form className="auth-form" onSubmit={requestOtp}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
          {error && <div className="error">{error}</div>}
          <button className="auth-submit" type="submit">Send OTP</button>
          <div className="auth-foot">
            Want password login? <button type="button" className="link-btn" onClick={() => switchMode("login")}>Sign in with password</button>
          </div>
        </form>
      )}
      {status === "sent" && (
        <form className="auth-form" onSubmit={verify}>
          <div className="note">OTP sent (mock). Valid 5 minutes.</div>
          <div className="mock-otp"><strong>{mockOtp}</strong></div>
          <input value={otpInput} onChange={(e) => setOtpInput(e.target.value)} placeholder="Enter OTP" type="text" />
          {error && <div className="error">{error}</div>}
          <button className="auth-submit" type="submit">Verify OTP</button>
          <div className="auth-foot">
            Didn't get it? <button type="button" className="link-btn" onClick={requestOtp}>Resend</button>
          </div>
        </form>
      )}
    </div>
  );
}

// ----------------- Clean AuthDemo -----------------
export default function AuthDemo() {
  return (
    <AuthProvider>
      <div className="auth-demo-wrapper">
        <AuthButtons />
        <Calendar />
      </div>
    </AuthProvider>
  );
}
