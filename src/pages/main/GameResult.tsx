import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { selectors, actions } from '../../features/game'
import { numberWithCommas } from '../../utils/helpers'
import Button from '../../components/Button'
import hand_image from '../../assets/hand.png'
import './main.css'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loadingQuiz = useAppSelector(selectors.getLoadingQuiz)
  const earnedMoney = useAppSelector(selectors.getEarnedMoney)

  const startGame = async () => {
    await dispatch(actions.fetchQuestions())
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
          <Button
            className="btn-primary"
            loading={loadingQuiz}
            disabled={loadingQuiz}
            onClick={startGame}
          >
            Try again
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Home
