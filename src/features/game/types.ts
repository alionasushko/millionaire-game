import {
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  CHANGE_QUESTION,
  RESET_QUIZ,
  TOGGLE_MOBILE_MENU,
} from './actionTypes'

interface FetchQuestionsBeginAction {
  type: typeof FETCH_QUESTIONS_BEGIN
}
interface FetchQuestionsSuccessAction {
  type: typeof FETCH_QUESTIONS_SUCCESS
  payload: Question[]
}

interface FetchQuestionsFailureAction {
  type: typeof FETCH_QUESTIONS_FAILURE
  payload: any
}
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
  | FetchQuestionsBeginAction
  | FetchQuestionsSuccessAction
  | FetchQuestionsFailureAction
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
    questions: Question[]
    loadingQuiz: boolean
    quizError: string
    earnedMoney: number
    isOpenMobileMenu: boolean
  }
}
