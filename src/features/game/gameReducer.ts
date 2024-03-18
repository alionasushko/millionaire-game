/* eslint-disable @typescript-eslint/default-param-last */

import {
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  CHANGE_QUESTION,
  RESET_QUIZ,
  TOGGLE_MOBILE_MENU,
} from './actionTypes'
import { GameActionTypes } from './types'
import money from '../../data/money.json'

const initialState = {
  level: {
    quiz: null,
    prize: money[0],
  },
  questions: [],
  loadingQuiz: false,
  quizError: null,
  earnedMoney: 0,
  isOpenMobileMenu: false,
}

export default (state = initialState, action: GameActionTypes) => {
  switch (action.type) {
    case FETCH_QUESTIONS_BEGIN:
      return {
        ...initialState,
        loadingQuiz: true,
        earnedMoney: state.earnedMoney,
      }
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        level: { ...state.level, quiz: action.payload[0] },
        questions: action.payload,
        loadingQuiz: false,
        earnedMoney: initialState.earnedMoney,
      }
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        quizError: action.payload,
        loadingQuiz: false,
        earnedMoney: initialState.earnedMoney,
      }
    case CHANGE_QUESTION: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case RESET_QUIZ:
      return {
        ...state,
        level: {
          ...state.level,
          prize: initialState.level.prize,
          earnedMoney: initialState.earnedMoney,
        },
      }
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isOpenMobileMenu: action.payload,
      }
    default:
      return state
  }
}
