import { CHANGE_QUESTION, RESET_QUIZ, TOGGLE_MOBILE_MENU } from './actionTypes'

interface ChangeQuestionAction {
  type: typeof CHANGE_QUESTION
  payload?: GameState
}
interface ResetQuizAction {
  type: typeof RESET_QUIZ
}
interface OpenMobileMenu {
  type: typeof TOGGLE_MOBILE_MENU
  payload: boolean
}

export type GameActionTypes =
  | ChangeQuestionAction
  | ResetQuizAction
  | OpenMobileMenu

interface Answer {
  id: string
  label: string
}

export interface Question {
  id: string
  question: string
  answers: Answer[]
  correctAnswers: string[]
}

export interface GameState {
  game: {
    level: {
      quiz: Question
      prize: number
    }
    earnedMoney: number
    isOpenMobileMenu: boolean
  }
}
