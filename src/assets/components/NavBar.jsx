import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Left: Logo + Brand Name */}
        <div className="navbar-brand">
          <img src="/src/assets/mylogo.png" alt="Logo" className="logo-img" />
          <span className="brand-name">Video Stamper</span>
        </div>

        {/* Center: Simplified Links */}
        <ul className="navbar-links">
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#credits">Credits</a></li>
        </ul>

        {/* Right: Single High-Impact Button */}
        <div className="navbar-actions">
          <button className="btn-cta">Do More With Videos</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar