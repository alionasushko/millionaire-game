import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { selectors, actionTypes } from '../../features/game'
import Quiz from './quiz/Quiz'
import Prize from './prize/Prize'
import './game.css'

const Game: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const quiz = useAppSelector(selectors.getQuiz)
  const earnedMoney = useAppSelector(selectors.getEarnedMoney)

  useEffect(() => {
    if (!quiz) return navigate('/')
    if (earnedMoney > 0) dispatch({ type: actionTypes.RESET_QUIZ })
  }, [])

  return (
    <section className="game container">
      <Quiz />
      <Prize />
      <svg xmlns="http://www.w3.org/2000/svg" width={0} height={0}>
        <clipPath id="hexagonal-shape" clipPathUnits="objectBoundingBox">
          <path d="M0.084,0 H0.916 C0.926,0,0.935,0.024,0.94,0.065 L1,0.5 L0.94,0.935 C0.935,0.976,0.926,1,0.916,1 H0.084 C0.074,1,0.065,0.976,0.06,0.935 L0,0.5 L0.06,0.065 C0.065,0.024,0.074,0,0.084,0"></path>
        </clipPath>
      </svg>
    </section>
  )
}

export default Game
