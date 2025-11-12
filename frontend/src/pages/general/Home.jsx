import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './home.css'

const sampleReels = [
  { id: 1, src: 'https://ik.imagekit.io/Yuvraj/9fc58f70-4a9f-4568-973d-f6d85738c5cf_j7pg1d_Ww', color: '#0ea5e9', desc: 'Fresh biryani and rolls delivered hot to your door — try our chef special combo today.' },
  { id: 2, src: 'https://ik.imagekit.io/Yuvraj/9fc58f70-4a9f-4568-973d-f6d85738c5cf_j7pg1d_Ww', color: '#ef4444', desc: 'Crispy fries and a juicy burger set that will change your lunch game. Limited time offer!' },
  { id: 3, src: 'https://ik.imagekit.io/Yuvraj/9fc58f70-4a9f-4568-973d-f6d85738c5cf_j7pg1d_Ww', color: '#10b981', desc: 'Healthy bowls with organic ingredients — subscription discounts available for partners.' }
]

const Reel = ({item}) => {
  return (
    <div className="reel">
      {/* Show video if src exists, else show placeholder */}
      {item.src ? (
        <video
          src={item.src}
          className="reel-video"
          autoPlay
          muted
          loop
          playsInline
          style={{background: item.color}}
        />
      ) : (
        <div className="placeholder" style={{background: item.color}} aria-hidden />
      )}

      <div className="reel-overlay">
        <div className="reel-desc">{item.desc}</div>
        <Link className="reel-button"to={"/food-partner/" + item.foodPartner} aria-label='Visit Store'>Visit Store</Link>
      </div>
    </div>
  )
}

const Home = () => {
  
  const [reels, setReels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/food")
    .then(response=>{
      setReels(response.data.fooditems);
    })
  })
  return (
    <div className="reels-root">
      <div className="reels-list">
        {sampleReels.map(r => <Reel key={r.id} item={r} />)}
      </div>
    </div>
  )


}

export default Home
