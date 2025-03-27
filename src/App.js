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
            <li>a <strong>100k gate netlist</strong> in <strong>400 milliseconds</strong></li>
            <li>a <strong>1M gate netlist</strong> in <strong>1 second</strong></li>
            <li>a <strong>7M gate netlist</strong> in <strong>3 seconds</strong></li>
          </ul>
        </p>


        <hr />
        <h2 id="demo">Try Boson</h2>
        <p>
          Boson is currently in beta. Contact us to get early access.
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

          <dt>What benchmarks did you use?</dt>
          <dd>Our published benchmarks use an open source RISC-V core <a href="https://github.com/YosysHQ/picorv32">picorv32</a> and partitions of <a href="https://github.com/nvdla/hw">nvdla</a> (a and c). </dd>

          <dt>What process nodes do you support?</dt>
          <dd>We support 7nm and above with more advanced nodes coming soon.</dd>

          <dt>What's next?</dt>
          <dd>We are currently working on an integrated placement and resizing tool for rapid optimization.</dd>

          <dt>What's the goal of Partcl?</dt>
          <dd>We want chip designers to benefit from the AI revolution. We enable this
            with fast, GPU accelerated EDA tools and models trained to efficiently sample the design space. </dd>
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
