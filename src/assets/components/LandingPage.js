import React from 'react'
import './LandingPage.css'

function LandingPage() {
  return (
    <main className="landing">
      <header className="lp-header">
        <h1>Hello — Landing Page</h1>
        <p className="lp-sub">Welcome to this simple Vite + React landing page.</p>
        <a className="lp-cta" href="#get-started">Get started</a>
      </header>

      <section className="lp-content" id="get-started">
        <div className="lp-card">
          <h2>Quick Start</h2>
          <p>Use this component as a starting point for your project.</p>
        </div>
      </section>
    </main>
  )
}

export default LandingPage;
