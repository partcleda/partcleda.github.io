import React from "react";
import "./App.css";
import logo from "./assets/logo_.png"; // Replace with your logo path

function App() {
  const handleMailTo = () => {
    const email = "contact@partcl.com";
    const subject = "Hello Partcl!";
    const body = "I'm reaching out regarding...";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="landing-page">
      <div className="landing">
        <header className="header">
          <img src={logo} alt="Partcl Logo" className="logo" />
          <p className="description">
            GPU Accelerated Electronic Design Automation
          </p>
        </header>
        <div className="links-container">
          <a href="#sta">STA</a><span className="separator">|</span>
          <a href="#demo">Demo</a><span className="separator">|</span>
          <a href="#faq">FAQ</a><span className="separator">|</span>
          <a href="#about">About</a>
        </div>
      </div>

      <div className="content-section">
        <hr />
        <h2 id="sta">Static Timing Analysis</h2>
        <p>We built Boson, a static timing analysis engine that achieves 700x run time improvements over legacy timing analysis tools.</p>

        <p>We are able to run STA on 
          <ul>
            <li>a 100k gate netlist in 400 milliseconds</li>
            <li>a 1M gate netlist in 1 second</li>
            <li>a 7M gate netlist in 3 seconds</li>
          </ul>
        </p>


        <hr />
        <h2 id="demo">Try Boson</h2>
        <p>
          Boson is currently in beta. Sign up to get early access.
        </p>
        <p>
          <button className="mailto-button" onClick={handleMailTo} style={{ display: 'block', margin: '0 auto' }}>
            Contact Us
          </button>
        </p>

        <hr />
        <h2 id="faq">FAQ</h2>
        <dl className="faqtable">
          <dt>What is Boson?</dt>
          <dd>Boson is a static timing analysis engine that achieves 700x run time improvements over legacy timing analysis tools.</dd>

          <dt>How do I use Boson?</dt>
          <dd>Email us at <a href="mailto:contact@partcl.com">contact@partcl.com</a> to get early access.</dd>

          <dt>I am an academic. Can I use Boson?</dt>
          <dd>Yes, we offer a heavily discounted tier for academics. Email us at <a href="mailto:contact@partcl.com">contact@partcl.com</a></dd>

          <dt>How can I work for Partcl?</dt>
          <dd>Email us at <a href="mailto:contact@partcl.com">contact@partcl.com</a>.</dd>

          <dt>How can I invest in Partcl?</dt>
          <dd>Email us at <a href="mailto:contact@partcl.com">contact@partcl.com</a>.</dd>

          <dt>What's the goal of Partcl?</dt>
          <dd>To democratize chip design. We want to make it fast and easy for everyone to design chips.</dd>
        </dl>


        <hr />
        <h2 id="about">About</h2>
        <p>
          <a href="https://www.linkedin.com/in/william-salcedo/">Will</a> and <a href="https://www.linkedin.com/in/vamshibalanaga/">Vamshi</a> founded Partcl in 2024 after many sleepless nights wrestling with legacy tools in the final stretch 
          before tapeout deadlines. With backgrounds from Cornell, UC Berkeley, and Stanford, and experience at Amazon, Apple, Nvidia, 
          and multiple startups, they set out to build a better solution. 
          Backed by Y Combinator, the world’s top early-stage investors, Partcl is redefining the future of chip design.
        </p>
      </div>

      <footer className="footer">
        <p>© 2025 Partcl, Inc.</p>
        <a href="https://www.linkedin.com/company/partcl">LinkedIn</a>
        <a href="https://github.com/partcleda">GitHub</a>
        <a href="mailto:contact@partcl.com" className="footer-email">
          contact@partcl.com
        </a>
      </footer>
    </div>
  );
}

export default App;
