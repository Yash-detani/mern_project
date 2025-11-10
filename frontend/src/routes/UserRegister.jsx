import React from 'react'
import '../styles/auth.css'
import axios from 'axios'

const UserRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="brand-mark">U</div>
          <div>
            <h3 className="auth-title">Create account</h3>
            <div className="auth-sub">Register as a regular user</div>
          </div>
        </div>

        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="field">
            <label>Full name</label>
            <input className="input" placeholder="Jane Doe" />
          </div>
          <div className="field">
            <label>Email</label>
            <input className="input" placeholder="you@example.com" />
          </div>

          <div className="field">
            <label>Password</label>
            <input className="input" type="password" placeholder="Min 8 characters" />
          </div>

          <div className="actions">
            <a className="muted-link" href="#">Already have an account?</a>
            <button className="btn btn-primary">Create account</button>
          </div>
        </form>

        <div className="divider" />
        <div className="help">By continuing you agree to our Terms of Service and Privacy Policy.</div>
      </div>
    </div>
  )
}

export default UserRegister
