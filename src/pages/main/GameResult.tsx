import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectors } from '../../features/game'
import { numberWithCommas } from '../../utils/helpers'
import hand_image from '../../assets/hand.png'
import './main.css'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const earnedMoney = useSelector(selectors.getEarnedMoney)

  const startGame = () => {
    navigate('/game')
  }

  return (
    <section className="main-layout container">
      <div className="main-layout-content">
        <div className="hand-image-wrapper">
          <img className="hand-image" src={hand_image} />
        </div>
        <div className="text-content-wrapper">
          <span className="score-label">Total score:</span>
          <h2>${numberWithCommas(earnedMoney)} earned</h2>
          <button className="btn-primary" onClick={startGame}>
            Try again
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
