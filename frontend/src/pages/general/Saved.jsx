import React from 'react'
import { Link } from 'react-router-dom'
import './saved.css'

const Saved = () => {
  return (
    <div className="saved-root">
      <div className="saved-empty">
        <div className="saved-emoji">🔖</div>
        <h2>Saved</h2>
        <p>Your saved items will appear here.</p>
        <Link to="/" className="saved-cta">Go to Home</Link>
      </div>
      <nav className="bottom-nav saved-bottom">
        <Link to="/" className="bottom-nav-item">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 11.5L12 4l9 7.5" stroke="#fff" strokeWidth="1.2"/></svg>
          <div className="nav-label">home</div>
        </Link>
        <Link to="/saved" className="bottom-nav-item active">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 2h12v18l-6-3-6 3V2z" stroke="#fff" strokeWidth="1.2"/></svg>
          <div className="nav-label">saved</div>
        </Link>
      </nav>
    </div>
  )
}

export default Saved
