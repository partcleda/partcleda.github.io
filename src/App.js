import React from "react";
import "./App.css";
import logo from "./assets/logo_.png"; // Replace with your logo path

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

      <hr />
      <h2 id="tinygrad">tinygrad</h2>
      <p>We write and maintain <a href="https://github.com/tinygrad/tinygrad">tinygrad</a>, the fastest growing neural
        network framework (over 23,000 GitHub stars)</p>

      <p>It's extremely simple, and breaks down the most <a
          href="https://github.com/tinygrad/tinygrad/blob/master/examples/llama.py">complex</a> <a
          href="https://github.com/geohot/tinygrad/blob/master/examples/stable_diffusion.py">networks</a> into 3 <a
          href="https://github.com/geohot/tinygrad/blob/master/tinygrad/ops.py">OpTypes</a></p>

      <b>ElementwiseOps</b> are UnaryOps, BinaryOps, and TernaryOps.<br/>
        They operate on 1-3 tensors and run elementwise.<br/>
        example: SQRT, LOG2, ADD, MUL, WHERE, etc...<br/><br/>
      <b>ReduceOps</b> operate on one tensor and return a smaller tensor.<br/>
        example: SUM, MAX<br/><br/>
      <b>MovementOps</b> are virtual ops that operate on one tensor and move the data around<br/>
        Copy-free with <a href="https://github.com/tinygrad/tinygrad/blob/master/tinygrad/shape/shapetracker.py">ShapeTracker</a>.<br/>
        example: RESHAPE, PERMUTE, EXPAND, etc...<br/>

      <p>But how...where are your CONVs and MATMULs? Read the code to solve this mystery.</p>

      <hr />
      <h2 id="worktiny">Work at tiny corp</h2>
      We <a href="https://geohot.github.io/blog/jekyll/update/2023/05/24/the-tiny-corp-raised-5M.html">are now funded</a> and <b>hiring</b> full time software engineers. Very talented interns okay.<br/><br/>
      See <a href="https://docs.google.com/spreadsheets/d/1WKHbT-7KOgjEawq5h5Ic1qUWzpfAzuD_J06N1JwOCGs/edit?usp=sharing">our bounty page</a> to judge if you might be a good fit. Bounties pay you while judging that fit.<br/><br/>
      We are also hiring for operations and hardware, but if you haven't contributed to tinygrad your application won't be considered.

      <hr />
      <h2 id="faq">FAQ</h2>
      <dl class="faqtable">
        <dt>What is a tinybox?</dt>
        <dd>It is a very powerful computer for deep learning, and likely the best performance/$. It was <a href="https://public.tableau.com/views/MLCommons-Training_16993769118290/MLCommons-Training">benchmarked</a> in MLPerf Training 4.0 vs computers that cost 10x as much. And of course, anything that can train can do inference.</dd>

        <dt>How do I get a tinybox?</dt>
        <dd>Place an order through the links above. The factory is up and running, and it will ship within one week of us receiving the payment. Currently offering pickup in San Diego + shipping worldwide.</dd>

        <dt>Where can I learn more about the tinybox?</dt>
        <dd>We have a lot of content on our <a href="https://x.com/__tinygrad__">Twitter</a>, we also have a <a href="https://docs.tinygrad.org/tinybox/">tinybox docs page</a>.</dd>

        <dt>Is tinygrad used anywhere?</dt>
        <dd>tinygrad is used in <a href="https://github.com/commaai/openpilot">openpilot</a> to run the driving model on the Snapdragon 845 GPU. It replaces <a href="https://developer.qualcomm.com/sites/default/files/docs/snpe/overview.html">SNPE</a>, is faster, supports loading onnx files, supports training, and allows for attention (SNPE only allows fixed weights).</dd>

        <dt>Is tinygrad inference only?</dt>
        <dd>No! It supports full forward and backward passes with autodiff. <a href="https://github.com/tinygrad/tinygrad/blob/master/tinygrad/function.py">This</a> is implemented at a level of abstraction higher than the accelerator specific code, so a tinygrad port gets you this for free.</dd>

        <dt>How can I use tinygrad for my next ML project?</dt>
        <dd>Follow the installation instructions on <a href="https://github.com/tinygrad/tinygrad">the tinygrad repo</a>. It has a similar API to PyTorch, yet simpler and more refined. Less stable though while tinygrad is in alpha, so be warned, though it's been fairly stable for a while.</dd>

        <dt>When will tinygrad leave alpha?</dt>
        <dd>When we can reproduce a common set of papers on 1 NVIDIA GPU 2x faster than PyTorch. We also want the speed to be good on the M1. ETA, Q2 next year.</dd>

        <dt>How is tinygrad faster than PyTorch?</dt>
        <dd>For most use cases it isn't yet, but it will be. It has three advantages:
          <li>It compiles a custom kernel for every operation, allowing extreme shape specialization.</li>
          <li>All tensors are lazy, so it can aggressively fuse operations.</li>
          <li>The backend is 10x+ simpler, meaning optimizing one kernel makes everything fast.</li>
        </dd>

        <dt>Where is tinygrad development happening?</dt>
        <dd>On GitHub and <a href="https://discord.com/invite/ZjZadyC7PK">on Discord</a></dd>

        <dt>How can the tiny corp work for me?</dt>
        <dd>Email me, george@tinygrad.org. We are looking for contracts and sponsorships to improve various aspects of
          tinygrad.</dd>

        <dt>How can I work for the tiny corp?</dt>
        <dd>See <b>hiring</b> above. Contributions to <a href="https://github.com/tinygrad/tinygrad">tinygrad</a> on GitHub
          always
          welcome, and a good way to get hired.</dd>

        <dt>Can I invest in the tiny corp?</dt>
        <dd>Invest with your PRs.</dd>

        <dt>What's the goal of the tiny corp?</dt>
        <dd>To accelerate. We will commoditize the petaflop and enable AI for everyone.</dd>
      </dl>

      <main className="content">
        <p className="description">
          Revolutionizing electronic design automation
        </p>
        <button className="mailto-button" onClick={handleMailTo}>
          Contact Us
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
