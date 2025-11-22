import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './saved.css'
import axios from 'axios'

const Saved = () => {
  const [videos, setVideos] = useState([]);
  const videoRef = useRef(new Map());

  useEffect(() => { 

    axios.get("http://localhost:3000/api/food/save", {withCredentials: true})

    .then(response => {
      const savedFoods = response.data.savedFoods.map((item) => ({
      _id: item.food._id,
      video: item.food.video,
      description: item.food.description,
      likeCount: item.food.likeCount,
      saveCount: item.food.saveCount,
      commentCount: item.food.commentCount
    }))

    setVideos(savedFoods);
  })

  }, [])

   
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
