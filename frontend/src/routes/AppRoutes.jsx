import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserRegister from './UserRegister'
import UserLogin from './UserLogin'
import PartnerRegister from './PartnerRegister'
import PartnerLogin from './PartnerLogin'
import Home from '../pages/general/Home';
import CreateFood from '../pages/general/auth/CreateFood';
import Profile from '../pages/general/auth/Profile';
import Saved from '../pages/general/Saved';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/user/register" element={<UserRegister/>} />
            <Route path="/user/login" element={<UserLogin/>} />
            <Route path="/food-partner/register" element={<PartnerRegister/>} />
            <Route path="/food-partner/login" element={<PartnerLogin/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/create-food" element = {<CreateFood/>} />
            <Route path="/food-partner/:id" element = {<Profile/>} />
            <Route path="/saved" element={<Saved/>} />
        </Routes>
    </Router>

  )
}

export default AppRoutes
