/* eslint-disable @typescript-eslint/default-param-last */

import { CHANGE_QUESTION, RESET_QUIZ, TOGGLE_MOBILE_MENU } from './actionTypes'
import { GameActionTypes } from './types'
import questions from '../../data/questions.json'
import money from '../../data/money.json'

const initialState = {
  level: {
    quiz: questions[0],
    prize: money[0],
  },
  earnedMoney: 0,
  isOpenMobileMenu: false,
}

export default (state = initialState, action: GameActionTypes) => {
  switch (action.type) {
    case CHANGE_QUESTION: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case RESET_QUIZ:
      return { ...initialState }
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isOpenMobileMenu: action.payload,
      }
    default:
      return state
  }
}
