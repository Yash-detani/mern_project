import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './home.css'

const Icon = ({ children, label, count }) => (
  <div className="side-icon" title={label}>
    <div className="side-icon-graphic">{children}</div>
    {typeof count !== 'undefined' && <div className="side-icon-count">{count}</div>}
  </div>
);

const Reel = ({ item, isActive, onPlay }) => {
  const videoRef = useRef();

  // Pause video when not active
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <div className="reel" onClick={onPlay}>
      {item.videos ? (
        <video
          ref={videoRef}
          className="reel-video"
          src={item.videos}
          muted
          loop
          playsInline
          preload="metadata"
          style={{ background: item.color }}
        />
      ) : (
        <div className="placeholder" style={{ background: item.color }} aria-hidden />
      )}
      <div className="reel-overlay">
        <div className="reel-left">
          <div className="reel-desc">{item.description}</div>
          <Link className="reel-button" to={"/food-partner/" + item.foodPartner} aria-label='Visit Store'>visit store</Link>
        </div>
        <div className="reel-right">
          <Icon label="Likes" count={item.likeCount}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-7-4.35-9.2-6.3C.9 12.84 2.3 7.5 6 5.7 8.1 4.6 10.6 5 12 6.6c1.4-1.6 3.9-2 6-1.1 3.7 1.8 5.1 7.1 3.2 9.99C19 16.65 12 21 12 21z" stroke="#fff" strokeWidth="1.2" fill="none"/></svg>
          </Icon>
          <Icon label="Save">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h12v18l-6-3-6 3V2z" stroke="#fff" strokeWidth="1.2" fill="none"/></svg>
          </Icon>
          <Icon label="Comments" count={item.comments ? item.comments.length : 0}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#fff" strokeWidth="1.2" fill="none"/></svg>
          </Icon>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [reels, setReels] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/api/food", { withCredentials: true })
      .then(response => {
        setReels(response.data.foodItems);
      });
  }, []);

  return (
    <div className="reels-root">
      <div className="reels-list">
        {reels.map((r, idx) => (
          <Reel
            key={r._id}
            item={r}
            isActive={idx === activeIndex}
            onPlay={() => setActiveIndex(idx)}
          />
        ))}
      </div>
      <nav className="bottom-nav">
        <Link to="/" className="bottom-nav-item">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 11.5L12 4l9 7.5" stroke="#fff" strokeWidth="1.2"/></svg>
          <div className="nav-label">home</div>
        </Link>
        <Link to="/saved" className="bottom-nav-item">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 2h12v18l-6-3-6 3V2z" stroke="#fff" strokeWidth="1.2"/></svg>
          <div className="nav-label">saved</div>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
