import React from 'react'
import '../styles/auth.css'
import {Link} from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const PartnerRegister = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const businessName = e.target.businessName.value;

    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;

    const response =  await axios.post("http://localhost:3000/api/auth/food-partner/register", {
      name:businessName,
      email,
      phoneNumber: phone,
      password
    }, {
      withCredentials: true
    })
      .then(response => {
        console.log(response.data);
        navigate("/create-food");

      })
      .catch(error => {
        console.error("There was an error!", error);
      });
      
    };
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

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="businessName">Business name</label>
            <input id="businessName" name="businessName" className="input" placeholder="Tasty Eats" />
          </div>
          <div className="field">
            <label htmlFor="email">Contact email</label>
            <input id="email" name="email" className="input" placeholder="owner@tastyeats.com" />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone (no country code)</label>
            <input id="phone" name="phone" className="input" inputMode="tel" pattern="[0-9]*" placeholder="555555555" />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" className="input" type="password" placeholder="Min 8 characters" />
          </div>

          <div className="actions">
            <a className="muted-link" href="#">Already partner? Sign in</a>
            <button className="btn btn-primary">Create account</button>
          </div>
        </form>

        <div className="divider" />
        <div className="help">We'll review your application and contact you via email.</div>
        <div style={{marginTop:12, textAlign:'center'}}>
          <Link to="/user/register" className="muted-link">Register as a user</Link>
        </div>
      </div>
    </div>
  )
}

export default PartnerRegister
