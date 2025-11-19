import React,{useState,useEffect} from 'react'
import '../../../styles/auth.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Profile = () => {
    const {id} = useParams();
    const [profile, setProfile] = useState(null);

    const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/food-partner/${id}`, {withCredentials:true})
      .then(response => {
        setProfile(response.data.foodPartner);
        setVideos(response.data.foodPartner.foodItems);
      })
    }, [id]);

  return (
    <div className="auth-page">
      <div className="profile-outer">
        <div className="auth-card profile-card">
          <div className="profile-inner">
            <div className="profile-header">
              
                <img className="profile-avatar" src="https://images.unsplash.com/photo-1763063556535-5f6174a5c5d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" alt="" />
              
              <div className="profile-meta">
                <div className="pill business">{profile?.name}</div>
                <div className="pill muted">{profile?.email}</div>
              </div>
            </div>

            <div className="profile-stats">
              <div className="stat">
                <div className="stat-label">total-meals</div>
                <div className="stat-value">{profile?.totalMeals}</div>
              </div>
              <div className="stat">
                <div className="stat-label">customer serve</div>
                <div className="stat-value">{profile?.customersServed}</div>
              </div>
            </div>

            <div className="divider" />
          </div>

          <div className="video-panel">
            
              {videos.map((v) => (
                <div key={v._id} ><video 
                className="video-card"
                style={{objectFit: 'cover', width: '100px'}}
                src = {v.videos} muted></video></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
