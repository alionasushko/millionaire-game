import React from 'react'
import { useNavigate } from 'react-router-dom'
import hand_image from '../../assets/hand.png'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { selectors, actions } from '../../features/game'
import Button from '../../components/Button'
import './main.css'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loadingQuiz = useAppSelector(selectors.getLoadingQuiz)

  const startGame = async () => {
    await dispatch(actions.fetchQuestions())
    navigate('/game')
  }

  return (
    <section className="main-layout background-gradient container">
      <div className="main-layout-content">
        <div className="hand-image-wrapper">
          <img className="hand-image" src={hand_image} />
        </div>
        <div className="text-content-wrapper">
          <h1>Who wants to be a millionaire?</h1>
          <Button
            className="btn-primary"
            loading={loadingQuiz}
            disabled={loadingQuiz}
            onClick={startGame}
          >
            Start
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Home
