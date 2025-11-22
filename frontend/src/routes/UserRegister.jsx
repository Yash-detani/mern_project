import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullName = e.target.fullName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const response =   await axios.post("http://localhost:3000/api/auth/user/register", {
            fullName,
            email,
          password
        },
        
        
        {
          withCredentials: true
        })
        

        console.log(response.data);

        navigate("/home");
}
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

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="fullName">Full name</label>
            <input id="fullName" name="fullName" className="input" placeholder="Jane Doe" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" className="input" placeholder="you@example.com" />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" className="input" type="password" placeholder="Min 8 characters" />
          </div>

          <div className="actions">
            <a className="muted-link" href="#">Already have an account?</a>
            <button className="btn btn-primary">Create account</button>
          </div>
        </form>

        <div className="divider" />
        <div className="help">By continuing you agree to our Terms of Service and Privacy Policy.</div>
        <div style={{marginTop:12, textAlign:'center'}}>
          <Link to="/food-partner/register" className="muted-link">Register as a partner</Link>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
