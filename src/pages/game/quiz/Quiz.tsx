import React, { useCallback, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { useNavigate } from 'react-router-dom'
import { useErrorBoundary } from 'react-error-boundary'
import { selectors, actionTypes } from '../../../features/game'
import { Question } from '../../../features/game/types'
import money from '../../../data/money.json'
import Icon from '../../../components/Icon'
import './quiz.css'

const ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

const Quiz: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { showBoundary } = useErrorBoundary()

  const quiz = useAppSelector(selectors.getQuiz)
  const questions = useAppSelector(selectors.getQuestions)
  const isOpenMobileMenu = useAppSelector(selectors.getIsOpenMobileMenu)

  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])

  const checkAnswers = (userAnswers: string[]) => {
    try {
      const indexOfCurrentQuestion: number = questions.findIndex(
        (question: Question) => question.id === quiz.id
      )
      const indexOfNextQuestion: number = indexOfCurrentQuestion + 1
      const isCorrectResolve = userAnswers.every((answer) =>
        quiz.correctAnswers.includes(answer)
      )

      if (isCorrectResolve) {
        if (indexOfNextQuestion === questions.length) {
          dispatch({
            type: actionTypes.CHANGE_QUESTION,
            payload: {
              earnedMoney: money[indexOfCurrentQuestion],
            },
          })
          navigate('/game-result')
        } else {
          dispatch({
            type: actionTypes.CHANGE_QUESTION,
            payload: {
              level: {
                quiz: {
                  ...questions[indexOfNextQuestion],
                },
                prize: money[indexOfNextQuestion],
              },
              earnedMoney: money[indexOfCurrentQuestion],
            },
          })
          setSelectedAnswers([])
        }
      } else navigate('/game-result')
    } catch (error) {
      showBoundary(error)
    }
  }

  const chooseAnswer = (id: string) => {
    if (selectedAnswers.includes(id))
      return setSelectedAnswers((answers) =>
        answers.filter((answer) => answer !== id)
      )

    const userAnswers = [...selectedAnswers, id]
    setSelectedAnswers(userAnswers)
    if (userAnswers.length !== quiz.correctAnswers.length) return

    setTimeout(() => checkAnswers(userAnswers), 2000)
  }

  const openMobileMenu = useCallback(() => {
    dispatch({
      type: actionTypes.TOGGLE_MOBILE_MENU,
      payload: true,
    })
  }, [])

  const getOptionStatus = (id: string) => {
    const optionClasses = []
    if (selectedAnswers.length === quiz.correctAnswers.length) {
      optionClasses.push('disabled')
      if (selectedAnswers.includes(id)) {
        if (quiz.correctAnswers.includes(id)) optionClasses.push('success')
        else optionClasses.push('error')
      }
    } else if (selectedAnswers.includes(id)) optionClasses.push('active')
    return optionClasses.join(' ')
  }

  return (
    <div className={`quiz ${isOpenMobileMenu ? 'closed' : 'open'}`}>
      <Icon
        name="menu"
        className="only-mobile mobile-menu-icon"
        onClick={openMobileMenu}
      />
      <h2 className="quiz-question">{quiz?.question}</h2>
      <div className="answers-wrapper">
        {quiz?.answers.map(({ id, label }, index) => (
          <div
            key={id}
            className={`option-wrapper answer-option-wrapper ${getOptionStatus(
              id
            )}`}
          >
            <div
              className="option-outer answer-option-outer"
              onClick={() => chooseAnswer(id)}
            >
              <div className="option-inner answer-option-inner">
                <span className="option-letter">{ALPHABET[index]}</span>
                {label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quiz
