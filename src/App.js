import React from "react";
import "./App.css";
import logo from "./assets/logo_dark.png"; // Replace with your logo path

function App() {
  const handleMailTo = () => {
    const email = "contact@partcl.com";
    const subject = "Hello Partcl!";
    const body = "I’m reaching out regarding...";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="landing-page">
      <header className="header">
        <img src={logo} alt="Partcl Logo" className="logo" />
      </header>
      <main className="content">
        <p className="description">
          Revolutionizing electronic design automation
        </p>
        <button className="mailto-button" onClick={handleMailTo}>
          Email Us
        </button>
      </main>
      <footer className="footer">
        <p>© 2025 Partcl, Inc.</p>
        <a href="mailto:contact@partcl.com" className="footer-email">
          contact@partcl.com
        </a>
      </footer>
    </div>
  );
}

export default App;
