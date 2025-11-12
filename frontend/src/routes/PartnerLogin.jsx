import React from 'react'
import '../styles/auth.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const PartnerLogin = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault(); 
      const email = e.target.email.value;
      const password = e.target.password.value;

      const response = await axios.post("http://localhost:3000/api/auth/food-partner/login", {
          email ,
          password},{
            withCredentials: true
          })
          
      console.log(response.data);
      navigate("/create-food");
        
      }
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

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" className="input" placeholder="partner@example.com" />
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
        <div className="help">Need help? Contact support.</div>
      </div>
    </div>
  )
}

export default PartnerLogin
