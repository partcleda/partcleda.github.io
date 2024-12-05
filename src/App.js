import React from "react";
import "./App.css";
import logo from "./assets/logo.png"; // Replace with your logo path

function App() {
  return (
    <BrowserRouter basename="/partcleda.github.io">
    <div className="landing-page">
      <header className="header">
        <img src={logo} alt="Partcl Logo" className="logo" />
        <h1 className="title">Welcome to Partcl</h1>
      </header>
      <main className="content">
        <p className="description">
          Revolutionizing electronic design automation
        </p>
        <p className="email">contact@partcl.com</p>
      </main>
      <footer className="footer">
        <p>© 2025 Partcl, Inc.</p>
      </footer>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
