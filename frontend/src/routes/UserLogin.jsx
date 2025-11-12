import React from 'react'
import '../styles/auth.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const UserLogin = () => {


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/login", {
        email ,
        password
        },{
        withCredentials: true
        })

        console.log(response.data);

        navigate("/");
  }
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="brand-mark">U</div>
          <div>
            <h3 className="auth-title">Welcome back</h3>
            <div className="auth-sub">Login to your user account</div>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" className="input" placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" className="input" type="password" placeholder="Your password" />
          </div>

          <div className="actions">
            <a className="muted-link" href="#">Forgot password?</a>
            <button className="btn btn-primary">Sign in</button>
          </div>
        </form>

        <div className="divider" />
        <div className="help">Or continue with a social account (not wired)</div>
      </div>
    </div>
  )
}

export default UserLogin
