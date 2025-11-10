import React from 'react'
import '../styles/auth.css'

const PartnerLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="brand-mark">P</div>
          <div>
            <h3 className="auth-title">Partner sign in</h3>
            <div className="auth-sub">Login to your food-partner account</div>
          </div>
        </div>

        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="field">
            <label>Email</label>
            <input className="input" placeholder="partner@example.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input className="input" type="password" placeholder="Your password" />
          </div>

          <div className="actions">
            <a className="muted-link" href="#">Forgot password?</a>
            <button className="btn btn-primary">Sign in</button>
          </div>
        </form>

        <div className="divider" />
        <div className="help">Need help? Contact support.</div>
      </div>
    </div>
  )
}

export default PartnerLogin
