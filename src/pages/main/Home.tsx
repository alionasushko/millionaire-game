import React from 'react'
import { useNavigate } from 'react-router-dom'
import hand_image from '../../assets/hand.png'
import './main.css'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const startGame = () => navigate('/game')

  return (
    <section className="main-layout background-gradient container">
      <div className="main-layout-content">
        <div className="hand-image-wrapper">
          <img className="hand-image" src={hand_image} />
        </div>
        <div className="text-content-wrapper">
          <h1>Who wants to be a millionaire?</h1>
          <button className="btn-primary" onClick={startGame}>
            Start
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
