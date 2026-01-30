import React from 'react'
import './LandingPage.css'
import NavBar from './NavBar'
import Bumpups from './Bumpups'
import Timestamp from './Timestamp'
import Footer from './Footer'

function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />
      <main className="landing">
        <h1>Hello — Landing Page</h1>
        <Bumpups />
        <Timestamp />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
