import React from 'react'
import '../styles/auth.css'

const PartnerRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="brand-mark">P</div>
          <div>
            <h3 className="auth-title">Partner sign up</h3>
            <div className="auth-sub">Register as a food partner</div>
          </div>
        </div>

        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="field">
            <label>Business name</label>
            <input className="input" placeholder="Tasty Eats" />
          </div>
          <div className="field">
            <label>Contact email</label>
            <input className="input" placeholder="owner@tastyeats.com" />
          </div>

          <div className="field">
            <label>Phone (no country code)</label>
            <input className="input" inputMode="tel" pattern="[0-9]*" placeholder="555555555" />
          </div>

          <div className="field">
            <label>Password</label>
            <input className="input" type="password" placeholder="Min 8 characters" />
          </div>

          <div className="actions">
            <a className="muted-link" href="#">Already partner? Sign in</a>
            <button className="btn btn-primary">Create account</button>
          </div>
        </form>

        <div className="divider" />
        <div className="help">We'll review your application and contact you via email.</div>
      </div>
    </div>
  )
}

export default PartnerRegister
